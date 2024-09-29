"use client";

import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  appUrl,
  repoUrl,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full gap-4 sm:group-even:ml-[18rem]">
          <h3 className="text-2 xl font-semibold">{title}</h3>
          <div className="flex gap-2">
            {/* Conditionally render the appUrl link only if appUrl is not null or undefined */}
            {appUrl && (
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 dark:bg-opacity-75 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/80 dark:font-extrabold hover:scale-110 transition-all"
              >
                Live
              </a>
            )}
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 dark:bg-opacity-75 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/80 dark:font-extrabold hover:scale-110 transition-all"
            >
              Repo
            </a>
          </div>
          <p className="mt-1 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, idx) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={idx}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className={`absolute hidden sm:block top-8 -right-40 ${
            index === 1
              ? "w-[12rem] group-even:left-10 group-even:top-5"
              : "w-[28.25rem] group-even:-left-40"
          } rounded-t-lg shadow-2xl group-even:right-[initial] group-hover:scale-[1.05] transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2`}
        />
      </section>
    </motion.div>
  );
}
