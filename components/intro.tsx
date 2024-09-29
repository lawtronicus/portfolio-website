// Framer motion requires the use of the client keyword to work. This is because it is a client-side library that is not available on the server.
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex item-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/lawton-profile-photo.png"
              alt="Lawton Hogan portrait"
              width="192"
              height="192"
              quality="95"
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl -mt-[2rem]"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 left-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I&apos;m Lawton!</span> I am a{" "}
        <span className="font-bold">full-stack developer</span> from the US{" "}
        <span className="text-3xl">🇺🇸</span>, living in South Korea{" "}
        <span className="text-3xl">🇰🇷</span>. I have 5 years of experience in
        tech and product, and I have been coding for six years. I enjoy building
        websites and apps that solve{" "}
        <span className="italic">real-world problems</span> and are{" "}
        <span className="italic">fun and intuitive</span> to use. My focus is{" "}
        <span className="underline">React</span> (
        <span className="underline">Next.js</span>).
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group flex items-center gap-2 bg-white px-7 py-3 rounded-full borderBlack outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10"
          href="/Lawton Hogan CV_2024.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="flex items-center gap-2 bg-white p-4 text-gray-700 rounded-full borderBlack outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-110 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/lawton-hogan-3a8657154/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex items-center text-[1.25rem] gap-2 bg-white p-4 text-gray-700 rounded-full borderBlack  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-110 transition cursor-pointer dark:bg-white/10 dark:text-white/50"
          href="https://github.com/lawtronicus"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
