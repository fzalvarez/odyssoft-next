import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EnterpriseHero() {
  return (
    <section className="odys-hero py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Odyssoft - Delivery-focused engineering
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Engineered for reliability,
            <span className="block text-muted-foreground">built for growth.</span>
          </h1>

          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            We help teams ship custom software with strong QA, pragmatic architecture,
            and scalable delivery. Clear ownership, predictable iterations, and production-ready output.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="shadow-sm">
              <Link href="/contact">Schedule a call</Link>
            </Button>
            <Button variant="outline" asChild className="bg-background/40 backdrop-blur">
              <Link href="/services">Everything we do</Link>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border bg-card/60 backdrop-blur p-3 shadow-sm">
              <p className="font-medium">Nearshore</p>
              <p className="text-muted-foreground">Timezone-aligned</p>
            </div>
            <div className="rounded-xl border bg-card/60 backdrop-blur p-3 shadow-sm">
              <p className="font-medium">Quality</p>
              <p className="text-muted-foreground">Testing-first</p>
            </div>
            <div className="rounded-xl border bg-card/60 backdrop-blur p-3 shadow-sm">
              <p className="font-medium">Delivery</p>
              <p className="text-muted-foreground">Release-ready</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-card/60 backdrop-blur p-6 shadow-sm">
          <div className="aspect-[16/9] rounded-xl bg-muted/30 border border-border/60 flex items-center justify-center text-xs text-muted-foreground">
            Hero illustration / product image (placeholder)
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Tip: luego aquí pones un gráfico de arquitectura, dashboards, o UI real.
          </p>
        </div>
      </div>
    </section>
  );
}
