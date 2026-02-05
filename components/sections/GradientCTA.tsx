import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GradientCTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border overflow-hidden">
          <div className="p-10 text-center bg-gradient-to-b from-muted/40 to-background">
            <h2 className="text-2xl font-semibold tracking-tight">
              Senior engineers on your side
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Get direct help: architecture reviews, QA strategy, delivery processes, and hands-on onboarding.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild>
                <Link href="/contact">Book a call</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/services">See services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
