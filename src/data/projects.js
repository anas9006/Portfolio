import { getGmailComposeUrl } from "./profile";

export const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "Full-stack analytics dashboard with real-time data visualization.",
    image: "/project1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: getGmailComposeUrl({ subject: "E-Commerce Dashboard Project" }),
    githubUrl: "https://github.com/Anas-SKYLINK",
    category: "Web App",
  },
  {
    id: 2,
    title: "Landing Page Portfolio",
    description:
      "Modern, responsive portfolio built with React and Framer Motion.",
    image: "/project2.png",
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "https://landing-page-simple-khaki.vercel.app/",
    githubUrl: "https://github.com/Rana-Muhammad-Anas/Landing-page-simple",
    category: "Web App",
  },
  {
    id: 3,
    title: "Scentora Luxury",
    description: "E-commerce website for perfumes.",
    image: "/project3.png",
    tags: ["React", "Redux", "Tailwind", "Node", "Express", "MongoDB"],
    liveUrl: "https://scentora-frontend.vercel.app/",
    githubUrl: "https://github.com/anas9006/Scentora-Frontend",
    category: "Web App",
  },
  {
    id: 4,
    title: "POS System",
    description: "Complete branding package for a tech startup.",
    image: "/project4.jpg",
    tags: ["Illustrator", "Photoshop", "Figma"],
    liveUrl: getGmailComposeUrl({ subject: "Brand Identity Design Project" }),
    githubUrl: "https://github.com/Anas-SKYLINK",
    category: "Design",
  },
];
