"use client";

import { useState } from "react";
import { ThemedButton } from "@/components/ui/themed-button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Por ahora no enviamos a ningún backend.
    // Solo "simula" éxito para que la UI funcione y no rompa el build.
    if (!email.trim()) return;

    setStatus("ok");
    setEmail("");

    // Si luego quieres integrar, aquí puedes llamar a /api/newsletter o similar.
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6">
        <div className="rounded-2xl border p-8 bg-card/60 backdrop-blur shadow-sm relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(700px_340px_at_20%_0%,hsl(265_90%_60%/.12),transparent_65%),radial-gradient(700px_340px_at_90%_50%,hsl(190_95%_55%/.10),transparent_65%)]" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                Newsletter
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Updates cortas sobre ingeniería, delivery y casos reales.
              </p>
            </div>

            <form onSubmit={onSubmit} className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[rgb(var(--background))]/40 backdrop-blur"
              />
              <ThemedButton type="submit">Suscribirme</ThemedButton>
            </form>
          </div>

          {status === "ok" && (
            <p className="relative mt-4 text-sm text-muted-foreground">
              Listo. Te registramos (mock). Luego conectamos el envío real.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
