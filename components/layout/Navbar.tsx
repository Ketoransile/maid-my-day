"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gem, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNavbarScroll } from "@/hooks/use-navbar-scroll";
import { SiteContainer } from "@/components/layout/site-container";
import { getLenis } from "@/lib/lenis-instance";
import { scrollToSection } from "@/lib/smooth-scroll";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", id: "services" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Why Us", id: "why-us" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

function scrollToTop() {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.15 });
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Navbar() {
  const scrolled = useNavbarScroll(60);
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      className={cn(
        "navbar-glass fixed inset-x-0 top-0 z-[100] w-full",
        scrolled && "navbar-glass-scrolled",
      )}
    >
      <SiteContainer className="flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2"
        >
          <Gem size={18} className="text-primary" strokeWidth={1.5} />
          <span className="text-[17px] font-semibold text-ink">Maid My Day</span>
        </button>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.id}>
                <NavigationMenuLink asChild>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="cursor-pointer rounded-md bg-transparent px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
                  >
                    {link.label}
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => scrollToSection("contact")}>
            Contact Us
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-ink hover:bg-ink/5">
              <Menu size={20} strokeWidth={1.5} />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px]">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Gem size={18} className="text-primary" strokeWidth={1.5} />
                Maid My Day
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => {
                    scrollToSection(link.id);
                    setOpen(false);
                  }}
                  className="rounded-lg px-3 py-3 text-left text-sm font-medium text-ink transition-colors hover:bg-ink/5"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="mt-4 w-full"
                onClick={() => {
                  scrollToSection("contact");
                  setOpen(false);
                }}
              >
                Contact Us
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </SiteContainer>
    </motion.nav>
  );
}
