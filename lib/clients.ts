/**
 * Lista de clientes con sus logos.
 * 
 * Cada cliente debe tener:
 * - slug: nombre del archivo SVG (sin extensión) en /public/logos/clients/
 * - name: nombre completo para mostrar
 * - hasThemeVariants: si tiene versiones separadas para dark/light mode
 * - industry: industria (opcional, para filtrado futuro)
 */

export type Client = {
  slug: string;
  name: string;
  hasThemeVariants?: boolean;
  industry?: string;
};

export const clients: Client[] = [
  {
    slug: "ntt-data",
    name: "NTT Data",
    industry: "Technology",
  },
  {
    slug: "pucp",
    name: "PUCP",
    hasThemeVariants: true,
    industry: "Education",
  },
  // Añade más clientes aquí cuando tengas sus logos:
  // {
  //   slug: "oracle",
  //   name: "Oracle",
  //   industry: "Technology",
  // },
  // {
  //   slug: "hp",
  //   name: "HP",
  //   industry: "Technology",
  // },
  // {
  //   slug: "universal",
  //   name: "Universal",
  //   industry: "Entertainment",
  // },
  // {
  //   slug: "amc-networks",
  //   name: "AMC Networks",
  //   industry: "Media",
  // },
  // {
  //   slug: "privalia",
  //   name: "Privalia",
  //   industry: "E-commerce",
  // },
];
