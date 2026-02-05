import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 border-t">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-xl border bg-muted/20 p-10 flex flex-col items-center text-center gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to accelerate your roadmap?
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Tell us what you’re building. We’ll propose a lean plan, timelines,
            and the right team composition.
          </p>
          <div className="flex gap-3">
            <Button>Schedule a call</Button>
            <Button variant="outline">See what we do</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
