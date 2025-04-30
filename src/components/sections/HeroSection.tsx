import type React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-16">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="max-w-xl">
              <h3 className="font-normal text-lg mb-1 text-gray-600">Hey there,</h3>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl mb-3 text-peach">
                I'm<br />Maria.
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 font-light text-gray-700">
                A Digital Designer with a focus on Branding and UX/UI.
              </h2>
              <p className="text-gray-500 font-mono text-sm md:text-base">
                &lt; An up-and-coming Frontend Developer /&gt;
              </p>

              <div className="mt-10">
                <button
                  className="inline-block"
                  onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-bounce"
                  >
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#d2a294" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://ext.same-assets.com/876827235/4105212796.jpeg"
              alt="Hand gesture"
              className="w-2/3 md:w-3/4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
