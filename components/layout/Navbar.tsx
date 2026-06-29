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
  extendedNavLinks,
  homeNavHref,
  isNavItemActive,
  mainNavItems,
} from "@/lib/navigation";
import { getLenis } from "@/lib/lenis-instance";
import { cn } from "@/lib/utils";

const navLinkClass =
  "navbar-link inline-flex h-9 items-center gap-1 rounded-md bg-transparent px-3 text-sm font-medium text-ink/85 shadow-none transition-colors hover:bg-white/30 hover:text-ink";

const navLinkActiveClass = "bg-white/30 text-ink";

const contactNavClass =
  "navbar-contact-btn inline-flex h-9 items-center rounded-md px-3 text-sm font-medium shadow-none transition-colors";

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

function NavMenuDropdowns({ pathname }: { pathname: string }) {
  const { t } = useLanguage();

  return (
    <NavigationMenu className="relative z-10 hidden max-w-max lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            href={homeNavHref}
            className={cn(
              navLinkClass,
              isNavItemActive(pathname, homeNavHref) && navLinkActiveClass,
            )}
          >
            {t.nav.home}
          </Link>
        </NavigationMenuItem>
        {mainNavItems.map((item) => {
          const isActive = isNavItemActive(pathname, item.href);

          return (
          <NavigationMenuItem key={item.key} className="relative">
            <NavigationMenuTrigger asChild>
              <Link
                href={item.href}
                className={cn(
                  navLinkClass,
                  "group data-[state=open]:bg-white/30 data-[state=open]:text-ink",
                  isActive && navLinkActiveClass,
                )}
              >
                {t.nav[item.key]}
                <ChevronDown
                  className="relative top-px h-3 w-3 opacity-60 transition duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-0.5 p-2">
                {item.submenu.map((sub) => (
                  <li key={`${item.key}-${sub.labelKey}`}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={sub.href}
                        className="block select-none rounded-md px-3 py-2 text-sm leading-none text-ink/75 no-underline outline-none transition-colors hover:bg-primary/5 hover:text-primary focus:bg-primary/5 focus:text-primary"
                      >
                        {t.nav.submenu[sub.labelKey]}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
                <li className="mt-0.5 pt-0.5">
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="block select-none rounded-md px-3 py-2 text-sm font-medium leading-none text-primary no-underline outline-none transition-colors hover:bg-primary/5"
                    >
                      {t.nav[item.key]} →
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
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
          <nav className="space-y-6">
            <div>
              <Link
                href={homeNavHref}
                onClick={() => onOpenChange(false)}
                className="text-base font-semibold text-ink transition-colors hover:text-primary"
              >
                {t.nav.home}
              </Link>
            </div>
          {mainNavItems.map((item) => (
            <div key={item.key}>
              <Link
                href={`${item.href}#overview`}
                onClick={() => onOpenChange(false)}
                className={cn(
                  "text-base font-semibold text-ink transition-colors hover:text-primary",
                )}
              >
                {t.nav[item.key]}
              </Link>
              <ul className="mt-2 space-y-1 pl-1">
                {item.submenu.map((sub) => (
                  <li key={`${item.key}-${sub.labelKey}`}>
                    <Link
                      href={sub.href}
                      onClick={() => onOpenChange(false)}
                      className="block rounded-md px-2 py-2 text-sm text-ink/65 transition-colors hover:bg-ink/5 hover:text-primary"
                    >
                      {t.nav.submenu[sub.labelKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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
                  onClick={() => onOpenChange(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-ink/65 transition-colors hover:bg-ink/5 hover:text-primary"
                >
                  {t.nav.extended[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

          <Button className="mt-8 w-full" asChild>
            <Link href="/contact" onClick={() => onOpenChange(false)}>
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

  const isHome = pathname === "/";
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
            href="/"
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
