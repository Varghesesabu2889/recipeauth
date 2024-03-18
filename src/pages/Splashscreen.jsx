import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cook from "../assets/cook-unscreen.gif"
import './SplashScreen.css';

const SplashScreen = ({ onAnimationComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      onAnimationComplete(); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className={`splash-screen ${animationComplete ? 'fade-out' : ''}`}>
      <div className='image'>
      <img src={cook} alt="" className='gifimage' />
      </div>
    </div>
  );
};

export default SplashScreen;
