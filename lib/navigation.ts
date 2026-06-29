import type { Translations } from "@/lib/i18n/types";

export type NavItemKey =
  | "services"
  | "howItWorks"
  | "whyUs"
  | "faq"
  | "contact";

export type HomeNavKey = "home";

export type NavMenuKey = NavItemKey | HomeNavKey;

export type ExtendedLinkKey =
  | "about"
  | "careers"
  | "partners"
  | "resources"
  | "blog"
  | "press";

export type NavSubmenuEntry = {
  labelKey: string;
  href: string;
};

export type NavMenuItem<K extends NavMenuKey = NavMenuKey> = {
  key: K;
  href: string;
  submenu: NavSubmenuEntry[];
};

export const homeNavHref = "/";

export const homeNavItem: NavMenuItem<HomeNavKey> = {
  key: "home",
  href: homeNavHref,
  submenu: [
    { labelKey: "overview", href: "/#hero" },
    { labelKey: "welcome", href: "/#home-intro" },
    { labelKey: "services", href: "/#services" },
    { labelKey: "packages", href: "/#home-packages" },
    { labelKey: "howItWorks", href: "/#how-it-works" },
    { labelKey: "whyUs", href: "/#why-us" },
    { labelKey: "contact", href: "/#contact" },
  ],
};

export const mainNavItems: NavMenuItem<NavItemKey>[] = [
  {
    key: "services",
    href: "/services",
    submenu: [
      { labelKey: "overview", href: "/services#overview" },
      { labelKey: "serviceGrid", href: "/services#services" },
      { labelKey: "housing", href: "/services#housing" },
      { labelKey: "housemaids", href: "/services#housemaids" },
      { labelKey: "drivers", href: "/services#drivers" },
      { labelKey: "areas", href: "/services#areas" },
      { labelKey: "packages", href: "/services#packages" },
    ],
  },
  {
    key: "howItWorks",
    href: "/how-it-works",
    submenu: [
      { labelKey: "overview", href: "/how-it-works#overview" },
      { labelKey: "steps", href: "/how-it-works#how-it-works" },
      { labelKey: "detailedProcess", href: "/how-it-works#detailed-process" },
      { labelKey: "first30Days", href: "/how-it-works#first-30-days" },
      { labelKey: "prepare", href: "/how-it-works#prepare" },
      { labelKey: "processFaq", href: "/how-it-works#process-faq" },
    ],
  },
  {
    key: "whyUs",
    href: "/why-us",
    submenu: [
      { labelKey: "overview", href: "/why-us#overview" },
      { labelKey: "whyUs", href: "/why-us#why-us" },
      { labelKey: "whoWeServe", href: "/why-us#who-we-serve" },
      { labelKey: "standards", href: "/why-us#standards" },
      { labelKey: "testimonials", href: "/why-us#testimonials" },
      { labelKey: "mission", href: "/why-us#mission" },
      { labelKey: "ourStory", href: "/why-us#our-story" },
    ],
  },
  {
    key: "faq",
    href: "/faq",
    submenu: [
      { labelKey: "overview", href: "/faq#overview" },
      { labelKey: "commonQuestions", href: "/faq#faq" },
      { labelKey: "moreAnswers", href: "/faq#more-questions" },
      { labelKey: "stillWondering", href: "/faq#still-wondering" },
      { labelKey: "contactSupport", href: "/contact#contact" },
    ],
  },
  {
    key: "contact",
    href: "/contact",
    submenu: [
      { labelKey: "overview", href: "/contact#overview" },
      { labelKey: "contactForm", href: "/contact#contact" },
      { labelKey: "afterContact", href: "/contact#after-contact" },
      { labelKey: "officeInfo", href: "/contact#office-info" },
      { labelKey: "prepTips", href: "/contact#prep-tips" },
      { labelKey: "callUs", href: "tel:+251911000000" },
    ],
  },
];

export const allNavMenuItems: NavMenuItem[] = [homeNavItem, ...mainNavItems];

/** Placeholder links for the full hamburger menu — replace with real routes later */
export const extendedNavLinks: { key: ExtendedLinkKey; href: string }[] = [
  { key: "about", href: "#" },
  { key: "careers", href: "#" },
  { key: "partners", href: "#" },
  { key: "resources", href: "#" },
  { key: "blog", href: "#" },
  { key: "press", href: "#" },
];

export function isNavItemActive(pathname: string, href: string) {
  const base = href.split("#")[0] || "/";
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}

export function getNavSubmenuLabel(
  submenu: Translations["nav"]["submenu"],
  itemKey: NavMenuKey,
  labelKey: string,
): string {
  const group = submenu[itemKey] as Record<string, string>;
  return group[labelKey] ?? labelKey;
}

export type NavBarLabelKey = keyof NonNullable<Translations["nav"]["compact"]>;

export function getNavBarLabel(
  nav: Translations["nav"],
  key: NavBarLabelKey,
): string {
  return nav.compact?.[key] ?? nav[key];
}

export function usesCompactNavBar(nav: Translations["nav"]) {
  return Boolean(nav.compact);
}
