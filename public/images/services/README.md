# Service images

Drop **4 images per service** in the matching folder below.  
Paths are wired in `lib/service-media.ts` — no code changes needed when you add files.

## Folder structure

```
public/images/services/
├── housing/
│   ├── card.jpg
│   ├── detail.jpg
│   ├── gallery-1.jpg
│   └── gallery-2.jpg
├── housemaids/
│   ├── card.jpg
│   ├── detail.jpg
│   ├── gallery-1.jpg
│   └── gallery-2.jpg
├── drivers/
│   └── …
├── pet-care/
│   └── …
└── home-management/
    └── …
```

## File names (required)

| File | Used for |
|------|----------|
| `card.jpg` | Home page services grid thumbnail |
| `detail.jpg` | Services page — primary image per service |
| `gallery-1.jpg` | Services page — gallery image 3 |
| `gallery-2.jpg` | Services page — gallery image 4 |

Use **exact** names (lowercase, hyphens).  
Supported formats: `.jpg`, `.jpeg`, `.webp`, `.png` — if not using `.jpg`, update the extension in `getServiceImagePath()` in `lib/service-media.ts`.

## Service folders

| Folder | Service | Page anchor |
|--------|---------|-------------|
| `housing/` | Housing & Relocation | `/services#housing` |
| `housemaids/` | Trained Housemaids | `/services#housemaids` |
| `drivers/` | Professional Drivers | `/services#drivers` |
| `pet-care/` | Pet Care | `/services#pet-care` |
| `home-management/` | Home Management | `/services#home-management` |

## Original upload names (renamed automatically)

If you paste Telegram-style exports, rename them in this order (lowest photo number first):

| Service | Files → slots |
|---------|----------------|
| `housemaids/` | photo_1 → card, photo_2 → detail, photo_3 → gallery-1, photo_4 → gallery-2 |
| `pet-care/` | photo_5–8 |
| `housing/` | photo_9–12 |
| `drivers/` | photo_13–16 |
| `home-management/` | photo_17–20 |

## Tips

- **Recommended size:** 1200×900 px (4:3) or larger; images are cropped with `object-cover`.
- **Optimize** before commit (aim for &lt; 300 KB per image when possible).
- **Do not** use Git LFS for these — store as normal Git files (like `hero_video.mp4`).
- Until local files exist, the site falls back to Unsplash placeholders via `getServiceImageFallback()`.

## Code reference

```ts
import {
  getServiceCardImage,
  getServiceDetailImage,
  getServiceGallery,
} from "@/lib/service-media";

getServiceCardImage("housing");       // → /images/services/housing/card.jpg
getServiceDetailImage("pet-care");    // → /images/services/pet-care/detail.jpg
getServiceGallery("drivers");         // → all 4 paths
```
