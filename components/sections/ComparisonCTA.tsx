import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ComparisonCTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border p-10 text-center bg-muted/20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Need a clear plan before building?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We can provide a lightweight discovery: scope, architecture outline, delivery plan, and risks.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild>
              <Link href="/contact">Request a discovery call</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">How we work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
