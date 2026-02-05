import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  { title: "Save time & cost", desc: "Ship faster with pragmatic scope, sharp execution, and clean handoffs." },
  { title: "No vendor lock-in", desc: "We build on your stack with clear ownership and maintainability." },
  { title: "Security-first delivery", desc: "Policies, reviews, and production checks that reduce risk." },
  { title: "Observability & ops", desc: "Logging, metrics, and monitoring patterns for real-world operations." },
  { title: "Performance-minded", desc: "Latency and scalability considerations from day one." },
  { title: "Extendable architecture", desc: "Modular designs that let your product evolve without rewrites." },
];

export default function BentoGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border bg-foreground text-background p-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Built for high-traffic and complex scenarios
          </h2>
          <p className="mt-3 text-background/70 max-w-2xl">
            Delivery practices and engineering choices that work under pressure: reliability, security,
            and predictable performance.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((x) => (
              <Card key={x.title} className="bg-background/5 border-background/15 text-background rounded-xl">
                <CardHeader>
                  <CardTitle className="text-base">{x.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-background/70">{x.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
