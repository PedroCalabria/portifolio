"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { experiences } from "@/content/experiences";
import { MapPin } from "lucide-react";

export default function Experiences() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-24 scroll-mt-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            {t("sectionTitle")}
            <span className="text-brand">.</span>
          </h2>
          <div className="mt-3 h-1 w-16 bg-brand rounded-full" />
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border/60"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <AnimatedSection
                key={`${exp.company}-${index}`}
                delay={index * 0.1}
              >
                <div className="relative flex gap-6 sm:gap-10">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 w-8 sm:w-12 flex justify-center">
                    <div className="mt-1.5 w-3 h-3 rounded-full bg-brand ring-4 ring-background z-10" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-2 bg-card border border-border/60 rounded-xl p-6 shadow-sm hover:border-brand/30 transition-colors">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {exp.company}
                        </h3>
                        <p className="text-brand font-semibold text-sm mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                          {exp.startDate} — {exp.endDate ?? t("present")}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-1.5 mb-5">
                      {exp.responsibilities.map((r, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand"
                            aria-hidden="true"
                          />
                          {r}
                        </li>
                      ))}
                    </ul>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="outline"
                          className="text-xs border-border/60"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
