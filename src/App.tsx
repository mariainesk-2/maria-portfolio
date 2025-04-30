import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Layouts
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetail from './components/portfolio/PortfolioDetail';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />
      },
      {
        path: 'portfolio/:id',
        element: <PortfolioDetail />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
