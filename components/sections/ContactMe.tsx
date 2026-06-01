"use client";

import { useTranslations } from "next-intl";
import { Mail, Link2, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/shared/AnimatedSection";

const CONTACT_ITEMS = [
  {
    key: "email",
    icon: Mail,
    label: "emailLabel",
    href: "mailto:your@email.com",
    value: "your@email.com",
  },
  {
    key: "linkedin",
    icon: Link2,
    label: "linkedinLabel",
    href: "https://linkedin.com/in/yourprofile",
    value: "linkedin.com/in/yourprofile",
  },
  {
    key: "whatsapp",
    icon: MessageCircle,
    label: "whatsappLabel",
    href: "https://wa.me/5500000000000",
    value: "+55 (00) 00000-0000",
  },
] as const;

export default function ContactMe() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24 scroll-mt-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <AnimatedSection className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            {t("sectionTitle")}
            <span className="text-brand">.</span>
          </h2>
          <div className="mt-3 h-1 w-16 bg-brand rounded-full" />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-12">
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
            {t("description")}
          </p>
        </AnimatedSection>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CONTACT_ITEMS.map(
            ({ key, icon: Icon, label, href, value }, index) => (
              <AnimatedSection key={key} delay={index * 0.1}>
                <a
                  href={href}
                  target={key !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block group"
                  aria-label={t(label)}
                >
                  <Card className="h-full border-border/60 hover:border-brand/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand/5 hover:-translate-y-1">
                    <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                        <Icon className="h-6 w-6 text-brand" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground capitalize">
                          {key}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1 break-all">
                          {value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </AnimatedSection>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
