import React, { useEffect, useRef, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { FaBehance } from 'react-icons/fa';

import img1 from '../../assets/images/Home.png';
import img2 from '../../assets/images/portfolio 2.png';
import img3 from '../../assets/images/portfolio 3.png';
import img4 from '../../assets/images/portfolio 4.png';
import img5 from '../../assets/images/portfolio 5.png';
import img6 from '../../assets/images/portfolio 1.jpg';

import './portfolio.css';

const portfolioData = [
  {
    id: 1,
    title: "Zappy Quick commerce",
    description: "Zappy is India’s fastest grocery delivery app designed to bring everyday essentials to your doorstep in just 10 minutes. ",
    img: img1,
    behanceLink: "https://www.behance.net/gallery/238087629/Zappy-Indias-Quickest-Grocery-Delivery-App",
    liveLink: "#"
  },
  {
    id: 2,
    title: "Moverzy Moving Partner",
    description: "Moverzy is a professional Mover & Packers service offering reliable and affordable relocation solutions globally. ",
    img: img2,
    behanceLink: "https://www.behance.net/gallery/231978345/Moverzy-Your-Reliable-Moving-Partner",
    liveLink: "#"
  },
  {
    id: 3,
    title: "Rupexa Crypto Platform",
    description: "Crypto App is a sleek and intuitive platform to track your crypto portfolio, monitor real-time market prices",
    img: img3,
    behanceLink: "https://www.behance.net/gallery/231140467/RUPEXA-Seamless-Crypto-Trading-Made-Easy",
    liveLink: "#"
  },
  {
    id: 4,
    title: "Customer Support Website",
    description: "Fast, reliable customer support delivering seamless assistance, quick resolutions, and improved customer satisfaction",
    img: img4,
    behanceLink: "#",
    liveLink: "#"
  },
  {
    id: 5,
    title: "Quickbuy E -Commerce App",
    description: "Quickbuy is designed to be an easy-to-use e-commerce platform that simplifies online shopping for users with a user-friendly interface ",
    img: img5,
    behanceLink: "#",
    liveLink: "#"
  },
  {
    id: 6,
    title: "Smart Home Control",
    description: "Intuitive IoT interface for connected living, prioritizing accessibility and ease of use.",
    img: img6,
    behanceLink: "#",
    liveLink: "#"
  }
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      className={`ux-premium-portfolio ${isVisible ? 'in-view' : ''}`} 
      id="portfolio" 
      ref={sectionRef}
    >
      <div className="portfolio-bg-glow glow-port-1"></div>
      <div className="portfolio-bg-glow glow-port-2"></div>

      <div className="portfolio-container">
        <div className="premium-header animate-fade-in">
          <h1 className="premium-title">
            Explore My Best <span className="ux-gradient-text">UI/UX Projects</span>
          </h1>
          <p className="premium-desc">
            A selection of UI/UX projects where I worked on understanding user needs, simplifying complex ideas, and designing intuitive digital experiences that are easy to use and visually meaningful.
          </p>
        </div>

        <div className="premium-portfolio-grid animate-slide-up delay-1">
          {portfolioData.map((project) => (
            <div key={project.id} className="premium-project-card">
              <div className="card-image-wrapper">
                <img src={project.img} alt={project.title} className="card-img" />
              </div>
              
              <div className="card-content-wrapper">
                <div className="card-header-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>
                
                <div className="card-action-links">
                  <a href={project.behanceLink} className="action-btn behance-btn">
                    <FaBehance className="btn-icon" /> Behance
                  </a>
                  <a href={project.liveLink} className="action-btn live-btn">
                    Live Demo <FiExternalLink className="btn-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;