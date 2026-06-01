"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "pt" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      aria-label="Toggle language"
      className="gap-1.5 font-mono text-xs font-semibold"
    >
      <Globe className="h-4 w-4" />
      {locale === "en" ? "PT" : "EN"}
    </Button>
  );
}
