export type NavItemKey =
  | "services"
  | "howItWorks"
  | "whyUs"
  | "faq"
  | "contact";

export type SubmenuLabelKey = "overview" | "getStarted" | "learnMore";

export type ExtendedLinkKey =
  | "about"
  | "careers"
  | "partners"
  | "resources"
  | "blog"
  | "press";

export const homeNavHref = "/";

export const mainNavItems: {
  key: NavItemKey;
  href: string;
  submenu: { labelKey: SubmenuLabelKey; href: string }[];
}[] = [
  {
    key: "services",
    href: "/services",
    submenu: [
      { labelKey: "overview", href: "/services#overview" },
      { labelKey: "getStarted", href: "/services#packages" },
      { labelKey: "learnMore", href: "/services#housing" },
    ],
  },
  {
    key: "howItWorks",
    href: "/how-it-works",
    submenu: [
      { labelKey: "overview", href: "/how-it-works#overview" },
      { labelKey: "getStarted", href: "/how-it-works#how-it-works" },
      { labelKey: "learnMore", href: "/how-it-works#detailed-process" },
    ],
  },
  {
    key: "whyUs",
    href: "/why-us",
    submenu: [
      { labelKey: "overview", href: "/why-us#overview" },
      { labelKey: "getStarted", href: "/why-us#why-us" },
      { labelKey: "learnMore", href: "/why-us#who-we-serve" },
    ],
  },
  {
    key: "faq",
    href: "/faq",
    submenu: [
      { labelKey: "overview", href: "/faq#overview" },
      { labelKey: "getStarted", href: "/faq#faq" },
      { labelKey: "learnMore", href: "/faq#more-questions" },
    ],
  },
  {
    key: "contact",
    href: "/contact",
    submenu: [
      { labelKey: "overview", href: "/contact#overview" },
      { labelKey: "getStarted", href: "/contact#contact" },
      { labelKey: "learnMore", href: "/contact#after-contact" },
    ],
  },
];

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
