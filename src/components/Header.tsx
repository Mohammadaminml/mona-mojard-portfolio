import React from 'react';
import { INavItem } from '../interfaces/portfolio.interface';

interface HeaderProps {
  brandName: string;
  navItems: INavItem[];
  onNavigate?: (page: 'home' | 'projects') => void;
}

export const Header: React.FC<HeaderProps> = ({
  brandName,
  navItems,
  onNavigate,
}) => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string
  ) => {
    if (!onNavigate) return;
    if (label.toLowerCase() === 'home') {
      e.preventDefault();
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (label.toLowerCase() === 'projects') {
      e.preventDefault();
      onNavigate('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className="w-full h-[76px] sticky top-0 z-50 backdrop-blur-[2px]"
      style={{
        background:
          'linear-gradient(90deg, rgba(74, 74, 74, 0.6) 0%, rgba(12, 12, 12, 0.6) 100%)',
      }}
    >
      <div className="max-w-[1440px] h-full mx-auto px-6 lg:px-[120px] flex justify-between items-center">
        <div
          onClick={() => onNavigate && onNavigate('home')}
          className="text-[42px] leading-[56px] font-normal text-white select-none cursor-pointer"
          style={{ fontFamily: "'Handlee', cursive" }}
        >
          {brandName}
        </div>
        <nav className="flex items-center gap-[24px]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.label)}
              className="text-[16px] leading-[24px] font-normal text-white hover:text-[#94003B] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};