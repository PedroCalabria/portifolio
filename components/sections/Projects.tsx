"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import { Code2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProjectModal from "@/components/shared/ProjectModal";
import { projects } from "@/content/projects";
import type { Project } from "@/types";

export default function Projects() {
  const t = useTranslations("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            {t("sectionTitle")}
            <span className="text-brand">.</span>
          </h2>
          <div className="mt-3 h-1 w-16 bg-brand rounded-full" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Carousel
            opts={{ align: "start", loop: projects.length > 2 }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <ProjectCard
                    project={project}
                    onSeeMore={() => setSelectedProject(project)}
                    t={t}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 sm:-left-6" />
            <CarouselNext className="-right-4 sm:-right-6" />
          </Carousel>
        </AnimatedSection>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
        />
      )}
    </section>
  );
}

function ProjectCard({
  project,
  onSeeMore,
  t,
}: {
  project: Project;
  onSeeMore: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <Card
      className="h-full flex flex-col overflow-hidden border-border/60 hover:border-brand/40 transition-colors cursor-pointer group"
      onClick={onSeeMore}
    >
      {/* Project image */}
      <div className="relative w-full h-44 bg-muted flex-shrink-0">
        {!imgError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand/10 via-muted to-muted/50 flex items-center justify-center">
            <span className="text-muted-foreground text-xs">No image</span>
          </div>
        )}
      </div>

      <CardContent className="flex flex-col flex-1 p-5 gap-4">
        {/* Title & description */}
        <div className="flex-1">
          <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5">
          {project.tools.slice(0, 4).map((tool) => (
            <Badge key={tool} variant="secondary" className="text-xs">
              {tool}
            </Badge>
          ))}
          {project.tools.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.tools.length - 4}
            </Badge>
          )}
        </div>

        {/* Buttons */}
        <div
          className="flex flex-wrap gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "h-8 px-3 text-xs gap-1.5",
              )}
            >
              <Code2 className="h-3.5 w-3.5" />
              {t("repoLink")}
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "h-8 px-3 text-xs gap-1.5",
              )}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live
            </a>
          )}
          <Button
            size="sm"
            className="h-8 px-3 text-xs ml-auto"
            onClick={onSeeMore}
          >
            {t("seeMore")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
