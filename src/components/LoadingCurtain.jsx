import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import devgeeksTop from '../assets/devgeeks-top.png';
import devgeeksBottom from '../assets/devgeeks-bottom.png';

// Simple curtain container
const CurtainContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 9999,
  backgroundColor: 'transparent', // Make container transparent so website shows through
});

// Top half panel
const TopPanel = styled(Box)(({ progress }) => {
  const moveDistance = progress * 100; // Both use same calculation
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottom: '2px solid #000',
    transform: `translateY(-${moveDistance}vh)`, // Move UP using same distance
    transition: 'none',
    overflow: 'hidden',
    willChange: 'transform',
  };
});

// Bottom half panel  
const BottomPanel = styled(Box)(({ progress }) => {
  const moveDistance = progress * 100; // Identical calculation to top panel
  return {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTop: '2px solid #000',
    transform: `translateY(${moveDistance}vh)`, // Move DOWN using same distance
    transition: 'none',
    overflow: 'hidden',
    willChange: 'transform',
  };
});

// Logo styling
const Logo = styled('img')({
  maxHeight: '80px',
  maxWidth: '300px',
  objectFit: 'contain',
  margin: '1px 0', // Add margin to position closer to separation line
});

// Scroll instruction
const ScrollHint = styled(Box)({
  position: 'fixed',
  bottom: '15%',
  left: '50%',
  transform: 'translateX(-50%)',
  textAlign: 'center',
  zIndex: 10001,
  color: '#000',
  animation: 'bounce 2s infinite',
  
});

// Progress indicator
const ProgressBar = styled(Box)(({ progress }) => ({
  position: 'fixed',
  bottom: '10%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '200px',
  height: '4px',
  backgroundColor: 'rgba(0,0,0,0.2)',
  borderRadius: '2px',
  zIndex: 10001,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: `${progress * 100}%`,
    backgroundColor: '#000',
    borderRadius: '2px',
    transition: 'width 0.1s ease-out',
  },
}));

const LoadingCurtain = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // DON'T change body height - let website scroll naturally
    // The curtain will overlay on top and respond to natural scroll

    // Make main content visible and scrollable from the start
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      // Keep main content in normal flow - NO fixed positioning
      mainContent.style.position = 'static';
      mainContent.style.zIndex = 'auto';
      mainContent.style.opacity = '1'; // FULLY VISIBLE from start
      mainContent.style.pointerEvents = 'none'; // Disable interactions during animation only
      mainContent.style.overflow = 'visible'; // Allow natural scrolling
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300; // Scroll distance for animation
      const newProgress = Math.min(scrollTop / maxScroll, 1);
      
      setProgress(newProgress);

      if (newProgress >= 1) {
        // Just hide curtain and enable interactions
        setIsVisible(false);
        
        if (mainContent) {
          // Only enable interactions - everything else stays normal
          mainContent.style.pointerEvents = 'auto';
        }
        
        onComplete && onComplete();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Just ensure interactions are enabled
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.style.pointerEvents = 'auto';
      }
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <CurtainContainer>
      {/* Top Panel with DevGeeks Top */}
      <TopPanel progress={progress}>
        <Logo src={devgeeksTop} alt="DevGeeks Top" />
      </TopPanel>

      {/* Bottom Panel with DevGeeks Bottom */}
      <BottomPanel progress={progress}>
        <Logo src={devgeeksBottom} alt="DevGeeks Bottom" />
      </BottomPanel>

      {/* Enhanced Scroll Instruction */}
      {progress < 0.8 && (
        <ScrollHint>
          <Typography variant="body1" sx={{ fontWeight: 600, mb: 1, fontSize: '1.1rem' }}>
            Scroll to enter DevGeeks
          </Typography>
          <Typography variant="h3" sx={{ lineHeight: 1 }}>↓</Typography>
        </ScrollHint>
      )}

      {/* Progress Indicator */}
      {progress > 0.1 && progress < 0.95 && (
        <ProgressBar progress={progress} />
      )}
    </CurtainContainer>
  );
};

export default LoadingCurtain;