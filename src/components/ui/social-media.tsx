import * as React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface SocialItem {
  href: string;
  ariaLabel: string;
  tooltip: string;
  icon: LucideIcon;
}

export interface SocialTooltipProps
  extends React.HTMLAttributes<HTMLUListElement> {
  items: SocialItem[];
}

const SocialTooltip = React.forwardRef<HTMLUListElement, SocialTooltipProps>(
  ({ className, items, ...props }, ref) => {
    const baseIconStyles =
      "relative flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-all duration-300 ease-in-out hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50";
    const baseIconSvgStyles =
      "h-4 w-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5";
    const baseTooltipStyles =
      "absolute left-1/2 top-[-34px] -translate-x-1/2 whitespace-nowrap rounded-md border border-white/15 bg-black px-2 py-1 text-xs text-white opacity-0 invisible transition-all duration-300 ease-in-out group-hover:top-[-40px] group-hover:opacity-100 group-hover:visible";

    return (
      <ul
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        {items.map(({ icon: Icon, ...item }) => (
          <li key={item.ariaLabel} className="group relative">
            <a
              href={item.href}
              aria-label={item.ariaLabel}
              className={baseIconStyles}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className={baseIconSvgStyles} aria-hidden="true" />
            </a>
            <div className={baseTooltipStyles}>
              {item.tooltip}
            </div>
          </li>
        ))}
      </ul>
    );
  },
);

SocialTooltip.displayName = "SocialTooltip";

export { SocialTooltip };
