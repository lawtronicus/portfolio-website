"use client";

import React, { useEffect } from "react";
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
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a versatile professional with a background in{" "}
        <span className="font-bold">
          education, customer success, and product management
        </span>
        , now transitioning into{" "}
        <span className="font-bold">full-stack web development</span>. With a
        strong foundation in design thinking and user-focused strategies, I have
        consistently aligned product initiatives with business goals throughout
        my career.
      </p>
      <p className="mb-3">
        I first learned how to code in Python during my Master’s in Linguistics
        at Seoul National University, where I specialized in syntax and natural
        language processing (NLP). Since then, my development focus has shifted
        to web development. I’m currently completing a Full-Stack Developer
        Bootcamp with CareerFoundry, where I’ve deepened my expertise in
        JavaScript, React, Node.js, and MongoDB.
      </p>
      <p>
        My experience as a Product Manager for Web 3.0 and SaaS platforms has
        sharpened my ability to collaborate with teams, manage complex projects,
        and deliver solutions that meet both user and business needs. I’m now
        excited to bring these skills into the world of web development,
        creating intuitive, high-performing web applications.
      </p>
    </motion.section>
  );
}
