import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  asChild?: boolean;
}

const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ text = "Button", className, asChild = false, children, ...props }, ref) => {
    const buttonClassName = cn(
      "group relative inline-flex min-h-12 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-destructive/70 bg-destructive/85 px-6 py-2 text-center text-sm font-semibold text-destructive-foreground transition-shadow hover:shadow-lg",
      className,
    );
    const buttonContent = (
      <>
        <span className="relative z-20 inline-block whitespace-nowrap translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <span className="absolute top-0 z-20 flex h-full w-full translate-x-12 items-center justify-center gap-2 whitespace-nowrap text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>{text}</span>
          <ArrowRight className="h-4 w-4" />
        </span>
        <span className="absolute left-4 top-1/2 z-10 h-2 w-2 -translate-y-1/2 scale-100 rounded-lg bg-primary transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:translate-y-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8]" />
      </>
    );

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement;
      return (
        <Slot ref={ref} className={buttonClassName} {...props}>
          {React.cloneElement(child, undefined, buttonContent)}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={buttonClassName}
        {...props}
      >
        {buttonContent}
      </button>
    );
  },
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
