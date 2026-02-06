type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageSide?: "left" | "right";
};

export default function FeatureTwoCol({
  eyebrow,
  title,
  subtitle,
  imageSide = "right",
}: Props) {
  const content = (
    <div>
      <div className="flex items-center gap-3">
        <div className="h-1 w-10 rounded bg-primary/60" />
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>
    </div>
  );

  const image = (
    <div className="rounded-2xl border bg-card/60 backdrop-blur p-6 shadow-sm">
      <div className="aspect-[4/3] rounded-xl bg-muted/30 border border-border/60 flex items-center justify-center text-xs text-muted-foreground">
        Image placeholder
      </div>
    </div>
  );

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 md:items-center">
        {imageSide === "left" ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </section>
  );
}
