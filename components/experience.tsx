"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView, useItemInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.33);
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item) => (
          <ExperienceItem key={item._id} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}

// ExperienceItemType
type ExperienceItemType = {
  _id: string;
  title: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  date: string;
};

// A component for each experience item
function ExperienceItem({ item }: { item: ExperienceItemType }) {
  // Use useItemInView for tracking the visibility of each item individually
  const { ref: itemRef, inView } = useItemInView(0.25);
  const { theme } = useTheme();

  return (
    <VerticalTimelineElement
      visible={inView}
      contentStyle={{
        background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, .050",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight:
          theme === "light"
            ? ".4rem solid #9ca3af"
            : "0.4rem solid rgba(255, 255, 255, 0.5)",
      }}
      date={item.date}
      icon={item.icon}
      iconStyle={{
        background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)", // Conditional styling for the icon
        fontSize: "1.5rem",
      }}
    >
      <div ref={itemRef}>
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="font-normal !mt-0">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {item.description}
        </p>
      </div>
    </VerticalTimelineElement>
  );
}
