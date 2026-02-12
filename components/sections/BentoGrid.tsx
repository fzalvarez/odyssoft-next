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
    <section className="py-16 bg-[radial-gradient(600px_300px_at_20%_0%,hsl(235_85%_60%/.18),transparent_60%),radial-gradient(500px_280px_at_80%_10%,hsl(190_95%_55%/.14),transparent_60%),radial-gradient(720px_340px_at_50%_90%,hsl(265_90%_60%/.14),transparent_60%)]">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6">
        <div className="relative overflow-hidden bg-card/40 backdrop-blur">
          <div className="pointer-events-none absolute inset-0 opacity-70" />

          <div className="relative">
            <h2 className="text-3xl xl:text-4xl font-bold tracking-tight text-center">
              Built for high-traffic and complex scenarios
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl text-center">
              Delivery practices and engineering choices that work under
              pressure: reliability, security, and predictable performance.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((x) => (
                <Card
                  key={x.title}
                  className="bg-[rgb(var(--card))]/60 backdrop-blur border-[rgb(var(--border))]/70 shadow-sm rounded-xl hover:bg-card/75 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{x.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-[rgb(var(--muted-foreground))]">
                      {x.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
