import Link from "next/link";
import { ThemedButton } from "@/components/ui/themed-button";

export default function GradientCTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6">
        <div className="rounded-2xl border overflow-hidden shadow-sm bg-card/40 backdrop-blur">
          <div className="p-10 text-center relative">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,hsl(235_85%_60%/.22),transparent_60%),radial-gradient(700px_420px_at_10%_40%,hsl(190_95%_55%/.16),transparent_60%),radial-gradient(700px_420px_at_90%_50%,hsl(265_90%_60%/.16),transparent_60%)]" />
            <div className="relative">
              <h2 className="text-2xl font-semibold tracking-tight">
                Senior engineers on your side
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Get direct help: architecture reviews, QA strategy, delivery
                processes, and hands-on onboarding.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <ThemedButton asChild>
                  <Link href="/contact">Book a call</Link>
                </ThemedButton>
                <ThemedButton tone="outline" asChild>
                  <Link href="/services">See services</Link>
                </ThemedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
