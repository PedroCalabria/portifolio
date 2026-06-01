import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project Name",
    description:
      "A brief description of what this project does and the value it delivers to users.",
    image: "/images/projects/project-1.jpg",
    tools: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    repoUrl: "https://github.com/yourusername/project-1",
    liveUrl: "https://project-1.vercel.app",
    problem:
      "Describe the problem this project was built to solve. What challenge were users facing and why did it matter?",
    decisions:
      "Explain the key technical decisions: why you chose this stack, architectural patterns used, trade-offs considered, and what you would do differently.",
  },
  {
    id: "project-2",
    title: "Another Project",
    description:
      "Short description of the second project and its main features.",
    image: "/images/projects/project-2.jpg",
    tools: ["React", "Node.js", "MongoDB", "Docker"],
    repoUrl: "https://github.com/yourusername/project-2",
    liveUrl: undefined,
    problem:
      "The problem statement for this project. Who was the target user and what pain point did it address?",
    decisions:
      "The main architectural and technical decisions made throughout the development of this project.",
  },
  {
    id: "project-3",
    title: "Third Project",
    description:
      "A tool or utility that automates a repetitive workflow, saving hours of manual work per week.",
    image: "/images/projects/project-3.jpg",
    tools: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/yourusername/project-3",
    liveUrl: "https://project-3.vercel.app",
    problem:
      "The specific problem this tool addresses and the context in which it was created.",
    decisions:
      "Why FastAPI over other frameworks, how data persistence was designed, and scalability considerations.",
  },
];
