import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">Odyssoft</Link>
        <div className="flex gap-6 text-sm">
          <Link href="/services">Services</Link>
          <Link href="/enterprise">Enterprise</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="font-medium">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
