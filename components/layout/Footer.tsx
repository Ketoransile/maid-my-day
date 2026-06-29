"use client";

import { Gem, Mail, MapPin, Phone } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SiteContainer } from "@/components/layout/site-container";
import { SocialIcon } from "@/components/social/social-icons";
import { scrollToSection } from "@/lib/smooth-scroll";
import { getSocialLinks } from "@/lib/social-links";

const quickLinks = [
  { label: "Home", id: "hero" },
  { label: "Services", id: "services" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Why Us", id: "why-us" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

const socialLinks = getSocialLinks();

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/[0.08] bg-white">
      <SiteContainer className="py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Gem size={18} className="text-primary" strokeWidth={1.5} />
              <span className="text-base font-semibold text-ink">
                Maid My Day
              </span>
            </div>
            <p className="mt-3 text-sm text-ink/60">
              Maid My Day Home & Relocation
            </p>
            <p className="mt-1 text-sm text-ink/60">
              Premium home and relocation services in Addis Ababa
            </p>
            <p className="mt-1 text-sm text-ink/60">Addis Ababa, Ethiopia</p>

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
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="cursor-pointer text-sm text-ink/65 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.1em] text-ink/45">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-ink/65">
                <Phone size={14} className="text-primary" strokeWidth={1.5} />
                +251 911 000 000
              </li>
              <li className="flex items-center gap-2 text-sm text-ink/65">
                <Mail size={14} className="text-primary" strokeWidth={1.5} />
                hello@maidmyday.com
              </li>
              <li className="flex items-center gap-2 text-sm text-ink/65">
                <MapPin size={14} className="text-primary" strokeWidth={1.5} />
                Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-ink/[0.06]" />

        <p className="text-center text-[13px] text-ink/45">
          © {year} Maid My Day Home & Relocation. All rights reserved.
        </p>
      </SiteContainer>
    </footer>
  );
}
