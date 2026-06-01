export type Skill = {
  name: string;
  category?:
    | "frontend"
    | "backend"
    | "database"
    | "devops"
    | "language"
    | "tools";
};

export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null; // null = present
  description: string;
  responsibilities: string[];
  tools: string[];
  location?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  repoUrl?: string;
  liveUrl?: string;
  problem: string;
  decisions: string;
};
