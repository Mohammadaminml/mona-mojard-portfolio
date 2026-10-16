import React from 'react';
import { IContactInfo } from '../interfaces/portfolio.interface';

interface HeroProps {
  greeting: string;
  role: string;
  tagline: string;
  avatarUrl?: string;
  contact: IContactInfo;
}

export const Hero: React.FC<HeroProps> = ({
  greeting,
  role,
  tagline,
  contact,
}) => {
  return (
    <section
      id="home"
      className="relative max-w-[1440px] mx-auto px-6 lg:px-[120px] pt-[24px] pb-[24px] lg:h-[448px] flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-[125px] isolate"
    >
      <div className="flex flex-col items-start gap-12 lg:gap-[120px] w-full lg:w-[675px] z-20">
        <div className="flex flex-col items-start gap-[24px] w-full">
          <p className="text-[24px] leading-[36px] font-normal text-white">
            {greeting}
          </p>
          <h1 className="text-[32px] leading-[48px] font-bold text-white">
            I'm a <span className="text-[#94003B]">{role}</span>
          </h1>
          <p className="text-[24px] leading-[36px] font-normal text-white">
            {tagline}
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 lg:gap-[42px] w-full min-h-[73px]">
          <div className="flex flex-col items-start gap-[16px] w-[272px]">
            <span className="text-[20px] leading-[30px] font-semibold text-white">
              Email
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-[18px] leading-[27px] font-normal text-[#C0C0C0] hover:text-white transition"
            >
              {contact.email}
            </a>
          </div>

          <div className="hidden sm:block w-px h-[73px] bg-white/20 shrink-0" />

          <div className="flex flex-col items-start gap-[16px] w-[135px]">
            <span className="text-[20px] leading-[30px] font-semibold text-white">
              Phone
            </span>
            <a
              href={`tel:${contact.phone}`}
              className="text-[18px] leading-[27px] font-normal text-[#C0C0C0] hover:text-white transition whitespace-nowrap"
            >
              {contact.phone}
            </a>
          </div>

          <div className="hidden sm:block w-px h-[73px] bg-white/20 shrink-0" />

          <div className="flex flex-col items-start gap-[16px] w-[87px]">
            <span className="text-[20px] leading-[30px] font-semibold text-white">
              Location
            </span>
            <span className="text-[18px] leading-[27px] font-normal text-[#C0C0C0]">
              {contact.location}
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] shrink-0 z-10 flex items-center justify-center">
        <div
          className="absolute w-[140px] h-[140px] left-[25px] top-[160px] bg-[#94003B] blur-[90px] pointer-events-none z-0"
          style={{ transform: 'rotate(28.8deg)' }}
        />

        <div
          className="absolute w-[150px] h-[150px] right-[30px] top-[70px] bg-[#FFFFFF]/80 blur-[95px] pointer-events-none z-0"
          style={{ transform: 'rotate(28.8deg)' }}
        />

        <img
          src="/images/mona-profile.png"
          alt="Mona Haffar Mojarrad"
          className="relative z-10 w-full h-full object-contain"
          style={{
            WebkitMaskImage:
              'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.52) 38%, rgba(0,0,0,1) 100%)',
            maskImage:
              'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.52) 38%, rgba(0,0,0,1) 100%)',
          }}
        />
      </div>
    </section>
  );
};