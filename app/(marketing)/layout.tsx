import { Footer } from "@/components/layout/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="overflow-x-clip">{children}</main>
      <Footer />
    </>
  );
}
