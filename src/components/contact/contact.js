import React, { useEffect, useRef, useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiChevronDown } from 'react-icons/fi';
import { FaLinkedinIn, FaDribbble, FaBehance, FaTwitter } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbydfJu0ni5WOeOMcg9kb7MCRKuCkqLR4fKekrl4Ym7hBTZaVd-yISWge-TuLDAcw31a/exec'; 
    const formBody = new FormData();
    formBody.append('name', formData.name);
    formBody.append('email', formData.email);
    formBody.append('subject', formData.subject);
    formBody.append('message', formData.message);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formBody,
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error connecting to the server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className={`ux-contact-section ${isVisible ? 'in-view' : ''}`} 
      id="contact" 
      ref={sectionRef}
    >
      <div className="contact-bg-glow glow-contact-1"></div>
      <div className="contact-bg-glow glow-contact-2"></div>

      <div className="contact-container">
        <div className="contact-header animate-fade-in">
          <h1 className="premium-title">
            Let's Build Something <span className="ux-gradient-text">Amazing.</span>
          </h1>
          <p className="premium-desc">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="contact-content animate-slide-up delay-1">
          <div className="contact-info-panel">
            <div className="info-card">
              <div className="info-item">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div className="info-text">
                  <h4>Email Me</h4>
                  <a href="mailto:kheemsinghlatwal740@gmail.com">kheemsinghlatwal740@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div className="info-text">
                  <h4>Call Me</h4>
                  <a href="tel:+917037189517">+91 70371 89517</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>Nainital, Uttarakhand</p>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <h3>Connect With Me</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/kheem-singh-latwal-1a6195269" target="_blank" rel="noreferrer" className="social-btn"><FaLinkedinIn /></a>
                <a href="https://www.behance.net/kheemsinghlatwal" target="_blank" rel="noreferrer" className="social-btn"><FaBehance /></a>
                <a href="https://dribbble.com/Kheem76" target="_blank" rel="noreferrer" className="social-btn"><FaDribbble /></a>
                <a href="https://x.com/Kheem96" target="_blank" rel="noreferrer" className="social-btn"><FaTwitter /></a>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="premium-form">
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <div className="select-wrapper">
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Hire">Hire Me</option>
                    <option value="Project">Discuss a Project</option>
                    <option value="Other">Other</option>
                  </select>
                  <FiChevronDown className="select-icon" />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell me about your project..." 
                  rows="5" 
                  required 
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <FiSend className="btn-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;