import type { ReactNode } from "react";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
