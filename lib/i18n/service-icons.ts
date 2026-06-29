import { Car, ClipboardList, Home, PawPrint, Sparkles } from "lucide-react";

export const serviceIconMap = {
  housing: Home,
  housemaids: Sparkles,
  drivers: Car,
  petCare: PawPrint,
  homeManagement: ClipboardList,
} as const;

export type ServiceIconKey = keyof typeof serviceIconMap;
