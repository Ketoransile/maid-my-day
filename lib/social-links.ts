export type SocialLink = {
  id: "facebook" | "instagram" | "linkedin";
  label: string;
  href: string;
};

/** Social URLs from env — falls back to # placeholders like the footer */
export function getSocialLinks(): SocialLink[] {
  const facebook =
    process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim() || "#";
  const instagram =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() || "#";
  const linkedin =
    process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "#";

  return [
    { id: "facebook", label: "Facebook", href: facebook },
    { id: "instagram", label: "Instagram", href: instagram },
    { id: "linkedin", label: "LinkedIn", href: linkedin },
  ];
}
