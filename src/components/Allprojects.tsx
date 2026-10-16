import React from 'react';
import { IProject } from '../interfaces/portfolio.interface';

interface AllProjectsProps {
  projects: IProject[];
  onBackHome: () => void;
}

export const AllProjects: React.FC<AllProjectsProps> = ({
  projects,
  onBackHome,
}) => {
  return (
    <section className="max-w-[1200px] mx-auto pt-[58px] px-6 lg:px-0 flex flex-col items-start gap-[62px]">
      <div className="flex flex-col items-start gap-[62px] w-full sm:w-[392px]">
        <div className="flex flex-row items-center gap-[8px] h-[21px] text-[14px] leading-[21px] font-normal">
          <button
            onClick={onBackHome}
            className="text-white hover:text-[#FF0066] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span className="text-white">/</span>
          <span className="text-[#FF0066]">Projects</span>
        </div>

        <div className="flex flex-col items-start gap-[12px] w-full">
          <h1 className="text-[26px] leading-[34px] font-bold text-white">
            My Projects
          </h1>
          <p className="text-[14px] leading-[34px] font-normal text-[#E0E0E0] whitespace-nowrap">
            Design projects across various platforms and industries.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-y-[30px] gap-x-[30px] w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full max-w-[380px] h-[400px] mx-auto rounded-[36px] overflow-hidden bg-[#3B1022] group cursor-pointer shadow-lg"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />

            <div
              className="absolute left-[20px] right-[16px] top-[314px] h-[66px] flex flex-col items-start gap-[20px] z-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <h3 className="text-[22px] leading-[27px] font-medium text-white whitespace-nowrap">
                {project.title}
              </h3>

              <a
                href={project.prototypeUrl}
                className="flex flex-row items-center gap-[4px] text-[16px] leading-[19px] font-medium text-white hover:underline hover:text-[#FF0066] transition-colors"
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
          </div>
        ))}
      </div>
    </section>
  );
};