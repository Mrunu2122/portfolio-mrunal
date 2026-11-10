
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
  metricpilot,
  fitverse,
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
    title: "Full Stack Developer (Full-Time)",
    company_name: "The Bin Tech",
    icon: bintech,
    iconBg: "#383E56",
    date: "Dec 2025 - Sep 2026",
    points: [
      "Built and deployed the Farm Store website end to end, owning front-end, back-end, media, hosting, and deployment.",
      "Resolved excessive API requests on the Little Lads website that kept hitting hosting limits by fixing the data-fetching root cause.",
      "Developed and launched an interactive 3D website in 20 days with React, Three.js, and React Three Fiber, optimizing loading and proximity-based rendering.",
      "Corrected a Shopify checkout error (Rs. 399 product charged as Rs. 10) by tracing it to an unexpected donation option and fixing the purchase flow.",
    ],
    technologies: [
      { name: "React", icon: reactjs },
      { name: "Three.js", icon: threejs },
      { name: "Node.js", icon: nodejs },
      { name: "Express", icon: express },
      { name: "MongoDB", icon: mongodb },
      { name: "Google Cloud", icon: googlecloud },
      { name: "Shopify", icon: shopify },
      { name: "Git", icon: git },
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Inmin",
    icon: inmin,
    iconBg: "#E6DEDD",
    date: "Jul 2025 - Nov 2025",
    points: [
      "Launched inmin.info in approximately 48 hours using Next.js, TypeScript, and MongoDB.",
      "Resolved a launch-day slowdown (about 70 orders in 11 minutes across Bengaluru colleges) by giving every order a unique ID and status (pending, assigned, shipped, delivered) and routing new orders into a pending queue; the statuses also kept admins and delivery partners updated.",
      "Implemented Python back-end functionality and React Native mobile apps, covering feature development, API integration, testing, and deployment.",
      "Coordinated feature delivery across an e-commerce ecosystem of 3 production apps (customer, delivery partner, admin).",
    ],
    technologies: [
      { name: "Next.js", icon: reactjs },
      { name: "TypeScript", icon: typescript },
      { name: "React Native", icon: mobile },
      { name: "MongoDB", icon: mongodb },
      { name: "Node.js", icon: nodejs },
      { name: "Git", icon: git },
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Doutya Technologies",
    icon: doutya,
    iconBg: "#383E56",
    date: "Aug 2024 - Apr 2025",
    points: [
      "Developed React front-end features for client projects including Xortlist and Axara, after learning React in approximately 14 days.",
      "Managed sprints, coordinated feature delivery, and integrated stakeholder feedback.",
      "Built responsive, accessible user interfaces and collaborated closely with cross-functional teams.",
    ],
    technologies: [
      { name: "React", icon: reactjs },
      { name: "JavaScript", icon: javascript },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Git", icon: git },
    ],
  },
  {
    title: "Co-Founder, Freelance Web Development Agency",
    company_name: "Karmun",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "During college",
    points: [
      "Co-founded a web agency and delivered freelance client projects, owning requirements, client communication, and delivery.",
      "Designed and developed full-stack web applications tailored to client business specifications.",
    ],
    technologies: [
      { name: "React", icon: reactjs },
      { name: "JavaScript", icon: javascript },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Git", icon: git },
    ],
  },
];


const projects = [
  {
    name: "Verviq (AI-Interviewer)",
    description:
      "A production-grade AI interview intelligence platform featuring voice/video simulation, intelligent real-time contextual follow-up probing, speech telemetry & filler word analytics, and senior-calibrated rubrics.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "geminiai",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "orange-text-gradient",
      },
      {
        name: "webaudio",
        color: "yellow-text-gradient",
      },
    ],
    image: advisor,
    source_code_link: "https://github.com/Mrunu2122/Verviq.git",
  },
  {
    name: "MetricPilot",
    description:
      "A high-assurance, multi-agent business intelligence system with deterministic math isolation, source citation tracking, zero-tolerance verification auditing, and automated evaluation benchmark suites.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "multi-agent",
        color: "pink-text-gradient",
      },
      {
        name: "genai",
        color: "orange-text-gradient",
      },
      {
        name: "zod",
        color: "yellow-text-gradient",
      },
    ],
    image: metricpilot,
    source_code_link: "https://github.com/Mrunu2122/metricpilot.git",
    live_demo_link: "https://metricpilot-ashy.vercel.app/",
  },
  {
    name: "3D Website for The Bin Tech",
    description:
      "An interactive 3D web experience built and launched in 20 days with optimized scene loading and proximity-based rendering using React Three Fiber and Three.js.",
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
      {
        name: "webgl",
        color: "pink-text-gradient",
      },
    ],
    image: threeWebsite,
    source_code_link: "https://github.com/thebintech/3D-bintech",
    live_demo_link: "https://bintech-3d-47115275838.asia-south1.run.app",
  },
  {
    name: "FITVERSE",
    description:
      "A futuristic fashion-tech and interactive 3D digital campaign platform featuring scroll-choreographed 3D avatars, apparel inspection, and spatial portal experiences.",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "gsap",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: fitverse,
    source_code_link: "https://github.com/Mrunu2122/FITVERSE.git",
    live_demo_link: "https://fitverse-zeta-eight.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
