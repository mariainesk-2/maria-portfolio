import type React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';

const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find the portfolio item with the matching ID
  const portfolioItem = portfolioData.find(item => item.id === id);

  if (!portfolioItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Project not found</h2>
        <Link
          to="/#work"
          className="btn btn-primary"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 bg-light-gray">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/#work"
          className="inline-block mb-8 text-dark-peach hover:text-peach transition-colors"
        >
          <div className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-2">Back to Portfolio</span>
          </div>
        </Link>

        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-display font-semibold text-navy mb-4">
          {portfolioItem.title}
        </h1>

        {/* Category */}
        <div className="mb-8">
          <span className="inline-block px-4 py-1 bg-dark-peach text-white rounded-full text-sm">
            {portfolioItem.category}
          </span>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src={portfolioItem.image}
            alt={portfolioItem.title}
            className="w-full max-h-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Project Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">About this project</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                {portfolioItem.description || `This project showcases my skills in ${portfolioItem.category}. I focused on creating a design that is both functional and aesthetically pleasing.`}
              </p>
              {portfolioItem.fullDescription && (
                <p className="text-gray-700">
                  {portfolioItem.fullDescription}
                </p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md h-fit">
            <h3 className="text-xl font-semibold mb-4">Project details</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium">{portfolioItem.category}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Tools</p>
                <p className="font-medium">{portfolioItem.tools || 'Adobe Creative Suite, Figma'}</p>
              </div>

              {portfolioItem.client && (
                <div>
                  <p className="text-sm text-gray-500">Client</p>
                  <p className="font-medium">{portfolioItem.client}</p>
                </div>
              )}

              {portfolioItem.year && (
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-medium">{portfolioItem.year}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Images */}
        {portfolioItem.additionalImages && portfolioItem.additionalImages.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">More project images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioItem.additionalImages.map((image, index) => (
                <div key={`${portfolioItem.id}-image-${index}`} className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image}
                    alt={`${portfolioItem.title} - image ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next & Previous Project */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between">
            <Link
              to={`/portfolio/${getPreviousProjectId(id ?? '')}`}
              className="mb-4 sm:mb-0 btn btn-primary"
            >
              Previous Project
            </Link>
            <Link
              to={`/portfolio/${getNextProjectId(id ?? '')}`}
              className="btn btn-primary"
            >
              Next Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions to navigate between projects
const getNextProjectId = (currentId: string): string => {
  const currentIndex = portfolioData.findIndex(item => item.id === currentId);
  const nextIndex = (currentIndex + 1) % portfolioData.length;
  return portfolioData[nextIndex].id;
};

const getPreviousProjectId = (currentId: string): string => {
  const currentIndex = portfolioData.findIndex(item => item.id === currentId);
  const prevIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
  return portfolioData[prevIndex].id;
};

export default PortfolioDetail;
