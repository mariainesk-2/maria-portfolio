import type React from 'react';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <span className="section-subtitle">Get To Know Me</span>
            <h1 className="section-title font-display text-5xl md:text-6xl">
              About Me
            </h1>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16">
            <div className="w-full md:w-1/3">
              <img
                src="https://ext.same-assets.com/876827235/2214279269.jpeg"
                alt="Maria Ines"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-display font-semibold mb-4 text-navy">Hello, I'm Maria</h2>
              <div className="prose max-w-none space-y-4 text-gray-700">
                <p className="text-lg">
                  I'm a Digital Designer with a focus on Branding and UX/UI, currently expanding my skills as a Frontend Developer.
                </p>
                <p>
                  My passion for design started early, and over the years I've had the opportunity to work across various disciplines
                  including graphic design, illustration, editorial design, and digital interfaces.
                </p>
                <p>
                  I believe in creating digital experiences that inspire and engage users. From designing intuitive interfaces to
                  crafting a great brand, I'm passionate about bringing ideas to life. My goal is to create designs that not only
                  look great but also function seamlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="my-16">
            <h2 className="text-3xl font-display font-semibold mb-6 text-navy">My Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-dark-peach">Digital Design</h3>
                <p className="text-gray-700 mb-4">
                  I create compelling visual designs for digital platforms that communicate effectively while looking beautiful.
                  My approach combines aesthetic principles with strategic thinking to achieve business objectives.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Brand Identity & Guidelines</li>
                  <li>Social Media Graphics</li>
                  <li>Digital Marketing Materials</li>
                  <li>Presentation Design</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-dark-peach">UX & UI Design</h3>
                <p className="text-gray-700 mb-4">
                  I design user-centered interfaces that are intuitive, accessible, and enjoyable to use. My process starts with
                  understanding user needs and continues through wireframing, prototyping, and visual design.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>User Research & Personas</li>
                  <li>Wireframing & Prototyping</li>
                  <li>Interface Design</li>
                  <li>Usability Testing</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-dark-peach">Illustration</h3>
                <p className="text-gray-700 mb-4">
                  I create custom illustrations that add personality and clarity to projects. My illustration style can be adapted
                  to fit different brand voices and communication needs.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Digital Illustration</li>
                  <li>Icon Design</li>
                  <li>Editorial Illustration</li>
                  <li>Character Design</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-dark-peach">Frontend Development</h3>
                <p className="text-gray-700 mb-4">
                  As an up-and-coming frontend developer, I'm building my skills to bridge the gap between design and implementation.
                  I believe that understanding code makes me a better designer.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>HTML & CSS</li>
                  <li>JavaScript & React</li>
                  <li>Responsive Web Design</li>
                  <li>Design System Implementation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="my-16">
            <h2 className="text-3xl font-display font-semibold mb-6 text-navy">Work Experience</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-dark-peach pl-6 pb-2">
                <div className="mb-2">
                  <span className="text-sm bg-dark-peach text-white px-2 py-1 rounded-md inline-block">2021 - Present</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Senior UI/UX Designer</h3>
                <h4 className="text-lg text-gray-600 mb-2">Creative Agency International</h4>
                <p className="text-gray-700">
                  Leading the design of user interfaces for web and mobile applications. Collaborating with cross-functional teams
                  to create intuitive and visually appealing digital experiences. Managing client relationships and presenting design concepts.
                </p>
              </div>

              <div className="border-l-4 border-dark-peach pl-6 pb-2">
                <div className="mb-2">
                  <span className="text-sm bg-dark-peach text-white px-2 py-1 rounded-md inline-block">2018 - 2021</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Brand Designer</h3>
                <h4 className="text-lg text-gray-600 mb-2">Design Studio Co.</h4>
                <p className="text-gray-700">
                  Created visual identities and brand guidelines for various clients. Designed marketing materials, social media graphics,
                  and advertising campaigns. Collaborated with marketing teams to ensure brand consistency across all touchpoints.
                </p>
              </div>

              <div className="border-l-4 border-dark-peach pl-6 pb-2">
                <div className="mb-2">
                  <span className="text-sm bg-dark-peach text-white px-2 py-1 rounded-md inline-block">2016 - 2018</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Graphic Designer</h3>
                <h4 className="text-lg text-gray-600 mb-2">Media Publishing Ltd.</h4>
                <p className="text-gray-700">
                  Designed editorial layouts for print and digital publications. Created illustrations and infographics to complement
                  written content. Collaborated with editors and writers to develop visual storytelling concepts.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="my-16">
            <h2 className="text-3xl font-display font-semibold mb-6 text-navy">Education</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-dark-peach pl-6 pb-2">
                <div className="mb-2">
                  <span className="text-sm bg-dark-peach text-white px-2 py-1 rounded-md inline-block">2022 - 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Frontend Web Development</h3>
                <h4 className="text-lg text-gray-600 mb-2">Tech Academy Online</h4>
                <p className="text-gray-700">
                  Certificate in modern web development focusing on HTML, CSS, JavaScript, and React.
                </p>
              </div>

              <div className="border-l-4 border-dark-peach pl-6 pb-2">
                <div className="mb-2">
                  <span className="text-sm bg-dark-peach text-white px-2 py-1 rounded-md inline-block">2012 - 2016</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Bachelor of Design</h3>
                <h4 className="text-lg text-gray-600 mb-2">University of Creative Arts</h4>
                <p className="text-gray-700">
                  Graduated with honors. Specialized in Visual Communication with a focus on Digital Design and Branding.
                </p>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="my-16">
            <h2 className="text-3xl font-display font-semibold mb-6 text-navy">Tools & Technologies</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="font-medium text-dark-peach">Design</h3>
                <p className="text-gray-700 text-sm">Figma, Adobe XD</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="font-medium text-dark-peach">Graphics</h3>
                <p className="text-gray-700 text-sm">Photoshop, Illustrator</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="font-medium text-dark-peach">Motion</h3>
                <p className="text-gray-700 text-sm">After Effects, Principle</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="font-medium text-dark-peach">3D</h3>
                <p className="text-gray-700 text-sm">Blender, Cinema 4D</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="font-medium text-dark-peach">Frontend</h3>
                <p className="text-gray-700 text-sm">HTML, CSS, JavaScript</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="font-medium text-dark-peach">Frameworks</h3>
                <p className="text-gray-700 text-sm">React, Tailwind CSS</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="font-medium text-dark-peach">CMS</h3>
                <p className="text-gray-700 text-sm">WordPress, Webflow</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <h3 className="font-medium text-dark-peach">Version Control</h3>
                <p className="text-gray-700 text-sm">Git, GitHub</p>
              </div>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="my-16">
            <h2 className="text-3xl font-display font-semibold mb-6 text-navy">When I'm Not Designing</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <svg className="w-12 h-12 mx-auto mb-3 text-dark-peach" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM20 15C20 16.1 19.1 17 18 17H13V19H16V21H8V19H11V17H6C4.9 17 4 16.1 4 15C4 14.36 4.27 13.78 4.69 13.37C5.13 12.94 5.73 12.67 6.4 12.57C7.07 12.47 7.76 12.59 8.39 12.92C9.01 13.24 9.55 13.74 9.92 14.36C10.01 14.5 10.09 14.65 10.16 14.81C10.27 14.94 10.42 15 10.58 15H13.42C13.58 15 13.73 14.94 13.84 14.81C13.91 14.65 13.99 14.5 14.08 14.36C14.45 13.74 14.99 13.24 15.61 12.92C16.24 12.59 16.93 12.47 17.6 12.57C18.27 12.67 18.87 12.94 19.31 13.37C19.73 13.78 20 14.36 20 15Z" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">Hiking</h3>
                <p className="text-gray-700">
                  I love exploring nature trails and mountains whenever I get the chance. The outdoors helps me clear my mind and find new inspiration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <svg className="w-12 h-12 mx-auto mb-3 text-dark-peach" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">Reading</h3>
                <p className="text-gray-700">
                  I'm an avid reader of design books, science fiction, and philosophy. Reading helps me gain new perspectives and improve my storytelling.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <svg className="w-12 h-12 mx-auto mb-3 text-dark-peach" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10 21C12.21 21 14 19.21 14 17V7H18V3H12Z" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">Music</h3>
                <p className="text-gray-700">
                  I play guitar and piano in my free time. Music helps me relax and often influences my creative process and design rhythms.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="my-16 text-center">
            <h2 className="text-3xl font-display font-semibold mb-4 text-navy">Let's Work Together</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a
              href="https://www.linkedin.com/in/maria-ines-kristiansen/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn btn-primary px-8 py-3 text-lg"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
