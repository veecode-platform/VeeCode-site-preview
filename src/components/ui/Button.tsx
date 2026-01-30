/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[10px] text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[rgba(51,255,205,1)] text-white font-bold hover:bg-[rgba(41,230,185,1)] hover:scale-105 hover:shadow-xl",
        outline:
          "bg-white border border-[rgba(30,30,30,0.5)] text-[rgba(30,30,30,1)] font-normal hover:bg-slate-100",
        secondary:
          "border border-[rgba(51,255,205,1)] text-white font-bold hover:bg-[rgba(51,255,205,0.1)]",
      },
      size: {
        default: "px-5 py-[15px]",
        sm: "p-2.5",
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
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
