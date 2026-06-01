"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/content/skills";

export default function Hero() {
  const t = useTranslations("hero");

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image — replace /images/hero-bg.jpg with your own */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-0 bg-background/90"
        aria-hidden="true"
      />
      {/* Decorative glows */}
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-brand/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[75vh]">
          {/* Left — Text content */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-brand font-semibold text-lg mb-3"
            >
              {t("greeting")}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-[1.05] mb-6 tracking-tight"
            >
              {t("titleLine1")}
              <br />
              <span className="text-muted-foreground/70">
                {t("titleLine2")}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
            >
              {t("description")}
            </motion.p>

            {/* Skills chips */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 mb-10"
            >
              {skills.slice(0, 8).map((skill) => (
                <Badge
                  key={skill.name}
                  variant="outline"
                  className="text-xs border-border/60 text-muted-foreground hover:border-brand hover:text-brand transition-colors"
                >
                  {skill.name}
                </Badge>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="gap-2 font-semibold"
                onClick={() => handleScrollTo("contact")}
              >
                <Mail className="h-4 w-4" />
                {t("ctaContact")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-border/60 hover:border-brand hover:text-brand transition-colors"
                onClick={() => handleScrollTo("projects")}
              >
                {t("ctaProjects")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Code editor mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <CodeMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CodeMockup() {
  return (
    <div className="relative w-full max-w-md">
      <div className="rounded-xl border border-border/50 bg-card/70 backdrop-blur-sm p-5 shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border/30">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">
            portfolio.tsx
          </span>
        </div>
        {/* Code lines */}
        <div className="font-mono text-sm space-y-[6px] leading-relaxed">
          <p>
            <span className="text-purple-400">import </span>
            <span className="text-foreground/80">React </span>
            <span className="text-purple-400">from </span>
            <span className="text-yellow-400">&quot;react&quot;</span>
            <span className="text-foreground/60">;</span>
          </p>
          <p className="h-3" />
          <p>
            <span className="text-blue-400">const </span>
            <span className="text-brand">Developer </span>
            <span className="text-foreground/60">= () </span>
            <span className="text-blue-400">=&gt; </span>
            <span className="text-foreground/60">{"{"}</span>
          </p>
          <p className="pl-5">
            <span className="text-blue-400">return </span>
            <span className="text-foreground/60">(</span>
          </p>
          <p className="pl-10">
            <span className="text-foreground/60">&lt;</span>
            <span className="text-red-400">div</span>
            <span className="text-foreground/60">&gt;</span>
          </p>
          <p className="pl-14 text-brand">&lt;Skills /&gt;</p>
          <p className="pl-14 text-brand">&lt;Projects /&gt;</p>
          <p className="pl-14 text-brand">&lt;Passion /&gt;</p>
          <p className="pl-10">
            <span className="text-foreground/60">&lt;/</span>
            <span className="text-red-400">div</span>
            <span className="text-foreground/60">&gt;</span>
          </p>
          <p className="pl-5">
            <span className="text-foreground/60">);</span>
          </p>
          <p>
            <span className="text-foreground/60">{"}"}</span>
            <span className="text-foreground/60">;</span>
          </p>
          <p className="h-3" />
          <p>
            <span className="text-purple-400">export default </span>
            <span className="text-brand">Developer</span>
            <span className="text-foreground/60">;</span>
          </p>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-brand/8 blur-2xl -z-10 scale-105" />
    </div>
  );
}
