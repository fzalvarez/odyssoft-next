import { ClientLogo } from "@/components/ui/ClientLogo";
import { clients } from "@/lib/clients";

export default function TrustedLogos() {
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

        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.slug}
              className="rounded-lg border bg-card/60 backdrop-blur p-6 flex items-center justify-center shadow-sm hover:bg-card/80 transition-colors h-24"
            >
              <ClientLogo
                client={client.slug}
                name={client.name}
                hasThemeVariants={client.hasThemeVariants}
              />
            </div>
          ))}

          {/* Placeholders para futuros clientes */}
          {Array.from({ length: Math.max(0, 6 - clients.length) }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="rounded-lg border bg-card/60 backdrop-blur p-6 flex items-center justify-center shadow-sm h-24"
            >
              <span className="text-xs text-muted-foreground">Client Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
