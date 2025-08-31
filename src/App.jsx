import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import theme from './theme';
import LoadingCurtain from './components/LoadingCurtain';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import WhyUsAwardsSection from './components/WhyUsAwardsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProcessCtaSection from './components/ProcessCtaSection';
import BlogFooterSection from './components/BlogFooterSection';

const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

function App() {
  const [curtainComplete, setCurtainComplete] = useState(false); // Enable curtain animation
  const [isLoading, setIsLoading] = useState(true); // Show loading initially

  const handleCurtainComplete = () => {
    setCurtainComplete(true);
    
    // DON'T reset scroll position - let user continue from where they are
    setIsLoading(false);
  };

  // Memoize main content to prevent unnecessary re-renders during animation
  const mainContent = useMemo(() => (
    <Box 
      id="main-content" 
      className="min-h-screen"
      sx={{ 
        opacity: 1, // Always visible - curtain will handle visibility
      }}
    >
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <WhyUsAwardsSection />
      <TestimonialsSection />
      <ProcessCtaSection />
      <BlogFooterSection />
    </Box>
  ), []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {!curtainComplete && (
          <LoadingCurtain onComplete={handleCurtainComplete} />
        )}
        {mainContent}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;