import type React from 'react';

// Section Components
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import WorkSection from '../components/sections/WorkSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
    </main>
  );
};

export default HomePage;
