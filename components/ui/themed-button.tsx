import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const themedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      tone: {
        primary:
          "bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] shadow-sm hover:bg-[rgb(var(--primary))]/85",
        outline:
          "border border-border/70 bg-transparent text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))]/30",
        soft:
          "bg-[rgb(var(--muted))]/60 text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))]/80",
        ghost:
          "bg-transparent text-muted-foreground hover:text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))]/30",
      },
      size: {
        sm: "text-sm px-3 py-1.5 rounded-md",
        md: "text-base px-4 py-2 rounded-full",
        lg: "text-lg px-8 py-5 rounded-full",
      },
    },
    defaultVariants: {
      tone: "primary",
      size: "sm", // tamaño por defecto reducido para pruebas
    },
  }
);

type ThemedButtonProps = Omit<React.ComponentProps<typeof Button>, "variant"> &
  VariantProps<typeof themedButtonVariants>;

function ThemedButton({ tone, size, className, ...props }: ThemedButtonProps) {
  return (
    <Button
      variant="default"
      className={cn(themedButtonVariants({ tone, size }), className)}
      {...props}
    />
  );
}

export { ThemedButton, themedButtonVariants };
