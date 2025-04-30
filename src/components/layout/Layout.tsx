import type React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-light-gray flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
