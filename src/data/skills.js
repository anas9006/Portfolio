import { FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaFigma, FaPaintBrush } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiExpress } from 'react-icons/si';

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90, icon: FaReact, color: "text-blue-400" },
      { name: "Next.js", level: 85, icon: SiNextdotjs, color: "text-slate-900 dark:text-white" },
      { name: "Tailwind CSS", level: 95, icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "TypeScript", level: 80, icon: SiTypescript, color: "text-blue-600" },
      { name: "HTML5/CSS3", level: 98, icon: FaHtml5, color: "text-orange-500" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85, icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", level: 85, icon: SiExpress, color: "text-slate-900 dark:text-white" },
      { name: "MongoDB", level: 80, icon: SiMongodb, color: "text-green-600" },
      { name: "PostgreSQL", level: 75, icon: SiPostgresql, color: "text-blue-500" },
    ]
  },
  {
    category: "Tools & Design",
    skills: [
      { name: "Figma", level: 65, icon: FaFigma, color: "text-purple-500" },
      { name: "Photoshop", level: 70, icon: FaPaintBrush, color: "text-blue-700" },
      { name: "Git", level: 92, icon: FaGitAlt, color: "text-orange-600" },
    ]
  }
];
