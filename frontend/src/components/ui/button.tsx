import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-[13.5px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6]/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-colors",
  {
    variants: {
      variant: {
        default: "btn-ink",
        destructive: "border border-[#ffb3ba] bg-white text-[#d6333f] hover:bg-[#fff1f2]",
        outline: "btn-outline-line",
        secondary: "btn-ink-solid",
        ghost: "bg-transparent text-[#545b6c] hover:bg-[#f1f3f9] hover:text-[#272a3b]",
        link: "link text-foreground underline-offset-4",
        white: "btn-primary-blue",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3.5 text-[12.5px]",
        lg: "h-12 px-7",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };