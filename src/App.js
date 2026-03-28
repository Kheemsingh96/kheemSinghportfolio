import React, { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about us/about';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Popup from './components/popup/popup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="App">
      <Header onHireClick={togglePopup} />
      <Hero />
      <About />
      <Services onHireClick={togglePopup} />
      <Portfolio />
      <Contact />
      
      <Popup isOpen={isPopupOpen} onClose={togglePopup} />
    </div>
  );
}

export default App;