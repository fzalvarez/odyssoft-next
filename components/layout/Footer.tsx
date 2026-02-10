import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t bg-[rgb(var(--muted))]/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="full" className="h-6 mb-4" />
            <p className="text-sm text-muted-foreground">
              Delivery-focused engineering for teams that ship.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/services"
                  className="hover:text-[rgb(var(--foreground))] transition-colors"
                >
                  Custom Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[rgb(var(--foreground))] transition-colors"
                >
                  QA & Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[rgb(var(--foreground))] transition-colors"
                >
                  AI & Data
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[rgb(var(--foreground))] transition-colors"
                >
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[rgb(var(--foreground))] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[rgb(var(--foreground))] transition-colors"
                >
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/blog"
                  className="hover:text-[rgb(var(--foreground))] transition-colors"
                >
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[rgb(var(--foreground))] transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[rgb(var(--foreground))] transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Odyssoft. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
