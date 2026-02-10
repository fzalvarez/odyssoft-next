import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Braces,
	CheckCheck,
	BrainCircuit,
	Smartphone,
	LayoutDashboard,
	CloudUpload,
	MessageSquareCode,
	FileCodeCorner,
} from "lucide-react";

const services = [
	{
		title: "Custom Software Development",
		desc: "Frontend + backend delivery with pragmatic architecture.",
		icon: <Braces className="h-7 w-7 text-[rgb(var(--primary))]/80" />,
	},
	{
		title: "QA & Testing",
		desc: "Manual + automated testing to keep releases predictable.",
		icon: <CheckCheck className="h-7 w-7 text-[rgb(var(--primary))]/80" />,
	},
	{
		title: "AI & Data",
		desc: "Data engineering and applied AI focused on business value.",
		icon: <BrainCircuit className="h-7 w-7 text-[rgb(var(--primary))]/80" />,
	},
	{
		title: "Mobile App Development",
		desc: "iOS/Android builds with performance and security in mind.",
		icon: <Smartphone className="h-7 w-7 text-[rgb(var(--primary))]/80" />,
	},
	{
		title: "UX/UI Design",
		desc: "Pixel-perfect UI with usability and clarity.",
		icon: <LayoutDashboard className="h-7 w-7 text-[rgb(var(--primary))]/80" />,
	},
	{
		title: "Cloud & DevOps",
		desc: "Deployments, observability, and scaling patterns.",
		icon: <CloudUpload className="h-7 w-7 text-[rgb(var(--primary))]/80" />,
	},
	{
		title: "Architecture Review",
		desc: "Decisions that reduce complexity and future costs.",
		icon: <MessageSquareCode className="h-7 w-7 text-[rgb(var(--primary))]/80" />,
	},
	{
		title: "Onboarding & Documentation",
		desc: "We leave your team with clarity, not dependency.",
		icon: <FileCodeCorner className="h-7 w-7 text-[rgb(var(--primary))]/80" />,
	},
];

export default function ServicesGrid() {
	return (
		<section className="py-16">
			<div className="mx-auto max-w-6xl px-6">
				<div className="text-center">
					<h2 className="odys-title">
						Plus, access to all our engineering services
					</h2>
					<p className="mt-3 text-muted-foreground">
						Services driven by engineers used to high-traffic and complex scenarios.
					</p>
				</div>

				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
					{services.map((s) => (
						<Card
							key={s.title}
							className="rounded-xl bg-card/60 backdrop-blur border-border/70 shadow-sm hover:bg-card/75 transition-colors"
						>
							<CardHeader className="px-3">
								<div className="flex flex-col">
									<div className="flex justify-end">
										<div className="grid h-9 w-9 place-items-center rounded-lg bg-[rgb(var(--muted))]/40">
											{s.icon}
										</div>
									</div>
									<CardTitle className="text-lg text-left">{s.title}</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="px-3">
								<p className="text-sm text-muted-foreground">{s.desc}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
