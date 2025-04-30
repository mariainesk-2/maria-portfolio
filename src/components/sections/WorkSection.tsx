import type React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';

interface PortfolioItemProps {
  id: string;
  image: string;
  title: string;
  category: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ id, image, title, category }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4 transition-all duration-300">
      <Link to={`/portfolio/${id}`} className="block">
        <div className="group relative overflow-hidden rounded-md shadow-md transition-all duration-300 hover:shadow-xl card">
          <img src={image} alt={title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <div className="text-center text-white p-4">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-300 mt-1">{category}</p>
              <span className="inline-block mt-4 px-3 py-1 bg-dark-peach/80 text-white rounded-full text-sm">
                View Project
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const WorkSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(portfolioData.map(item => item.category)))];

  // Filter the items
  const filteredItems = activeFilter === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeFilter);

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="mb-12">
          <span className="section-subtitle">Some things I've been doing</span>
          <h2 className="section-title font-display text-6xl md:text-7xl">
            Work.
          </h2>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-display font-semibold mb-2">All it is about Design</h3>
          <p className="text-xl text-gray-600">Colors, pixels, frames and code.</p>
          <p className="mt-4 text-gray-700">
            I have been working as a designer for a long time.<br />
            Illustrations, patterns, editorial, large formats, web, apps—you name it.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              className={`mr-3 mb-3 px-4 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? 'bg-dark-peach text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap -mx-4">
          {filteredItems.map((item) => (
            <PortfolioItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
