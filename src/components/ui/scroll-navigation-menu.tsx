import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ScrollMenuItem {
  id: number;
  title: string;
  url: string;
  icon: LucideIcon;
}

interface ScrollNavigationMenuProps {
  menuItems: ScrollMenuItem[];
  logo: ReactNode;
  className?: string;
}

export function ScrollNavigationMenu({ menuItems, logo, className }: ScrollNavigationMenuProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setIsScrolled(latest > 100));

  const menuVariants = {
    closed: { opacity: 0, scale: 0.96, y: -12, transition: { duration: 0.16, ease: "easeOut" } },
    open: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30, when: "beforeChildren", staggerChildren: 0.1 } },
  } as const;
  const itemVariants = {
    closed: { y: 20, opacity: 0, scale: 0.8 },
    open: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 25 } },
  } as const;

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: isScrolled ? -100 : 0, opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn("fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border border-border bg-white/95 shadow-lg backdrop-blur-md", className)}
        aria-label="Primary navigation"
      >
        <div className="container-page">
          <div className="flex h-16 items-center justify-between">
            <motion.div className="shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {logo}
            </motion.div>
            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.url === "/" ? pathname === "/" : pathname.startsWith(item.url);
                  const isHighlighted = hoveredItem === null ? isActive : hoveredItem === item.id;
                  return (
                    <motion.div key={item.id} className="relative" onMouseEnter={() => setHoveredItem(item.id)} onMouseLeave={() => setHoveredItem(null)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link to={item.url} className={cn("relative z-10 flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition-colors", isHighlighted ? "text-destructive-foreground" : "text-[#111f6d]")}>
                        <Icon className="h-5 w-5 shrink-0" />
                        <span className="whitespace-nowrap">{item.title}</span>
                      </Link>
                      {isHighlighted && <motion.div layoutId="scroll-navbar-hover" className="absolute inset-0 rounded-md bg-destructive/85" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />}
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="lg:hidden">
              <motion.button type="button" onClick={() => setIsMenuOpen(true)} className="rounded-md p-2 text-[#111f6d] hover:text-primary focus:outline-none" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: isScrolled ? 1 : 0, opacity: isScrolled ? 1 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="fixed top-6 right-6 z-50">
        <motion.button type="button" onClick={() => setIsMenuOpen(true)} className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg" animate={isScrolled ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }} whileHover={{ scale: 1.1, rotate: 180 }} whileTap={{ scale: 0.9 }} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button type="button" aria-label="Close menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 cursor-default bg-background/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
              <div className="relative min-w-[300px] rounded-3xl border border-border bg-white p-8 shadow-2xl">
                <motion.button type="button" onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 rounded-full p-2 text-[#111f6d] hover:bg-muted hover:text-primary" whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} aria-label="Close menu">
                  <X className="h-5 w-5" />
                </motion.button>
                <div className="mt-8 space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={item.id} variants={itemVariants} whileHover={{ scale: 1.05, x: 10 }} whileTap={{ scale: 0.95 }}>
                        <Link to={item.url} onClick={() => setIsMenuOpen(false)} className="group flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-muted">
                          <motion.span className="shrink-0 text-primary" whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}><Icon className="h-5 w-5" /></motion.span>
                          <span className="whitespace-nowrap text-lg font-semibold text-[#111f6d] group-hover:text-primary">{item.title}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                <motion.span className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-primary" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
                <motion.span className="absolute -right-2 -bottom-2 h-3 w-3 rounded-full bg-secondary" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
