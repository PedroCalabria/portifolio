"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import ThemeToggle from "@/components/shared/ThemeToggle";
import LanguageToggle from "@/components/shared/LanguageToggle";

const NAV_ITEMS = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-20 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          className="text-xl font-bold tracking-tight text-foreground hover:text-brand transition-colors"
          aria-label="Go to top"
        >
          Calábria
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => handleNavClick(href)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                activeSection === key
                  ? "text-brand"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t(key)}
            </button>
          ))}
        </nav>

        {/* Desktop controls */}
        <div className="hidden md:flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="/cv.pdf"
            download
            aria-label="Download CV"
            className={cn(buttonVariants({ size: "sm" }), "ml-2 gap-2")}
          >
            <Download className="h-4 w-4" />
            {t("downloadCv")}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-2 mt-8">
                {NAV_ITEMS.map(({ key, href }) => (
                  <SheetClose
                    key={key}
                    onClick={() => handleNavClick(href)}
                    className={cn(
                      "w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors",
                      activeSection === key
                        ? "text-brand bg-brand/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted",
                    )}
                  >
                    {t(key)}
                  </SheetClose>
                ))}
                <div className="pt-4 border-t border-border mt-2">
                  <a
                    href="/cv.pdf"
                    download
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "w-full gap-2",
                    )}
                  >
                    <Download className="h-4 w-4" />
                    {t("downloadCv")}
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
