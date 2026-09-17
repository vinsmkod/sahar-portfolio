export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "system-analysis",
    title: "System Analysis",
    icon: "Layers",
    skills: [
      { name: "Requirement Analysis" },
      { name: "User Requirement" },
      { name: "System Flow" },
      { name: "Documentation" },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: "Code2",
    skills: [
      { name: "Laravel" },
      { name: "CodeIgniter 4" },
      { name: "Next.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "Database",
    skills: [
      { name: "MySQL" },
      { name: "Database Management" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Microsoft Word" },
      { name: "Microsoft Excel" },
      { name: "Microsoft PowerPoint" },
    ],
  },
];
