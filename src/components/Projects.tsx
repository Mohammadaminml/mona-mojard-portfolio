import React from 'react';
import { IProject } from '../interfaces/portfolio.interface';
import { useProjectCarousel } from '../hooks/useProjectCarousel';

interface ProjectsProps {
  projects: IProject[];
  onViewAll?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onViewAll }) => {
  const previewProjects = projects.slice(0, 5);
  const { activeId, carouselRef, selectProject } =
    useProjectCarousel(previewProjects);

  return (
    <section
      id="projects"
      className="max-w-[1200px] mx-auto flex flex-col items-center gap-[32px]"
    >
      <div className="flex flex-col items-start gap-[20px] w-full">
        <div className="relative w-full sm:w-[464px] h-[142px]">
          <span
            className="absolute left-0 top-0 text-[80px] sm:text-[120px] leading-[142px] font-normal text-white opacity-10 select-none pointer-events-none"
            style={{ fontFamily: "'Londrina Outline', sans-serif" }}
          >
            PROJECTS
          </span>
          <h2 className="absolute left-[3px] top-[64px] text-[26px] leading-[34px] font-bold text-white">
            My Projects
          </h2>
        </div>

        <div
          ref={carouselRef}
          className="flex flex-row items-center gap-[32px] w-full h-[400px] overflow-x-auto scrollbar-none"
        >
          {previewProjects.map((project) => {
            const isActive = project.id === activeId;

            return (
              <div
                key={project.id}
                onClick={() => selectProject(project.id)}
                className={`relative h-[400px] rounded-[36px] shrink-0 overflow-hidden cursor-pointer transition-all duration-500 ${
                  isActive ? 'w-[380px]' : 'w-[173px]'
                }`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />

                {isActive && (
                  <div
                    className="absolute left-[20px] right-[16px] top-[314px] h-[66px] flex flex-col items-start gap-[20px] z-10"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <h3 className="text-[22px] leading-[27px] font-medium text-white whitespace-nowrap">
                      {project.title}
                    </h3>

                    <a
                      href={project.prototypeUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex flex-row items-center gap-[4px] text-[16px] leading-[19px] font-medium text-white hover:text-[#ff3385] transition-colors"
                    >
                      <span>View Prototype</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                        <path d="M3.5 22h17" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={onViewAll}
        className="flex flex-row justify-center items-center gap-[4px] w-[123px] h-[30px] text-[#94003B] hover:opacity-80 transition-opacity cursor-pointer"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <span className="w-[89px] h-[29px] text-[24px] leading-[29px] font-medium whitespace-nowrap">
          View all
        </span>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <path
            d="M12.5 9L20 16.5L12.5 24"
            stroke="#94003B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
};