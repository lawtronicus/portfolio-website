import { links } from "./data";
import { experiencesData } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ExperienceItem = (typeof experiencesData)[number]["_id"];
