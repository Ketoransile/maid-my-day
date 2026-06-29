"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown, Gem, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNavbarScroll } from "@/hooks/use-navbar-scroll";
import { useLanguage } from "@/components/providers/language-provider";
import { SiteContainer } from "@/components/layout/site-container";
import { languageOptions, type Locale } from "@/lib/i18n";
import {
  allNavMenuItems,
  extendedNavLinks,
  getNavSubmenuLabel,
  homeNavHref,
  isNavItemActive,
  type NavMenuItem,
} from "@/lib/navigation";
import { getLenis } from "@/lib/lenis-instance";
import { cn } from "@/lib/utils";

const navLinkClass =
  "navbar-link inline-flex h-9 items-center gap-1 rounded-md bg-transparent px-3 text-sm font-medium text-ink/85 shadow-none transition-colors hover:bg-white/30 hover:text-ink";

const navLinkActiveClass = "bg-white/30 text-ink";

const contactNavClass =
  "navbar-contact-btn inline-flex h-9 items-center rounded-md px-3 text-sm font-medium shadow-none transition-colors";

const chevronClass =
  "relative top-px h-3.5 w-3.5 shrink-0 opacity-60 transition-transform duration-300";

function LanguageSelect({
  className,
  variant = "nav",
}: {
  className?: string;
  variant?: "nav" | "sheet";
}) {
  const { locale, setLocale, t } = useLanguage();
  const isNav = variant === "nav";

  return (
    <Select
      value={locale}
      onValueChange={(value) => setLocale(value as Locale)}
    >
      <SelectTrigger
        className={cn(
          isNav
            ? cn(
                navLinkClass,
                "language-select-nav h-9 w-[9.5rem] min-w-[9.5rem] max-w-[9.5rem] justify-between border px-2.5 shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none data-[state=open]:bg-[rgba(43,95,75,0.12)] data-[state=open]:text-ink [&_svg]:opacity-80",
              )
            : "language-select-nav mt-2 h-9 w-full justify-between border px-2.5 text-sm shadow-none",
          className,
        )}
        aria-label={t.nav.language}
      >
        <SelectValue placeholder={t.nav.language} />
      </SelectTrigger>
      <SelectContent position="popper" sideOffset={4}>
        {languageOptions.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="data-[highlighted]:bg-primary/10 data-[highlighted]:text-primary"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function NavDropdownPanel({
  item,
  pathname,
}: {
  item: NavMenuItem;
  pathname: string;
}) {
  const { t } = useLanguage();
  const isActive = isNavItemActive(pathname, item.href);
  const title = item.key === "home" ? t.nav.home : t.nav[item.key];

  return (
    <NavigationMenuItem className="relative">
      <NavigationMenuTrigger asChild>
        <Link
          href={item.href}
          className={cn(
            navLinkClass,
            "group data-[state=open]:bg-white/30 data-[state=open]:text-ink",
            isActive && navLinkActiveClass,
          )}
        >
          {title}
          <ChevronDown
            className={cn(chevronClass, "group-data-[state=open]:rotate-180")}
            aria-hidden="true"
          />
        </Link>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[min(100vw-2rem,15.5rem)] gap-0.5 p-2">
          {item.submenu.map((sub) => (
            <li key={`${item.key}-${String(sub.labelKey)}`}>
              <NavigationMenuLink asChild>
                <Link
                  href={sub.href}
                  className="block select-none rounded-md px-3 py-2 text-sm leading-snug text-ink/75 no-underline outline-none transition-colors hover:bg-primary/5 hover:text-primary focus:bg-primary/5 focus:text-primary"
                >
                  {getNavSubmenuLabel(t.nav.submenu, item.key, sub.labelKey)}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
          <li className="mt-1 border-t border-ink/6 pt-1">
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className="block select-none rounded-md px-3 py-2 text-sm font-medium leading-none text-primary no-underline outline-none transition-colors hover:bg-primary/5"
              >
                {title} →
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function NavMenuDropdowns({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu className="relative z-10 hidden max-w-max lg:flex">
      <NavigationMenuList>
        {allNavMenuItems.map((item) => (
          <NavDropdownPanel key={item.key} item={item} pathname={pathname} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNavSection({
  item,
  onNavigate,
  defaultOpen = false,
}: {
  item: NavMenuItem;
  onNavigate: () => void;
  defaultOpen?: boolean;
}) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(defaultOpen);
  const title = item.key === "home" ? t.nav.home : t.nav[item.key];

  return (
    <div className="border-b border-ink/6 pb-4">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 py-1 text-left"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <Link
          href={item.href}
          onClick={(event) => {
            event.stopPropagation();
            onNavigate();
          }}
          className="text-base font-semibold text-ink transition-colors hover:text-primary"
        >
          {title}
        </Link>
        <ChevronDown
          className={cn(chevronClass, "text-ink/50", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      <ul
        className={cn(
          "mt-2 space-y-0.5 overflow-hidden pl-1 transition-all duration-300",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {item.submenu.map((sub) => (
          <li key={`${item.key}-${String(sub.labelKey)}`}>
            <Link
              href={sub.href}
              onClick={onNavigate}
              className="block rounded-md px-2 py-2 text-sm text-ink/65 transition-colors hover:bg-ink/5 hover:text-primary"
            >
              {getNavSubmenuLabel(t.nav.submenu, item.key, sub.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FullMenuSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const pathname = usePathname();

  const close = () => onOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        data-lenis-prevent
        className="flex h-full w-full flex-col gap-0 overflow-hidden p-0 sm:max-w-md"
      >
        <div className="shrink-0 px-6 pb-4 pt-6">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Gem size={18} className="text-primary" strokeWidth={1.5} />
              Maid My Day
            </SheetTitle>
          </SheetHeader>

          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink/45">
              {t.nav.language}
            </p>
            <LanguageSelect variant="sheet" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-6 pb-6 pt-2">
          <nav className="space-y-1">
            {allNavMenuItems.map((item) => (
              <MobileNavSection
                key={item.key}
                item={item}
                onNavigate={close}
                defaultOpen={isNavItemActive(pathname, item.href)}
              />
            ))}
          </nav>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink/45">
              {t.nav.allLinks}
            </p>
            <ul className="mt-3 space-y-1">
              {extendedNavLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className="block rounded-md px-2 py-2.5 text-sm text-ink/65 transition-colors hover:bg-ink/5 hover:text-primary"
                  >
                    {t.nav.extended[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Button className="mt-8 w-full" asChild>
            <Link href="/contact" onClick={close}>
              {t.nav.contactUs}
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar() {
  const scrolled = useNavbarScroll(48);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const isHome = pathname === homeNavHref;
  const showGlass = scrolled || !isHome || menuOpen;

  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;

    if (menuOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.start();
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={false}
        className={cn(
          "navbar-shell fixed inset-x-0 top-0 z-[100] w-full",
          showGlass ? "navbar-glass-scrolled" : "navbar-over-hero",
        )}
      >
        <SiteContainer className="flex h-16 items-center justify-between gap-3">
          <Link
            href={homeNavHref}
            className="navbar-brand flex shrink-0 cursor-pointer items-center gap-2"
          >
            <Gem size={18} className="text-primary" strokeWidth={1.5} />
            <span className="text-[17px] font-semibold text-ink">Maid My Day</span>
          </Link>

          <NavMenuDropdowns pathname={pathname} />

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelect className="hidden sm:flex" />
            <Link
              href="/contact"
              className={cn(
                contactNavClass,
                "hidden sm:inline-flex",
                isNavItemActive(pathname, "/contact") && "ring-2 ring-primary/25",
              )}
            >
              {t.nav.contactUs}
            </Link>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="navbar-menu-btn h-9 w-9 shrink-0 shadow-none"
              aria-label={t.nav.openMenu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={18} strokeWidth={1.5} />
            </Button>
          </div>
        </SiteContainer>
      </motion.nav>

      <FullMenuSheet open={menuOpen} onOpenChange={setMenuOpen} />
    </>
  );
}
