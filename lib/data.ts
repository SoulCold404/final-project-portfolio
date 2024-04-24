import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "FAKE bootcamp",
    location: "Calgary",
    description:
      " USE TO USE TO USE TO USE TO WORKING USE TO WORKING ",
    icon: React.createElement(LuGraduationCap),
    date: "2030",
  },
  {
    title: "xxxxxxxxx",
    location: "Clagary",
    description:
      " ",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2030",
  },
  {
    title: "XXXXXxxxxxx",
    location: "xxxxxxx,xxx",
    description:
      "Sed condimentum metus eget iaculis laoreet. Aenean congue rutrum lorem, sit amet imperdiet elit iaculis at. Etiam vulputate quis eros id pretium. Nulla in nunc nec dui tristique cursus vitae sit amet urna. Maecenas ligula lorem, venenatis vitae elit eget, lobortis ornare sem. Ut eget pulvinar lacus. Cras quis dolor rhoncus ante p",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "FAKE 1",
    description:
      "Pellentesque leo libero, consectetur vel tempor id, suscipit ut mi. Aenean in mi sapien. Ut convallis eleifend nisi, nec maximus nunc placerat nec.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "FAKE 2",
    description:
      "Donec consectetur ullamcorper nulla, nec interdum metus vulputate in. Suspendisse at lorem risus.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "FAKE 3",
    description:
      "Vivamus mollis dui neque, sit amet ultrices augue euismod at. Pellentesque sapien dolor, tempor non mollis id, dapibus in felis. Ut ac nunc sit.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
