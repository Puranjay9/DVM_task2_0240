import React, { useState, useEffect } from 'react';
import './preloader.css';

const Preloader = ({ onLoad }) => {
  const [progress, setProgress] = useState(0);
  const [loading , setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1));
    }, 15);

    if (progress === 100) {
      clearInterval(interval);
      setLoading(true);
      onLoad();
    }

    return () => clearInterval(interval);
  }, [progress, onLoad]);

  return (
    <div className={`preloader-container ${loading ? 'active' : ''}`}>
        <div className='box'>
      <div className="preloader-text">{`${progress}%`}</div>
      </div>
    </div>
  );
};

export default Preloader;
