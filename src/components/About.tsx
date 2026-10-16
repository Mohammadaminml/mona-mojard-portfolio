import React from 'react';
import { IAboutData } from '../interfaces/portfolio.interface';

interface AboutProps {
  data: IAboutData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section
      className="max-w-[1200px] mx-auto p-[32px] rounded-[32px] border border-white/20 backdrop-blur-[2px] flex flex-col items-start gap-[24px] box-border"
      style={{
        background:
          'linear-gradient(180deg, rgba(152, 152, 152, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)',
      }}
    >
      <div className="flex flex-col items-start gap-[32px] w-full">
        <div className="flex flex-col items-start gap-[12px] w-full">
          <h2 className="text-[18px] leading-[27px] font-bold text-[#94003B]">
            {data.sectionTitle}
          </h2>
          <p className="text-[20px] leading-[34px] font-bold text-white">
            {data.headline}
          </p>
        </div>

        <div className="text-[16px] leading-[28px] font-normal text-[#E0E0E0] space-y-1 w-full">
          {data.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-white/15" />

      <div className="w-full flex flex-col gap-[24px]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-[128px] w-full">
          <div className="flex items-start gap-[16px] w-full md:w-[504px]">
            <span className="text-[16px] leading-[24px] font-semibold text-white">
              {data.details[0]?.label}
            </span>
            <span className="text-[16px] leading-[24px] font-normal text-[#C0C0C0]">
              {data.details[0]?.value}
            </span>
          </div>
          <div className="flex items-start gap-[16px] w-full md:w-[504px]">
            <span className="text-[16px] leading-[24px] font-semibold text-white">
              {data.details[1]?.label}
            </span>
            <span className="text-[16px] leading-[24px] font-normal text-[#C0C0C0]">
              {data.details[1]?.value}
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-[128px] w-full">
          <div className="flex items-start gap-[16px] w-full md:w-[504px]">
            <span className="text-[16px] leading-[24px] font-semibold text-white">
              {data.details[2]?.label}
            </span>
            <span className="text-[16px] leading-[24px] font-normal text-[#C0C0C0]">
              {data.details[2]?.value}
            </span>
          </div>
          <div className="flex items-start gap-[16px] w-full md:w-[504px]">
            <span className="text-[16px] leading-[24px] font-semibold text-white">
              {data.details[3]?.label}
            </span>
            <span className="text-[16px] leading-[24px] font-normal text-[#C0C0C0]">
              {data.details[3]?.value}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};