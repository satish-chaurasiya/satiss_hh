import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { usePortfolioData } from './services/portfolioService';

function App() {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!data) {
    return <ErrorMessage message="No portfolio data available" />;
  }

  return (
    <div className="min-vh-100 bg-light">
      <Header data={data.header} />
      <main>
        <Hero data={data.hero} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Contact data={data.contact} />
      </main>
    </div>
  );
}

export default App;