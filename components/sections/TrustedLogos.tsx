export default function TrustedLogos() {
  const logos = ["Oracle", "HP", "Universal", "AMC Networks", "Privalia", "Navy"];

  return (
    <section className="py-14 border-y bg-muted/10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium text-muted-foreground">
          Trusted by teams shipping critical software
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((name) => (
            <div
              key={name}
              className="h-10 rounded-md border bg-background flex items-center justify-center text-xs font-medium text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
