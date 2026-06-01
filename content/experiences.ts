import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Company Name",
    role: "Full Stack Developer",
    startDate: "Jan 2024",
    endDate: null,
    description: "Developed and maintained scalable web applications.",
    responsibilities: [
      "Built responsive UIs with React and TypeScript",
      "Designed and implemented RESTful APIs with Node.js",
      "Managed PostgreSQL databases and optimised query performance",
      "Set up CI/CD pipelines and Docker containerisation",
    ],
    tools: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    location: "Remote",
  },
  {
    company: "Another Company",
    role: "Frontend Developer",
    startDate: "Mar 2022",
    endDate: "Dec 2023",
    description: "Led frontend development for a SaaS product.",
    responsibilities: [
      "Developed component library with React and Tailwind CSS",
      "Collaborated with backend team to integrate REST APIs",
      "Improved Lighthouse performance score from 60 to 95",
    ],
    tools: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
    location: "São Paulo, BR",
  },
];
