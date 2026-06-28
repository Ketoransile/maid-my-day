"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { toast } from "sonner";

import { SectionHeader } from "@/components/section-header";
import { SiteContainer } from "@/components/layout/site-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { value: "relocation", label: "Housing & Relocation Support" },
  { value: "housemaid", label: "Trained Housemaids" },
  { value: "driver", label: "Professional Drivers" },
  { value: "pet-care", label: "Pet Care Services" },
  { value: "management", label: "Home Management" },
  { value: "other", label: "Something else" },
] as const;

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-[13px] font-medium text-ink/75"
    >
      {children}
    </label>
  );
}

function ServiceMultiSelect({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (services: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const available = serviceOptions.filter((o) => !selected.includes(o.value));

  const addService = (value: string) => {
    if (!selected.includes(value)) {
      onChange([...selected, value]);
    }
    setOpen(false);
  };

  const removeService = (value: string) => {
    onChange(selected.filter((s) => s !== value));
  };

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative space-y-2">
      <button
        id="service"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "flex h-11 w-full items-center justify-between rounded-xl border-0 bg-white px-4 py-2 text-sm text-ink shadow-[0_1px_2px_rgba(28,28,28,0.04),inset_0_0_0_1px_rgba(28,28,28,0.07)] transition-shadow focus:outline-none focus:shadow-[0_1px_2px_rgba(28,28,28,0.04),inset_0_0_0_1px_rgba(43,95,75,0.45),0_0_0_3px_rgba(43,95,75,0.1)]",
          open && "shadow-[0_1px_2px_rgba(28,28,28,0.04),inset_0_0_0_1px_rgba(43,95,75,0.45),0_0_0_3px_rgba(43,95,75,0.1)]",
        )}
      >
        <span className="text-ink/40">Pick a service</span>
        <ChevronDown
          className={cn("h-4 w-4 opacity-50 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Available services"
          data-lenis-prevent
          className="absolute z-40 mt-1.5 max-h-60 w-full overflow-auto rounded-xl border border-ink/[0.08] bg-white p-1 shadow-[0_8px_24px_rgba(28,28,28,0.08)]"
        >
          {available.length > 0 ? (
            available.map((option) => (
              <li key={option.value} role="option">
                <button
                  type="button"
                  onClick={() => addService(option.value)}
                  className="flex w-full cursor-pointer rounded-sm px-2 py-2 text-left text-sm text-ink outline-none hover:bg-primary/10 focus:bg-primary/10"
                >
                  {option.label}
                </button>
              </li>
            ))
          ) : (
            <li className="px-2 py-2 text-sm text-ink/50">All services selected</li>
          )}
        </ul>
      )}

      {selected.length > 0 && (
        <ul className="flex flex-wrap gap-2 pt-1" aria-label="Selected services">
          {selected.map((value) => {
            const label =
              serviceOptions.find((o) => o.value === value)?.label ?? value;
            return (
              <li key={value}>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 py-1 pl-3 pr-1.5 text-[13px] font-medium text-ink">
                  {label}
                  <button
                    type="button"
                    onClick={() => removeService(value)}
                    className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-ink/50 transition-colors hover:bg-ink/10 hover:text-ink"
                    aria-label={`Remove ${label}`}
                  >
                    <X size={12} strokeWidth={2} />
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      )}

      {selected.map((value) => (
        <input key={value} type="hidden" name="services" value={value} />
      ))}
    </div>
  );
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceError, setServiceError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      setServiceError(true);
      toast.error("Please select at least one service", {
        description: "Pick the services you need before sending your message.",
      });
      return;
    }

    setServiceError(false);
    setIsSubmitting(true);

    try {
      // Replace with your API route when backend is ready.
      await new Promise((resolve) => setTimeout(resolve, 800));

      toast.success("Message sent successfully", {
        description: "We received your request and will reply within 24 hours.",
      });

      formRef.current?.reset();
      setSelectedServices([]);
    } catch {
      toast.error("Message could not be sent", {
        description: "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-28">
      <SiteContainer>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-14">
          <motion.div
            className="lg:pt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <SectionHeader
                eyebrow="Contact Us"
                title="Maid My Day Home & Relocation"
                description="Tell us what you need and we will get back to you within 24 hours. No pressure, no commitment."
                align="left"
              />
            </motion.div>

            <motion.div className="mt-10 space-y-5" variants={staggerContainer}>
              {[
                { icon: Phone, label: "Phone", value: "+251 911 000 000" },
                { icon: Mail, label: "Email", value: "hello@maidmyday.com" },
                { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={staggerItem}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="flex items-start gap-3.5 rounded-2xl bg-ink/[0.02] p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon size={15} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{item.label}</p>
                    <p className="mt-0.5 text-sm text-ink/60">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="mt-8 text-[13px] text-ink/50"
            >
              Mon to Sat. Most replies land within 24 hours.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-ink/[0.02] p-6 sm:p-8 lg:p-9"
          >
            <motion.form
              ref={formRef}
              initial={{ opacity: 1 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <p className="text-[15px] font-medium text-ink">Send a message</p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+251 ..."
                />
              </div>

              <div>
                <FieldLabel htmlFor="service">What do you need?</FieldLabel>
                <ServiceMultiSelect
                  selected={selectedServices}
                  onChange={(services) => {
                    setSelectedServices(services);
                    if (services.length > 0) setServiceError(false);
                  }}
                />
                {serviceError && (
                  <p className="mt-1.5 text-[13px] text-red-600">
                    Please select at least one service.
                  </p>
                )}
              </div>

              <div>
                <FieldLabel htmlFor="message">Your message</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="A few lines about your home, timing, and what would help."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="mt-1 w-full rounded-xl"
              >
                <Send size={16} strokeWidth={1.5} />
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </SiteContainer>
    </section>
  );
}
