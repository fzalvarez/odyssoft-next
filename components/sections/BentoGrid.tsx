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
				<div className="relative overflow-hidden rounded-2xl border bg-card/40 backdrop-blur p-8 md:p-10 shadow-sm">
					<div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(600px_300px_at_20%_0%,hsl(235_85%_60%/.18),transparent_60%),radial-gradient(500px_280px_at_80%_10%,hsl(190_95%_55%/.14),transparent_60%),radial-gradient(720px_340px_at_50%_90%,hsl(265_90%_60%/.14),transparent_60%)]" />

					<div className="relative">
						<h2 className="text-3xl font-semibold tracking-tight">
							Built for high-traffic and complex scenarios
						</h2>
						<p className="mt-3 text-muted-foreground max-w-2xl">
							Delivery practices and engineering choices that work under pressure: reliability, security,
							and predictable performance.
						</p>

						<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{items.map((x) => (
								<Card
									key={x.title}
									className="bg-card/60 backdrop-blur border-border/70 shadow-sm rounded-xl hover:bg-card/75 transition-colors"
								>
									<CardHeader>
										<CardTitle className="text-base">{x.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground">{x.desc}</p>
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
