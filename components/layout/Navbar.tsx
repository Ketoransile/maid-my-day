"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useNavbarScroll } from "@/hooks/use-navbar-scroll";
import { useLanguage } from "@/components/providers/language-provider";
import { SiteContainer } from "@/components/layout/site-container";
import {
  allNavMenuItems,
  extendedNavLinks,
  getNavBarLabel,
  getNavSubmenuLabel,
  homeNavHref,
  isNavItemActive,
  usesCompactNavBar,
  type NavMenuItem,
} from "@/lib/navigation";
import { getLenis } from "@/lib/lenis-instance";
import { scrollToSection } from "@/lib/smooth-scroll";
import { cn } from "@/lib/utils";

const navLinkClass =
  "navbar-link inline-flex h-9 items-center gap-1 rounded-md bg-transparent px-3 text-sm font-semibold text-ink/85 shadow-none transition-colors hover:bg-white/30 hover:text-ink";

const navLinkCompactClass =
  "navbar-link inline-flex h-9 items-center gap-0.5 rounded-md bg-transparent px-2 text-[13px] font-semibold leading-none text-ink/85 shadow-none transition-colors hover:bg-white/30 hover:text-ink";

const navLinkActiveClass =
  "bg-primary text-primary-foreground shadow-none hover:bg-primary/90 hover:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground";

const chevronClass =
  "relative top-px h-3.5 w-3.5 shrink-0 opacity-60 transition-transform duration-300";

const chevronActiveClass = "text-primary-foreground opacity-90";

const contactNavClass =
  "navbar-contact-btn inline-flex h-9 items-center rounded-md px-3 text-sm font-medium shadow-none transition-colors";

function NavDropdownPanel({
  item,
  pathname,
  compact,
}: {
  item: NavMenuItem;
  pathname: string;
  compact: boolean;
}) {
  const { t } = useLanguage();
  const isActive = isNavItemActive(pathname, item.href);
  const linkClass = compact ? navLinkCompactClass : navLinkClass;
  const title =
    item.key === "home"
      ? getNavBarLabel(t.nav, "home")
      : getNavBarLabel(t.nav, item.key);

  return (
    <NavigationMenuItem className="relative">
      <NavigationMenuTrigger asChild>
        <Link
          href={item.href}
          className={cn(
            linkClass,
            "group navbar-link-item",
            isActive
              ? cn("navbar-link-active", navLinkActiveClass)
              : "data-[state=open]:bg-white/30 data-[state=open]:text-ink",
          )}
        >
          {title}
          <ChevronDown
            className={cn(
              chevronClass,
              "group-data-[state=open]:rotate-180",
              isActive && chevronActiveClass,
            )}
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

function NavMenuDropdowns({
  pathname,
  compact,
}: {
  pathname: string;
  compact: boolean;
}) {
  return (
    <NavigationMenu className="relative z-10 hidden max-w-max lg:flex">
      <NavigationMenuList className={cn(compact && "gap-0")}>
        {allNavMenuItems.map((item) => (
          <NavDropdownPanel
            key={item.key}
            item={item}
            pathname={pathname}
            compact={compact}
          />
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
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-6 pb-6 pt-2">
          <nav className="space-y-1">
            <LanguageSwitcher variant="sheet" chevronClassName={chevronClass} />
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
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const isHome = pathname === homeNavHref;
  const showGlass = scrolled || !isHome || menuOpen;
  const compactNav = usesCompactNavBar(t.nav);

  const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);

    if (pathname === homeNavHref) {
      scrollToSection("hero");
      window.history.replaceState(null, "", homeNavHref);
      return;
    }

    router.push(`${homeNavHref}#hero`);
  };

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
            href={`${homeNavHref}#hero`}
            onClick={handleBrandClick}
            className="navbar-brand flex shrink-0 cursor-pointer items-center gap-2"
          >
            <Gem size={18} className="text-primary" strokeWidth={1.5} />
            <span className="text-[17px] font-semibold text-ink">Maid My Day</span>
          </Link>

          <NavMenuDropdowns pathname={pathname} compact={compactNav} />

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className={cn(
                contactNavClass,
                "hidden font-semibold sm:inline-flex",
                compactNav && "px-2 text-[13px]",
                isNavItemActive(pathname, "/contact") && "ring-2 ring-primary/25",
              )}
            >
              {getNavBarLabel(t.nav, "contactUs")}
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
