import { useState, useRef } from 'react';
import { IProject } from '../interfaces/portfolio.interface';

export const useProjectCarousel = (projects: IProject[]) => {
  const [activeId, setActiveId] = useState<number>(projects[0]?.id || 1);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const selectProject = (id: number) => {
    setActiveId(id);
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  return {
    activeId,
    carouselRef,
    selectProject,
    scrollNext,
    scrollPrev,
  };
};