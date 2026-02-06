import {
  Compass,
  Code2,
  BadgeCheck,
  Rocket,
  ShieldCheck,
  Mouse,
} from "lucide-react";

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
    icon: <Compass className="h-7 w-7 md:h-8 md:w-8" />,
    accent: "blue",
  },
  {
    index: "02",
    kicker: "Engineering",
    title: "Development",
    description:
      "Construcción con prácticas modernas: PRs pequeñas, estándares, pruebas y entregas continuas.",
    icon: <Code2 className="h-7 w-7 md:h-8 md:w-8" />,
    accent: "purple",
  },
  {
    index: "03",
    kicker: "Assurance",
    title: "Stabilization",
    description:
      "QA, hardening y performance. Cerramos brechas antes de producción para evitar sorpresas.",
    icon: <BadgeCheck className="h-7 w-7 md:h-8 md:w-8" />,
    accent: "indigo",
  },
  {
    index: "04",
    kicker: "Launch",
    title: "Delivery",
    description:
      "Release limpio y medible. Acompañamos el despliegue y dejamos handover ordenado.",
    icon: <Rocket className="h-7 w-7 md:h-8 md:w-8" />,
    accent: "pink",
  },
  {
    index: "05",
    kicker: "Growth",
    title: "Support",
    description:
      "Monitoreo, mejoras iterativas y mantenimiento. Evolución sostenible con foco en valor.",
    icon: <ShieldCheck className="h-7 w-7 md:h-8 md:w-8" />,
    accent: "emerald",
  },
];

function accentClasses(accent: Step["accent"]) {
  switch (accent) {
    case "blue":
      return {
        kicker: "text-blue-500/80",
        icon: "text-blue-500",
        border: "from-blue-500 via-blue-500 to-purple-500",
        glow: "shadow-[0_0_16px_rgba(59,130,246,0.35)]",
      };
    case "purple":
      return {
        kicker: "text-purple-500/80",
        icon: "text-purple-500",
        border: "from-purple-500 via-fuchsia-500 to-pink-500",
        glow: "shadow-[0_0_16px_rgba(168,85,247,0.32)]",
      };
    case "indigo":
      return {
        kicker: "text-indigo-500/80",
        icon: "text-indigo-500",
        border: "from-indigo-500 via-blue-500 to-cyan-500",
        glow: "shadow-[0_0_16px_rgba(99,102,241,0.30)]",
      };
    case "pink":
      return {
        kicker: "text-pink-500/80",
        icon: "text-pink-500",
        border: "from-pink-500 via-rose-500 to-orange-500",
        glow: "shadow-[0_0_16px_rgba(236,72,153,0.30)]",
      };
    case "emerald":
      return {
        kicker: "text-emerald-500/80",
        icon: "text-emerald-500",
        border: "from-emerald-500 via-teal-500 to-cyan-500",
        glow: "shadow-[0_0_16px_rgba(16,185,129,0.30)]",
      };
  }
}

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

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {[
            { n: "01", t: "DISCOVERY", s: "Scope", d: "Objetivos, restricciones y roadmap realista." },
            { n: "02", t: "ENGINEERING", s: "Development", d: "PRs pequeñas, estándares, CI, entregas." },
            { n: "03", t: "ASSURANCE", s: "Stabilization", d: "QA, hardening y performance." },
            { n: "04", t: "LAUNCH", s: "Delivery", d: "Release limpio, despliegue y handover." },
            { n: "05", t: "GROWTH", s: "Support", d: "Monitoreo, mejoras iterativas, mantenimiento." },
          ].map((x) => (
            <div key={x.n} className="rounded-2xl border bg-card/40 p-5">
              <div className="text-xs text-muted-foreground">{x.n}. {x.t}</div>
              <div className="mt-2 text-lg font-semibold">{x.s}</div>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Pasa el mouse por cada fase para ver el detalle
        </p>
      </div>
    </section>
  );
}

