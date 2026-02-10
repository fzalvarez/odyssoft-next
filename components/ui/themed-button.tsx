import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const themedButtonVariants = cva("", {
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
  },
  defaultVariants: {
    tone: "primary",
  },
});

type ThemedButtonProps = Omit<React.ComponentProps<typeof Button>, "variant"> &
  VariantProps<typeof themedButtonVariants>;

function ThemedButton({ tone, className, ...props }: ThemedButtonProps) {
  return (
    <Button
      variant="default"
      className={cn(themedButtonVariants({ tone }), className)}
      {...props}
    />
  );
}

export { ThemedButton, themedButtonVariants };
