import type React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('home');

  // Update active link based on path
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveLink('home');
    } else if (location.pathname === '/portfolio' || location.pathname.startsWith('/portfolio/')) {
      setActiveLink('portfolio');
    } else if (location.pathname === '/about') {
      setActiveLink('about');
    }
  }, [location.pathname]);

  // For homepage, handle smooth scrolling to sections
  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 pt-2 pb-2 px-4 md:px-8 bg-light-gray/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-lg font-display text-dark-peach font-medium"
        >
          Maria
        </Link>

        <nav className="flex space-x-6">
          <Link
            to="/"
            className={`text-base uppercase transition-colors ${activeLink === 'home' ? 'text-dark-peach font-medium' : 'text-navy hover:text-dark-peach'}`}
            onClick={() => {
              setActiveLink('home');
              if (location.pathname === '/') {
                handleScrollToSection('home');
              }
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-base uppercase transition-colors ${activeLink === 'about' ? 'text-dark-peach font-medium' : 'text-navy hover:text-dark-peach'}`}
            onClick={() => setActiveLink('about')}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className={`text-base uppercase transition-colors ${activeLink === 'portfolio' ? 'text-dark-peach font-medium' : 'text-navy hover:text-dark-peach'}`}
            onClick={() => setActiveLink('portfolio')}
          >
            All Work
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
