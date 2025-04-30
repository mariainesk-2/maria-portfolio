import type React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <img
              src="https://ext.same-assets.com/876827235/2214279269.jpeg"
              alt="Maria Ines"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <span className="section-subtitle">Know Me More</span>
              <h2 className="section-title font-display text-6xl md:text-7xl">
                About<br />me.
              </h2>
            </div>
            <div className="text-gray-700 space-y-4 max-w-2xl">
              <p>
                I want to create digital experiences that inspire and engage users. From
                designing intuitive interfaces to crafting a great brand, I'm passionate about
                bringing ideas to life.
              </p>
              <p>
                My goal is to create designs that not only look great but also function seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
