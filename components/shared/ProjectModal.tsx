"use client";

import { useTranslations } from "next-intl";
import { Code2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import type { Project } from "@/types";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({ project, open, onOpenChange }: Props) {
  const t = useTranslations("projects");
  const [imgError, setImgError] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        {/* Project image */}
        <div className="relative w-full h-52 rounded-lg overflow-hidden bg-muted">
          {!imgError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              <span className="text-muted-foreground text-sm">
                No image available
              </span>
            </div>
          )}
        </div>

        <Separator />

        {/* Problem */}
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            {t("problemTitle")}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>

        <Separator />

        {/* Technologies */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">
            {t("toolsTitle")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Technical decisions */}
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            {t("decisionsTitle")}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.decisions}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm" })}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              {t("liveLink")}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm", variant: "outline" }))}
            >
              <Code2 className="mr-2 h-4 w-4" />
              {t("repoLink")}
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
