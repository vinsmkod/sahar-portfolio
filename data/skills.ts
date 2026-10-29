export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "web-development",
    title: "Web Development",
    icon: "Code2",
    skills: ["CodeIgniter 4", "Laravel", "Tailwind CSS"],
  },
  {
    id: "database",
    title: "Database",
    icon: "Database",
    skills: ["MySQL", "MariaDB", "Database Management"],
  },
  {
    id: "system-analysis",
    title: "System Analysis",
    icon: "Layers",
    skills: ["User Needs Analysis", "UML", "SRS"],
  },
  {
    id: "office-tools",
    title: "Office Tools",
    icon: "FileText",
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    icon: "Users",
    skills: ["Teamwork", "Komunikasi", "Adaptif", "Eager to Learn"],
  },
];

