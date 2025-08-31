import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import '../../stylesheets/LoadingCurtain.scss';

const LoadingCurtain = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.position = 'static';
      mainContent.style.zIndex = 'auto';
      mainContent.style.opacity = '1';
      mainContent.style.pointerEvents = 'none';
      mainContent.style.overflow = 'visible';
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const newProgress = Math.min(scrollTop / maxScroll, 1);
      
      setProgress(newProgress);

      if (newProgress >= 1) {
        setIsVisible(false);
        
        if (mainContent) {
          mainContent.style.pointerEvents = 'auto';
        }
        
        onComplete && onComplete();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.style.pointerEvents = 'auto';
      }
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="curtain-container">
      {/* Top Panel with "DEV" */}
      <div className="top-panel" style={{ transform: `translateY(-${progress * 100}vh)` }}>
        <Typography className="top-text">DEV</Typography>
      </div>

      {/* Bottom Panel with "GEEKS" */}
      <div className="bottom-panel" style={{ transform: `translateY(${progress * 100}vh)` }}>
        <Typography className="bottom-text">GEEKS</Typography>
      </div>

      {/* Enhanced Scroll Instruction */}
      {progress < 0.8 && (
        <div className="scroll-hint">
          <Typography variant="body1" className="hint-text">
            Scroll to enter DevGeeks
          </Typography>
          <Typography variant="h3" className="arrow">↓</Typography>
        </div>
      )}

      {/* Progress Indicator */}
      {progress > 0.1 && progress < 0.95 && (
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress * 100}%` }}></div>
        </div>
      )}
    </div>
  );
};

export default LoadingCurtain;