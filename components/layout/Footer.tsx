"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Mail, MapPin, Phone } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SiteContainer } from "@/components/layout/site-container";
import { SocialIcon } from "@/components/social/social-icons";
import { useLanguage } from "@/components/providers/language-provider";
import { homeNavHref } from "@/lib/navigation";
import { getSocialLinks } from "@/lib/social-links";

const socialLinks = getSocialLinks();

const quickLinkKeys = [
  { key: "home" as const, href: homeNavHref },
  { key: "services" as const, href: "/services" },
  { key: "howItWorks" as const, href: "/how-it-works" },
  { key: "whyUs" as const, href: "/why-us" },
  { key: "faq" as const, href: "/faq" },
  { key: "contact" as const, href: "/contact" },
];

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const copyright = t.common.copyright.replace("{year}", String(year));

  return (
    <footer className="border-t border-ink/[0.08] bg-white">
      <SiteContainer className="py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <BrandLogo size={18} />
              <span className="text-base font-semibold text-ink">
                {t.common.brandName}
              </span>
            </div>
            <p className="mt-3 text-sm text-ink/60">{t.footer.tagline}</p>
            <p className="mt-1 text-sm text-ink/60">{t.footer.subtitle}</p>
            <p className="mt-1 text-sm text-ink/60">{t.common.location}</p>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-ink/8 bg-ink/2 text-ink/55 transition-colors hover:border-primary/25 hover:bg-primary/10 hover:text-primary"
                >
                  <SocialIcon id={social.id} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-ink/45">
              {t.footer.quickLinksHeading}
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinkKeys.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-sm text-ink/65 transition-colors hover:text-primary"
                  >
                    {t.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-ink/45">
              {t.footer.contactHeading}
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-ink/65">
                <Phone size={14} className="text-primary" strokeWidth={1.5} />
                {t.common.phone}
              </li>
              <li className="flex items-center gap-2 text-sm text-ink/65">
                <Mail size={14} className="text-primary" strokeWidth={1.5} />
                {t.common.email}
              </li>
              <li className="flex items-center gap-2 text-sm text-ink/65">
                <MapPin size={14} className="text-primary" strokeWidth={1.5} />
                {t.common.location}
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-ink/[0.06]" />

        <p className="text-center text-[13px] text-ink/45">{copyright}</p>
      </SiteContainer>
    </footer>
  );
}
