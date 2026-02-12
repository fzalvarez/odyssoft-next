import Link from "next/link";
import { ThemedButton } from "@/components/ui/themed-button";

export default function ComparisonCTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6">
        <div className="rounded-2xl border p-10 text-center bg-card/60 backdrop-blur shadow-sm relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(700px_320px_at_50%_0%,hsl(235_85%_60%/.12),transparent_65%),radial-gradient(700px_340px_at_20%_90%,hsl(190_95%_55%/.10),transparent_65%)]" />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight">
              Need a clear plan before building?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              We can provide a lightweight discovery: scope, architecture outline,
              delivery plan, and risks.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <ThemedButton asChild>
                <Link href="/contact">Request a discovery call</Link>
              </ThemedButton>
              <ThemedButton tone="outline" asChild>
                <Link href="/about">How we work</Link>
              </ThemedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
