
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
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'

import doutya from "../assets/company/doutya.png";
import inmin from "../assets/company/inmin.png";
import Infotech from "../assets/company/infotech.png";
import advisor from "../assets/company/advisor.png";
import sign from "../assets/company/sign.png";


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
    title: "Ui UX Designer",
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
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
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
    name: "Git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Doutya Technologies",
    icon: doutya,
    iconBg: "#383E56",
    date: "30 July 2024 – 30 April 2025",
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
  {
    title: "Technical Lead & Full Stack Developer",
    company_name: "Inmin",
    icon: inmin,
    iconBg: "#E6DEDD",
    date: "1 July 2025 – 1 November 2025",
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
      { name: "TypeScript", icon: javascript },
      { name: "AWS", icon: aws },
      { name: "Git", icon: git },
    ],
  },
];


const projects = [
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
  image: Infotech, // You can change this if you upload a custom image
  source_code_link: "https://github.com/Mrunu2122/infotech-interiors.git",
  },
  {
    name: "AI-Advisor",
    description:
    "An AI-powered mock interview platform that converts your speech into text and highlights areas where you fumbled, offering suggestions for improvement.It gives you unlimited attempts to practice",
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
    name:"Sign Language Detector",
    description:
    "A real-time sign language recognition system that uses webcam input and machine learning to detect hand gestures and translate them into text and speaks as well",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: sign,
    source_code_link: "https://github.com/Mrunu2122/sign-to-speech-ai.git",
  },
];

export { services, technologies, experiences, projects };
