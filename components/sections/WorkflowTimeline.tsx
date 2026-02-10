import {
  TextSearch,
  Code,
  ClipboardCheck,
  Rocket,
  CalendarCog,
} from "lucide-react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineHeader,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline";

type Step = {
  index: string;
  kicker: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: "blue" | "purple" | "indigo" | "pink" | "emerald";
};

const STEPS: Step[] = [
  {
    index: "01",
    kicker: "Discovery",
    title: "Scope",
    description:
      "Aterrizamos objetivos, restricciones y alcance. Definimos un roadmap claro y un plan técnico realista.",
    icon: <TextSearch className="h-6 w-6 md:h-7 md:w-7" />,
    accent: "blue",
  },
  {
    index: "02",
    kicker: "Engineering",
    title: "Development",
    description:
      "Construcción con prácticas modernas: PRs pequeñas, estándares, pruebas y entregas continuas.",
    icon: <Code className="h-6 w-6 md:h-7 md:w-7" />,
    accent: "purple",
  },
  {
    index: "03",
    kicker: "Assurance",
    title: "Stabilization",
    description:
      "QA, hardening y performance. Cerramos brechas antes de producción para evitar sorpresas.",
    icon: <ClipboardCheck className="h-6 w-6 md:h-7 md:w-7" />,
    accent: "indigo",
  },
  {
    index: "04",
    kicker: "Launch",
    title: "Delivery",
    description:
      "Release limpio y medible. Acompañamos el despliegue y dejamos handover ordenado.",
    icon: <Rocket className="h-6 w-6 md:h-7 md:w-7" />,
    accent: "pink",
  },
  {
    index: "05",
    kicker: "Growth",
    title: "Support",
    description:
      "Monitoreo, mejoras iterativas y mantenimiento. Evolución sostenible con foco en valor.",
    icon: <CalendarCog className="h-6 w-6 md:h-7 md:w-7" />,
    accent: "emerald",
  },
];
const accentIconClass: Record<Step["accent"], string> = {
  blue: "text-blue-400",
  purple: "text-purple-400",
  indigo: "text-indigo-400",
  pink: "text-pink-400",
  emerald: "text-emerald-400",
};

export default function WorkflowTimeline() {
  return (
    <section className="relative py-20">
      {/* Decoración (si la quieres) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        {/* aquí tus decoraciones */}
      </div>

      {/* CONTENIDO REAL */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <p className="inline-flex rounded-full border px-3 py-1 text-xs tracking-wide">
            OUR WORKFLOW
          </p>
          <h2 className="mt-5 text-4xl font-semibold">Engineered for Excellence</h2>
          <p className="mt-3 text-muted-foreground">
            Un flujo conectado y medible: visión estratégica + ejecución técnica.
          </p>
        </div>

        <div className="mt-12">
          <Timeline
            orientation="horizontal"
            activeIndex={2}
            className="hidden md:flex [--timeline-dot-size:2.4rem] [--timeline-connector-thickness:0.18rem]"
          >
            {STEPS.map((step) => (
              <TimelineItem key={step.index}>
                <TimelineDot
                  className={
                    "bg-[rgb(var(--background))] border-border " +
                    accentIconClass[step.accent]
                  }
                >
                  {step.icon}
                </TimelineDot>
                <TimelineConnector className="bg-neutral-100 data-[completed]:bg-neutral-300" />
                <TimelineContent>
                  <TimelineHeader>
                    <TimelineTime dateTime={`step-${step.index}`}>
                      {step.index}. {step.kicker.toUpperCase()}
                    </TimelineTime>
                    <TimelineTitle>{step.title}</TimelineTitle>
                  </TimelineHeader>
                  <TimelineDescription>{step.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>

          <Timeline
            orientation="vertical"
            activeIndex={2}
            className="md:hidden [--timeline-dot-size:2.1rem] [--timeline-connector-thickness:0.18rem]"
          >
            {STEPS.map((step) => (
              <TimelineItem key={step.index}>
                <TimelineDot
                  className={
                    "bg-[rgb(var(--background))] border-border " +
                    accentIconClass[step.accent]
                  }
                >
                  {step.icon}
                </TimelineDot>
                <TimelineConnector className="bg-amber-300 data-[completed]:bg-amber-300" />
                <TimelineContent>
                  <TimelineHeader>
                    <TimelineTime dateTime={`step-${step.index}`}>
                      {step.index}. {step.kicker.toUpperCase()}
                    </TimelineTime>
                    <TimelineTitle>{step.title}</TimelineTitle>
                  </TimelineHeader>
                  <TimelineDescription>{step.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Pasa el mouse por cada fase para ver el detalle
        </p>
      </div>
    </section>
  );
}

