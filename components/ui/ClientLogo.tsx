import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* eslint-disable @next/next/no-img-element */

type ClientLogoProps = {
  /**
   * Slug del cliente (nombre del archivo SVG sin extensión)
   * Ejemplo: "ntt-data", "oracle", "hp"
   */
  client: string;
  /**
   * Nombre completo para alt text y aria-label
   */
  name: string;
  /**
   * Tamaño del contenedor
   */
  className?: string;
  /**
   * Si es true, usa Next/Image (para PNG/JPG).
   * Si es false, usa <img> nativo (mejor para SVG con currentColor).
   */
  useNextImage?: boolean;
  /**
   * Si true, el logo tiene versiones específicas para dark/light mode.
   * Buscará archivos: {client}-dark.svg y {client}-light.svg
   */
  hasThemeVariants?: boolean;
};

/**
 * Componente para mostrar logos de clientes.
 * 
 * Los SVG deben estar en `/public/logos/clients/{client}.svg`
 * y usar `fill="currentColor"` para adaptarse a dark/light mode.
 * 
 * Para logos con versiones específicas dark/light, usa `hasThemeVariants={true}`
 * y proporciona archivos: {client}-dark.svg y {client}-light.svg
 * 
 * Ejemplo:
 * ```tsx
 * <ClientLogo client="ntt-data" name="NTT Data" />
 * <ClientLogo client="pucp" name="PUCP" hasThemeVariants />
 * ```
 */
export function ClientLogo({ 
  client, 
  name, 
  className,
  useNextImage = false,
  hasThemeVariants = false,
}: ClientLogoProps) {
  const logoPath = hasThemeVariants 
    ? `/logos/clients/${client}-light.svg`
    : `/logos/clients/${client}.svg`;
  
  const logoPathDark = hasThemeVariants 
    ? `/logos/clients/${client}-dark.svg`
    : logoPath;

  if (useNextImage) {
    return (
      <div className={cn("relative h-12 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all", className)}>
        <Image
          src={logoPath}
          alt={name}
          fill
          className="object-contain"
          style={{ display: 'block' }}
        />
        {hasThemeVariants && (
          <Image
            src={logoPathDark}
            alt={name}
            fill
            className="object-contain hidden dark:block"
            style={{ display: 'none' }}
          />
        )}
      </div>
    );
  }

  // Para SVG con currentColor o theme variants
  if (hasThemeVariants) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity w-full h-full relative",
          className
        )}
      >
        {/* Logo para light mode - visible por defecto, oculto en dark */}
        <img
          src={logoPath}
          alt={name}
          className="absolute inset-0 m-auto max-h-full max-w-full object-contain block dark:hidden"
          aria-label={`${name} logo`}
          loading="eager"
        />
        {/* Logo para dark mode - oculto por defecto, visible en dark */}
        <img
          src={logoPathDark}
          alt={name}
          className="absolute inset-0 m-auto max-h-full max-w-full object-contain hidden dark:block"
          aria-label={`${name} logo`}
          loading="eager"
        />
      </div>
    );
  }

  // Logo único con currentColor
  return (
    <div 
      className={cn(
        "flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity text-foreground w-full h-full",
        className
      )}
    >
      <img
        src={logoPath}
        alt={name}
        className="max-h-full max-w-full object-contain block"
        aria-label={`${name} logo`}
        loading="eager"
      />
    </div>
  );
}
