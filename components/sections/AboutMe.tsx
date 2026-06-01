"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { skills } from "@/content/skills";
import { useState } from "react";

export default function AboutMe() {
  const t = useTranslations("about");
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            {t("sectionTitle")}
            <span className="text-brand">.</span>
          </h2>
          <div className="mt-3 h-1 w-16 bg-brand rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                {!imgError ? (
                  <Image
                    src="/images/about-photo.jpg"
                    alt="Profile photo"
                    fill
                    className="object-cover rounded-2xl"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-brand/20 via-card to-muted flex items-center justify-center border border-border/50">
                    <span className="text-muted-foreground text-sm text-center px-6">
                      Add your photo to
                      <br />
                      <code className="text-xs text-brand">
                        /public/images/about-photo.jpg
                      </code>
                    </span>
                  </div>
                )}
                {/* Decorative border offset */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-brand/30 -z-10" />
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection
            direction="left"
            delay={0.2}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-1">
                {t("role")}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Calábria
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {t("bio")}
            </p>

            <div>
              <p className="text-sm font-semibold text-foreground mb-3">
                {t("skillsTitle")}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="text-xs"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
