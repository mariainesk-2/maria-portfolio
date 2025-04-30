import type React from 'react';

interface SkillItemProps {
  number: string;
  title: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ number, title }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-6">
      <h3 className="text-lg font-semibold text-gray-500 mb-1">{number}</h3>
      <h4 className="text-xl font-medium text-navy">{title}</h4>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-light-gray">
      <div className="container mx-auto">
        <div className="mb-12">
          <span className="section-subtitle">Knowledge is Everything</span>
          <h2 className="section-title font-display text-6xl md:text-7xl">
            My<br />Skills.
          </h2>
        </div>

        <div className="flex flex-wrap">
          <SkillItem number="01." title="Digital Design" />
          <SkillItem number="02." title="UX & UI" />
          <SkillItem number="03." title="Illustration" />
          <SkillItem number="04." title="Frontend" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
