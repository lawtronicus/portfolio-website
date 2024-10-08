import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName, threshold]);
  return {
    ref,
    inView,
  };
}

export function useItemInView(threshold = 0.25) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true, //only trigger the animation the first time
  });

  return {
    ref,
    inView,
  };
}
