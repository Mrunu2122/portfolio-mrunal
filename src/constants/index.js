
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  figma,
  git,
  html,
  javascript,
  typescript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  threejs,
  docker,
  postgresql,
  framer,
  gsap,
  mui,
  redux,
  firebase,
  shopify,
  cloudinary,
  googlecloud,
} from '../assets'

import doutya from "../assets/company/doutya.png";
import inmin from "../assets/company/inmin.png";
import Infotech from "../assets/company/infotech.png";
import advisor from "../assets/company/advisor.png";
import sign from "../assets/company/sign.png";
import bintech from "../assets/company/bintechlogo.jpeg";
import threeWebsite from "../assets/company/3d-website.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: redux,
  },
  {
    name: "Angular",
    icon: backend,
  },
  {
    name: "React Native",
    icon: mobile,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: framer,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Google Cloud",
    icon: googlecloud,
  },
  {
    name: "Cloudinary",
    icon: cloudinary,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Bin Tech",
    icon: bintech,
    iconBg: "#383E56",
    date: "Dec 2025 – May 2026 (Internship) | Jun 2026 – Sep 2026 (Full-Time)",
    points: [
      "Developed end-to-end platforms (Little Lads Orphanage, Farm Store) handling full stack, deployment, and Google Ads integration.",
      "Leveraged Google Cloud, Hostinger, and Cloudinary for production infrastructure and optimized media management.",
      "Built a 3D interactive website using React, Three.js, and React Three Fiber, independently mastering 3D web dev in 20 days.",
      "Managed multiple concurrent projects with complete ownership from architecture through deployment and maintenance.",
    ],
    technologies: [
      { name: "React", icon: reactjs },
      { name: "Node.js", icon: nodejs },
      { name: "Three.js", icon: threejs },
      { name: "Express", icon: express },
      { name: "MongoDB", icon: mongodb },
      { name: "Google Cloud", icon: aws },
      { name: "Git", icon: git },
    ],
  },
  {
    title: "Technical Lead & Full Stack Developer Intern",
    company_name: "Inmin",
    icon: inmin,
    iconBg: "#E6DEDD",
    date: "1 July 2025 – 1 November 2025 (Internship)",
    points: [
      "Led a team of developers in designing and implementing scalable web applications.",
      "Architected and developed full-stack solutions using modern technologies.",
      "Mentored junior developers and conducted code reviews to maintain code quality.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Optimized application performance and implemented best practices in development.",
    ],
    technologies: [
      { name: "React", icon: reactjs },
      { name: "Node.js", icon: nodejs },
      { name: "MongoDB", icon: mongodb },
      { name: "Express", icon: express },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "AWS", icon: aws },
      { name: "Git", icon: git },
    ],
  },
  {
    title: "Frontend Developer (Freelance)",
    company_name: "Neelambari",
    icon: creator,  // Using the creator icon for freelance work
    iconBg: "#E6DEDD",
    date: "October 2025 (Freelancing)",
    points: [
      "Designed and developed the complete frontend of the Neelambari website from scratch.",
      "Implemented responsive and modern UI/UX design principles for optimal user experience.",
      "Utilized Next.js and TypeScript to build a performant and type-safe application.",
      "Successfully delivered the project within a tight 1-week deadline.",
    ],
    technologies: [
      { name: "Next.js", icon: reactjs },
      { name: "TypeScript", icon: typescript },
      { name: "React", icon: reactjs },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Git", icon: git },
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Doutya Technologies",
    icon: doutya,
    iconBg: "#383E56",
    date: "30 July 2024 – 30 April 2025 (Internship)",
    points: [
      "Worked on full-stack web applications using MERN stack.",
      "Collaborated with cross-functional teams to deliver AI-powered features.",
      "Built responsive UIs and RESTful APIs for core products.",
      "Gained experience in production-level deployments and performance optimization.",
    ],
    technologies: [
      { name: "React", icon: reactjs },
      { name: "Node.js", icon: nodejs },
      { name: "MongoDB", icon: mongodb },
      { name: "Express", icon: express },
      { name: "JavaScript", icon: javascript },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Git", icon: git },
    ],
  },
];


const projects = [
  {
    name: "3D Interactive Bin Tech Website",
    description:
      "An interactive 3D website built using Three.js and React Three Fiber, showcasing immersive 3D visualization and modern web technologies.",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "react3fiber",
        color: "yellow-text-gradient",
      },
    ],
    image: threeWebsite,
    source_code_link: "https://github.com/thebintech/3D-bintech",
  },
  {
    name: "AI-Advisor",
    description:
      "An AI-powered mock interview platform that converts your speech into text and highlights areas where you fumbled, offering suggestions for improvement. It gives you unlimited attempts to practice",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "speech-to-text",
        color: "orange-text-gradient",
      },
    ],
    image: advisor,
    source_code_link: "https://github.com/Mrunu2122/ai-interviewer.git",
  },
  {
    name: "Infotect-Interior Web Page",
    description:
      "A clean and visually rich website built to showcase my frontend skills, focused on UI layout, responsiveness, and design.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "yellow-text-gradient",
      },
    ],
    image: Infotech,
    source_code_link: "https://github.com/Mrunu2122/infotech-interiors.git",
  },
];

export { services, technologies, experiences, projects };
