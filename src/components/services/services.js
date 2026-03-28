import React, { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiPhoneCall, FiStar, FiMail, FiSmartphone } from 'react-icons/fi';
import './services.css';
import webMockup from '../../assets/images/movezy.png';
import mobileMockup from '../../assets/images/zappy.png';

const Services = ({ onHireClick }) => {
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
      { threshold: 0.15 }
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
      className={`ux-bento-services ${isVisible ? 'in-view' : ''}`} 
      id="services" 
      ref={sectionRef}
    >
      <div className="ux-bg-glow glow-5"></div>
      <div className="ux-bg-glow glow-6"></div>

      <div className="ux-container">
        <div className="bento-header animate-fade-in">
          <h1 className="header-title">
            Crafting Digital Experiences with <span className="ux-gradient-text">Precision & Passion.</span>
          </h1>
          <p className="header-desc">
           As a UI/UX Designer, I specialize in transforming complex ideas into intuitive, user-centered digital experiences. Through research, wireframing, and thoughtful interface design, I create solutions that are both functional and visually engaging.
          </p>
        </div>

        <div className="bento-grid-container">
          
          <div className="bento-card card-wide-1 animate-slide-up delay-1">
            <div className="card-content">
              <h3>End-to-End UI/UX Design</h3>
              <p>Delivering intuitive, accessible, and visually stunning digital interfaces that keep users engaged and drive conversions.</p>
              <button className="premium-btn">LEARN MORE</button>
            </div>
            <div className="card-visual">
              <img src={webMockup} alt="Web Design Mockup" className="mockup-img" />
            </div>
          </div>

          <div className="bento-card card-square-1 animate-slide-up delay-2">
            <div className="card-content centered-content">
              <h3>Available For Freelance</h3>
              <p>Taking on freelance projects globally. Let's collaborate and build something amazing together.</p>
              <button className="premium-btn freelance-btn" onClick={onHireClick}>HIRE FOR FREELANCE</button>
            </div>
          </div>

          <div className="bento-card card-tall gradient-bg animate-slide-up delay-3">
            <div className="card-content tall-card-content">
              <div className="icon-circle">
                <FiPhoneCall />
              </div>
              <h3 className="tall-card-heading">Let's Work Together</h3>
              <p className="tall-card-para">Open for full-time roles and freelance opportunities. Let's discuss how I can add value to your next big project.</p>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <FiMail className="inline-icon" />
                  <h4>kheemsinghlatwal740@gmail.com</h4>
                </div>
                <div className="contact-info-item">
                  <FiSmartphone className="inline-icon" />
                  <h4>+91 7037189517</h4>
                </div>
              </div>

              <button className="premium-btn btn-dark hire-now-btn" onClick={onHireClick}>HIRE ME NOW!</button>
            </div>
          </div>

          <div className="bento-card card-square-2 grid-bg animate-slide-up delay-4">
            <div className="card-content centered-content">
              <h2 className="rating-text">30+</h2>
              <h3 className="rating-heading">Projects Delivered</h3>
              <p className="rating-para">Successfully delivered thirty-plus projects to satisfied clients globally with top-notch design quality.</p>
              <div className="stars">
                <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
              </div>
            </div>
          </div>

          <div className="bento-card card-wide-2 animate-slide-up delay-5">
            <div className="card-content">
              <h3>Responsive Web & Mobile Apps</h3>
              <p>Pixel-perfect, scalable designs crafted for every device, ensuring a seamless experience across all platforms.</p>
              <a href="#portfolio" className="premium-btn btn-outline" style={{ textDecoration: 'none' }}>
  VIEW PROJECTS <FiArrowRight className="btn-icon" />
</a>
            </div>
            <div className="card-visual">
              <img src={mobileMockup} alt="Mobile App Mockup" className="mockup-img phone-img" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;