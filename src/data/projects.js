import { getGmailComposeUrl } from "./profile";

export const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "Full-stack analytics dashboard with real-time data visualization.",
    fullDescription:
      "A comprehensive e-commerce analytics dashboard that provides real-time insights into sales, inventory, customer behavior, and revenue trends. Built with a modern stack, it features interactive charts, data filtering, and export capabilities to help businesses make data-driven decisions.",
    image: "/project1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    technologies: ["React 18", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Chart.js", "REST API", "JWT Auth"],
    features: [
      "Real-time sales analytics and revenue tracking",
      "Interactive data visualization with dynamic charts",
      "Inventory management with low-stock alerts",
      "Customer segmentation and behavior analysis",
      "Role-based access control for team members",
      "Export reports in PDF and CSV formats"
    ],
    problems: [
      "Handling large datasets without performance degradation was a major challenge. Optimized database queries with indexing and implemented pagination to keep the UI responsive.",
      "Real-time updates required efficient WebSocket integration. Used Socket.io with throttling to prevent overwhelming the client with frequent updates.",
      "Designing a user-friendly dashboard that works across devices required careful planning of the grid layout and responsive data tables."
    ],
    liveUrl: getGmailComposeUrl({ subject: "E-Commerce Dashboard Project" }),
    githubUrl: "https://github.com/Anas-SKYLINK",
    category: "Web App",
  },
  {
    id: 2,
    title: "Landing Page Portfolio",
    description:
      "Modern, responsive portfolio built with React and Framer Motion.",
    fullDescription:
      "A visually stunning landing page portfolio designed to showcase creative work with smooth animations and a modern aesthetic. Features a clean layout, dark mode support, and seamless navigation with scroll-triggered animations.",
    image: "/project2.png",
    tags: ["React", "Tailwind", "Framer Motion"],
    technologies: ["React 18", "Tailwind CSS", "Framer Motion", "Vite", "Lucide Icons", "CSS Animations"],
    features: [
      "Smooth scroll-triggered animations with Framer Motion",
      "Dark/light mode with system preference detection",
      "Fully responsive design across all devices",
      "Optimized performance with lazy-loaded sections",
      "SEO-friendly semantic HTML structure",
      "Contact form with validation"
    ],
    problems: [
      "Coordinating multiple scroll-triggered animations without causing layout shifts required careful use of Framer Motion's whileInView with proper viewport margins.",
      "Ensuring smooth performance on mobile devices meant reducing animation complexity and using hardware-accelerated CSS properties where possible.",
      "Dark mode transition needed a flash-free implementation — solved by storing the theme preference in localStorage and applying the class before React hydration."
    ],
    liveUrl: "https://landing-page-simple-khaki.vercel.app/",
    githubUrl: "https://github.com/Rana-Muhammad-Anas/Landing-page-simple",
    category: "Web App",
  },
  {
    id: 3,
    title: "Scentora Luxury",
    description: "E-commerce website for perfumes with full shopping experience.",
    fullDescription:
      "Scentora Luxury is a premium e-commerce platform for perfumes and fragrances. It offers a complete online shopping experience including product browsing, detailed product pages, shopping cart functionality, and a streamlined checkout process with multiple payment options.",
    image: "/project3.png",
    tags: ["React", "Redux", "Tailwind", "Node", "Express", "MongoDB"],
    technologies: ["React 18", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Mongoose", "Tailwind CSS", "JWT", "Stripe API"],
    features: [
      "Product catalog with advanced search and filtering",
      "Shopping cart with persistent state management",
      "User authentication and profile management",
      "Secure checkout with Stripe payment integration",
      "Admin dashboard for product and order management",
      "Responsive design optimized for mobile shopping"
    ],
    problems: [
      "Managing complex cart state across the application was streamlined with Redux Toolkit, but syncing it with the backend required careful handling of optimistic updates.",
      "Image optimization for product listings was critical — implemented lazy loading with progressive image placeholders to improve initial page load time.",
      "Handling payment webhooks reliably required idempotency keys and a robust error handling system to prevent duplicate charges."
    ],
    liveUrl: "https://scentora-frontend.vercel.app/",
    githubUrl: "https://github.com/anas9006/Scentora-Frontend",
    category: "Web App",
  },
  {
    id: 4,
    title: "Nexo Chat WebApp",
    description: "Real-time chat application for seamless communication.",
    fullDescription:
      "Nexo Chat is a real-time messaging application that enables seamless communication between users. It supports instant messaging, user presence indicators, typing indicators, and message history. Built with a focus on low-latency communication and a clean, intuitive interface.",
    image: "/project4.png",
    tags: ["React", "Node.js", "Socket.io", "Tailwind"],
    technologies: ["React 18", "Node.js", "Express", "Socket.io", "MongoDB", "Tailwind CSS", "JWT Auth", "Cloudinary"],
    features: [
      "Real-time messaging with Socket.io for instant delivery",
      "User online/offline presence indicators",
      "Typing indicators for active conversations",
      "Message history with infinite scroll pagination",
      "Media file sharing with Cloudinary integration",
      "Read receipts and message status tracking"
    ],
    problems: [
      "Achieving sub-100ms message delivery required optimizing the Socket.io connection with WebSocket transport only (no polling fallback) and compressing payloads.",
      "Managing chat room scalability — implemented a room-based architecture where each conversation is a separate Socket.io room to avoid broadcasting to irrelevant clients.",
      "Handling reconnection and message queuing when users temporarily lose connection was solved with a client-side message queue that re-sends on socket reconnection."
    ],
    liveUrl: "https://nexo-frontend-gray.vercel.app/",
    githubUrl: "https://github.com/anas9006/Nexo-Frontend",
    category: "Web App",
  },
];

export const getProjectById = (id) => {
  return projects.find((p) => p.id === Number(id));
};
