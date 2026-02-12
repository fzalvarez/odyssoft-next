export default function TrustedBy() {
  const logos = ["Oracle", "HP", "Universal", "AMC Networks", "Privalia", "Navy"];

  return (
    <section className="py-14 border-y">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6">
        <p className="text-sm font-medium text-muted-foreground">
          Trusted by teams shipping critical software
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((name) => (
            <div
              key={name}
              className="h-10 rounded-md bg-[rgb(var(--muted))]/40 flex items-center justify-center text-xs font-medium text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
