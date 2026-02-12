import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
	{
		title: "Custom Software Development",
		desc: "Build tailored products across frontend and backend with pragmatic architecture.",
	},
	{
		title: "QA & Testing",
		desc: "Manual + automated testing to make releases reliable and predictable.",
	},
	{
		title: "AI & Data",
		desc: "Data engineering, ML, and applied AI to unlock measurable business value.",
	},
	{
		title: "Mobile Apps",
		desc: "Performant iOS/Android builds with clean delivery pipelines.",
	},
	{
		title: "UX/UI Design",
		desc: "Interfaces that look sharp, feel fast, and convert users into customers.",
	},
	{
		title: "Cloud & DevOps",
		desc: "Deployment, observability, and scaling for real production workloads.",
	},
];

export default function Bento() {
	return (
		<section className="py-20">
			<div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6">
				<div className="flex items-end justify-between gap-6">
					<div>
						<h2 className="text-3xl font-semibold tracking-tight">
							From concept to completion
						</h2>
						<p className="mt-3 text-muted-foreground">
							Full-stack capabilities to ship, harden, and scale.
						</p>
					</div>
				</div>

				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((x) => (
						<Card key={x.title} className="rounded-xl">
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
		</section>
	);
}
