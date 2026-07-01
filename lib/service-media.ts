import { images } from "@/lib/images";

/**
 * Local service images live under:
 *   public/images/services/<folder>/
 *
 * See public/images/services/README.md for the full guide.
 */

export const SERVICE_IMAGE_SLOTS = [
  "card",
  "detail",
  "gallery-1",
  "gallery-2",
] as const;

export type ServiceImageSlot = (typeof SERVICE_IMAGE_SLOTS)[number];

/** Folder names under public/images/services/ (kebab-case, match service page anchors) */
export const SERVICE_MEDIA_FOLDERS = [
  "housing",
  "housemaids",
  "drivers",
  "pet-care",
  "home-management",
] as const;

export type ServiceMediaFolder = (typeof SERVICE_MEDIA_FOLDERS)[number];

const BASE_PATH = "/images/services";

/** Maps app service ids (camelCase or kebab-case) to public folder names */
const SERVICE_ID_TO_FOLDER: Record<string, ServiceMediaFolder> = {
  housing: "housing",
  housemaids: "housemaids",
  drivers: "drivers",
  petCare: "pet-care",
  "pet-care": "pet-care",
  homeManagement: "home-management",
  "home-management": "home-management",
};

/** Unsplash placeholders until local files are added (same filenames in each folder replace these) */
const REMOTE_FALLBACK_BY_FOLDER: Record<ServiceMediaFolder, string> = {
  housing: images.services.housing,
  housemaids: images.services.housemaid,
  drivers: images.services.driver,
  "pet-care": images.services.petCare,
  "home-management": images.services.homeManagement,
};

export function resolveServiceFolder(serviceId: string): ServiceMediaFolder {
  const folder = SERVICE_ID_TO_FOLDER[serviceId];
  if (!folder) {
    throw new Error(
      `Unknown service id "${serviceId}". Expected one of: ${Object.keys(SERVICE_ID_TO_FOLDER).join(", ")}`,
    );
  }
  return folder;
}

export function getServiceImagePath(
  serviceId: string,
  slot: ServiceImageSlot,
  ext: "jpg" | "jpeg" | "webp" | "png" = "jpg",
): string {
  const folder = resolveServiceFolder(serviceId);
  return `${BASE_PATH}/${folder}/${slot}.${ext}`;
}

export function getServiceImages(serviceId: string) {
  return {
    card: getServiceImagePath(serviceId, "card"),
    detail: getServiceImagePath(serviceId, "detail"),
    gallery1: getServiceImagePath(serviceId, "gallery-1"),
    gallery2: getServiceImagePath(serviceId, "gallery-2"),
  } as const;
}

/** All four images for a service (card → detail → gallery-1 → gallery-2) */
export function getServiceGallery(serviceId: string): string[] {
  const media = getServiceImages(serviceId);
  return [media.card, media.detail, media.gallery1, media.gallery2];
}

/** Primary image for cards and listings */
export function getServiceCardImage(serviceId: string): string {
  return getServiceImagePath(serviceId, "card");
}

/** Main image on the service detail section */
export function getServiceDetailImage(serviceId: string): string {
  return getServiceImagePath(serviceId, "detail");
}

/** Remote placeholder for a service (used until local files exist) */
export function getServiceImageFallback(serviceId: string): string {
  const folder = resolveServiceFolder(serviceId);
  return REMOTE_FALLBACK_BY_FOLDER[folder];
}
