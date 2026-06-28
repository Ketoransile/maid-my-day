import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrustPoint {
  title: string;
  detail: string;
}

export interface NavLink {
  label: string;
  id: string;
}
