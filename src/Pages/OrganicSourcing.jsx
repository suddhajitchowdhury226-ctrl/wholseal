import './OrganicSourcing.scss';
import { useEffect, useState } from 'react';

const OrganicSourcing = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="organic-sourcing-section">
      <div 
        className="sourcing-background"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      ></div>
      <div className="sourcing-overlay"></div>
      <div className="container">
        <div className="sourcing-content">
          <h2 className="sourcing-title">Organic and Ethical Sourcing</h2>
          <div className="sourcing-underline"></div>
          <p className="sourcing-description">
            Quality is the foundation of our work, which is why we partner with certified organic farmers and responsible wild harvesters. We are committed to sustainability and do not source endangered herbs like Echinacea, Goldenseal, or Ginseng from the wild. Our carefully chosen growers and wild crafters share our dedication to ethical harvesting practices and environmental conservation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrganicSourcing;