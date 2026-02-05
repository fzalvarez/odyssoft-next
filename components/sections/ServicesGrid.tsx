import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { title: "Custom Software Development", desc: "Frontend + backend delivery with pragmatic architecture." },
  { title: "QA & Testing", desc: "Manual + automated testing to keep releases predictable." },
  { title: "AI & Data", desc: "Data engineering and applied AI focused on business value." },
  { title: "Mobile App Development", desc: "iOS/Android builds with performance and security in mind." },
  { title: "UX/UI Design", desc: "Pixel-perfect UI with usability and clarity." },
  { title: "Cloud & DevOps", desc: "Deployments, observability, and scaling patterns." },
  { title: "Architecture Review", desc: "Decisions that reduce complexity and future costs." },
  { title: "Onboarding & Documentation", desc: "We leave your team with clarity, not dependency." },
];

export default function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Plus, access to all our engineering services
          </h2>
          <p className="mt-3 text-muted-foreground">
            Services driven by engineers used to high-traffic and complex scenarios.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.title} className="rounded-xl">
              <CardHeader>
                <CardTitle className="text-base">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
