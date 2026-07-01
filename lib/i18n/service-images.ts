import type { ServiceIconKey } from "./service-icons";
import {
  getServiceCardImage,
  getServiceDetailImage,
  getServiceGallery,
  getServiceImageFallback,
} from "@/lib/service-media";

/** Card thumbnails — home services grid */
export const serviceImageMap: Record<ServiceIconKey, string> = {
  housing: getServiceCardImage("housing"),
  housemaids: getServiceCardImage("housemaids"),
  drivers: getServiceCardImage("drivers"),
  petCare: getServiceCardImage("petCare"),
  homeManagement: getServiceCardImage("homeManagement"),
};

/** Detail page hero image per service id */
export const serviceDetailImageMap: Record<string, string> = {
  housing: getServiceDetailImage("housing"),
  housemaids: getServiceDetailImage("housemaids"),
  drivers: getServiceDetailImage("drivers"),
  "pet-care": getServiceDetailImage("pet-care"),
  "home-management": getServiceDetailImage("home-management"),
};

export { getServiceGallery, getServiceImageFallback };
