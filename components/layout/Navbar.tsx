import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors">
          <Logo variant="full" className="h-6" />
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/services" className="hover:text-foreground/80 transition-colors">Services</Link>
          <Link href="/enterprise" className="hover:text-foreground/80 transition-colors">Enterprise</Link>
          <Link href="/blog" className="hover:text-foreground/80 transition-colors">Blog</Link>
          <Link href="/contact" className="font-medium hover:text-foreground/80 transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
