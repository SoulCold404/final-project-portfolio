"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a dedicated{" "}
        <span className="font-medium">software development </span> student , I
        <span className="italic"> bring a diverse background</span> in audio and
        video technology and content creation, gained through experiences in
        both the <span className="underline">tech start-up</span> and{" "}
        <span className="font-medium">music industry</span>. My strengths lie in
        strong organizational skills, a{" "}
        <span className="font-medium">collaborative mindset</span>, an acute
        design sensibility, and keen observation skills. During my previous
        roles, I had the privilege of working closely with{" "}
        <span className="font-medium">
          talented software and web developers
        </span>
        , UX and UI designers, and graphic designers.
      </p>

      <p>
        <span className="italic">These experiences </span>{" "}
        <span className="underline">ignited </span>my passion for web and
        application development. Currently pursuing a{" "}
        <span className="font-medium">Software Development diploma </span> at
        Southern Alberta Institute of Technology (SAIT), I am committed to
        evolving into a proficient UX/UI designer and{" "}
        <span className="font-medium">full-stack</span> developer.
      </p>
    </motion.section>
  );
}
