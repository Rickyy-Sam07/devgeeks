import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import theme from './theme';
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
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="min-h-screen">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <PortfolioSection />
          <WhyUsAwardsSection />
          <TestimonialsSection />
          <ProcessCtaSection />
          <BlogFooterSection />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
