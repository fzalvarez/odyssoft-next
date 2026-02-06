export default function TrustedLogos() {
  const logos = ["Oracle", "HP", "Universal", "AMC Networks", "Privalia", "Navy"];

  return (
    <section className="py-14 border-y bg-muted/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm font-medium text-muted-foreground">
            Trusted by teams shipping critical software
          </p>
          <p className="text-xs text-muted-foreground">
            Enterprise-grade delivery practices, proven across industries
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((name) => (
            <div
              key={name}
              className="h-10 rounded-lg border bg-card/60 backdrop-blur flex items-center justify-center text-xs font-medium text-muted-foreground shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
