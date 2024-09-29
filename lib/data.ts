import React from "react";
import { FaReact, FaLaptop } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GrUserManager } from "react-icons/gr";
import { MdToken } from "react-icons/md";
import myflixAngular from "@/public/myflix-angular.png";
import chatApp from "@/public/MyChatApp.jpeg";
import meetUp from "@/public/Meetup.png";
import myflixReact from "@/public/myflix-react.png";
import etchASketch from "@/public/etch-a-sketch.png";
import calculator from "@/public/calculator.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    _id: "1",
    title: "Finished Master's Degree - Theoretical Linguistics",
    location: "Seoul National University",
    description:
      "Graduated with experience in Python for Natural Language Processing (NLP).",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    _id: "2",
    title: "Self-taught Front-End Development",
    location: "Seoul, South Korea",
    description:
      "Began working through Codecademy, and Freecodecamp on HTML, CSS, and Javascript. .",
    icon: React.createElement(FaLaptop),
    date: "2018 - 2020",
  },
  {
    _id: "3",
    title: "Customer Success Lead - KidsLoop SaaS Platform",
    location: "Seoul, South Korea",
    description:
      "Worked with customers and product teams to develop solutions for client specific problems. Required deep knowledge of product stack, agile methodologies, and SaaS business model. ",
    icon: React.createElement(GrUserManager),
    date: "2020 - 2022",
  },
  {
    _id: "4",
    title: "Senior Product Manager - TOKO Fze",
    location: "Seoul, South Korea",
    description:
      "Managed product roadmap and development team for B2B Web 3.0 platform using MERN application stack with Hyper Ledger Fabric backend. ",
    icon: React.createElement(MdToken),
    date: "2022 - Present",
  },
  {
    _id: "5",
    title: "Full-Stack Development Bootcamp",
    location: "CareerFoundry",
    description:
      "Graduated Full-Stack Development Bootcamp with experience in React, Node.js, Express, and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "MyFlix-Angular",
    description:
      "Built the client-side for an application called myFlix using Angular based on existing server-side code.",
    tags: ["Angular", "Typescript", "CSS", "REST", "MongoDB "],
    imageUrl: myflixAngular,
    appUrl: "https://lawtronicus.github.io/myFlix-Angular-client/welcome",
    repoUrl: "https://github.com/lawtronicus/myFlix-Angular-client",
  },
  {
    title: "ChatApp",
    description:
      "Built a chat app for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location.",
    tags: ["React Native", "Firestore", "Expo", "Async Storage"],
    imageUrl: chatApp,
    appUrl: null,
    repoUrl: "https://github.com/lawtronicus/Chat_App",
  },
  {
    title: "Meet Up",
    description:
      "Built a serverless, progressive web application (PWA) with React using a TDD approach.",
    tags: [
      "React",
      "TDD/BDD",
      "Google Calendar Api",
      "Jest",
      "Recharts",
      "Cucumber",
    ],
    imageUrl: meetUp,
    appUrl:
      "https://lawtronicus.github.io/MEET_UP/?code=4%2F0AVG7fiQJ5EAww0q5dJ0UuwGWuu9ZDnQJhgtJxXXJgxF0ceFn9ULSGehDrLhn0JB2j95hsA&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events.public.readonly",
    repoUrl: "https://github.com/lawtronicus/MEET_UP?tab=readme-ov-file",
  },
  {
    title: "MyFlix - React",
    description:
      "Using React, MongoDB, and REST, built the client and server side for an app called myFlix.",
    tags: [
      "React",
      "Redux",
      "React Forms",
      "React Bootstrap",
      "MongoDB",
      "REST",
    ],
    imageUrl: myflixReact,
    appUrl: "https://my-flix-application.netlify.app/users/$%7BuserId%7D",
    repoUrl: "https://github.com/lawtronicus/myFlix-client",
  },
  {
    title: "Etch-a-Sketch",
    description:
      "Practicing DOM Manipulation and advanced CSS to create an Etch-a-Sketch app.",
    tags: ["Javascript", "CSS", "HTML"],
    imageUrl: etchASketch,
    appUrl: "https://lawtronicus.github.io/Etch-a-Sketch/",
    repoUrl: "https://github.com/lawtronicus/Etch-a-Sketch",
  },
  {
    title: "Calculator",
    description:
      "Having some fun with Javascipt and CSS to create a calculator app.",
    tags: ["Javascript", "CSS", "HTML"],
    imageUrl: calculator,
    appUrl: "https://lawtronicus.github.io/calculator/",
    repoUrl: "https://github.com/lawtronicus/calculator",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Jest",
  "Cucumber",
] as const;
