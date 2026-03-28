import React from 'react';
import { FaWhatsapp, FaEnvelope, FaTimes } from 'react-icons/fa';
import './popup.css';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="hire-modal-overlay" onClick={onClose}>
      <div className="hire-modal-card scale-up" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>
        <div className="modal-badge">Available for Work</div>
        <h3 className="modal-title">Let's Work Together</h3>
        <p className="modal-subtitle">Choose your preferred way to connect and let's build something amazing.</p>
        
        <div className="hire-options">
          <a href="https://wa.me/917037189517" target="_blank" rel="noreferrer" className="hire-option-card whatsapp">
            <div className="opt-icon"><FaWhatsapp /></div>
            <div className="opt-text">
              <span>WhatsApp</span>
              <p>+91 7037189517</p>
            </div>
          </a>

          <a href="mailto:kheemsinghlatwal740@gmail.com" className="hire-option-card email">
            <div className="opt-icon"><FaEnvelope /></div>
            <div className="opt-text">
              <span>Email Me</span>
              <p>kheemsinghlatwal740@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;