import React, { useState } from 'react';
import { Header, Hero, About, Projects, AllProjects } from './components';
import { portfolioData } from './data/portfolio.data';

const App: React.FC = () => {
  const { brandName, navItems, hero, about, projects } = portfolioData;
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');

  const handleOpenAllProjects = () => {
    setCurrentPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1D1D1D] text-white selection:bg-[#94003B] selection:text-white overflow-x-hidden pb-[103px]">
      <Header
        brandName={brandName}
        navItems={navItems}
        onNavigate={setCurrentPage}
      />

      <main>
        {currentPage === 'home' ? (
          <>
            <Hero
              greeting={hero.greeting}
              role={hero.role}
              tagline={hero.tagline}
              avatarUrl={hero.avatarUrl}
              contact={hero.contact}
            />

            {/* فاصله 184 پیکسلی دقیق بین هیرو و بخش درباره من */}
            <div className="mt-20 lg:mt-[184px] px-6 lg:px-0">
              <About data={about} />
            </div>

            {/* فاصله 122 پیکسلی دقیق بین درباره من و پروژه‌ها */}
            <div className="mt-20 lg:mt-[122px] px-6 lg:px-0">
              <Projects
                projects={projects}
                onViewAll={handleOpenAllProjects}
              />
            </div>
          </>
        ) : (
          <AllProjects projects={projects} onBackHome={handleBackHome} />
        )}
      </main>
    </div>
  );
};

export default App;