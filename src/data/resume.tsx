import { Icons } from "@/components/icons";
import { CameraIcon, CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Marco Haber",
  initials: "DV",
  url: "https://marcohaber.dev",
  location: "Limassol, CY",
  locationLink: "https://www.google.com/maps/place/limassol",
  description: "Computer Science Graduate. I love building things. ",
  summary:
    "Recent Computer Science graduate from Frederick University with a keen interest in building awesome user experiences. Completed an internship last summer, gaining practical experience in software development. Eager to apply my skills and contribute to innovative projects in the tech industry.",

  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "CSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#photography", icon: CameraIcon, label: "Photography" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/marcoshaber99",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/marcohaber99/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PANALINE",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/panaline.png",
      start: "June 2023",
      end: "July 2024",
      description:
        "I created a tool for businesses to manage and examine the financial data to find where and how their expenses are allocated through a dynamic, interactive dashboard. Users can apply expense allocation rules to examine their profit based on those rules",
    },
  ],
  education: [
    {
      school: "Frederick University",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/fred-logo.webp",
      start: "2020",
      end: "2024",
      description:
        "I studied computer science at Frederick University, where I gained a Bachelor's Degree of Computer Science (BCS) in 2024. During my studies, I focused on developing software applications and web development projects.",
    },
  ],
  projects: [
    {
      title: "Harmony",
      href: "https://harmony-theta.vercel.app/",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Developed a SaaS document management platform with collaboration features and AI assistance. Includes real-time editing, commenting, and AI-powered text completion, summarization, and translation. Offers tiered subscriptions for various team sizes.",

      technologies: [
        "Next.js",
        "Typescript",
        "Convex",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://harmony-theta.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/harmony.mp4",
    },
    {
      title: "ProfitScan",
      href: "https://profitscan.streamlit.app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developed ProfitScan, a financial analysis tool that allocates expenses to transactions, generates detailed P&L accounts, and provides customizable reports. Helps businesses identify profitable segments and enhance overall financial performance.",

      technologies: ["Streamlit", "Python", "Pandas", "Numpy", "Matplotlib"],
      links: [
        {
          type: "Website",
          href: "https://profitscan.streamlit.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/profitscan-demo.mp4",
    },
  ],
  blogs: [
    {
      title: "React Context: Simplifying State Management",
      href: "/blog/react-context",
      date: "2024-08-04",
      description: "A quick guide to using React Context for efficient state sharing across components",
      image: "react-context-svg",
    },
  ],
} as const;