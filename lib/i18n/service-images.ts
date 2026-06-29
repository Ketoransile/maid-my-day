import { images } from "@/lib/images";
import type { ServiceIconKey } from "./service-icons";

export const serviceImageMap: Record<ServiceIconKey, string> = {
  housing: images.services.housing,
  housemaids: images.services.housemaid,
  drivers: images.services.driver,
  petCare: images.services.petCare,
  homeManagement: images.services.homeManagement,
};

export const serviceDetailImageMap: Record<string, string> = {
  housing: images.services.housing,
  housemaids: images.services.housemaid,
  drivers: images.services.driver,
  petCare: images.services.petCare,
  homeManagement: images.services.homeManagement,
};
