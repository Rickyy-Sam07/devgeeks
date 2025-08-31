import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Typography, Button, Stack } from '@mui/material';
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import theme from './theme';
import LoadingCurtain from './components/LoadingCurtain';

const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

// Demo content to show after curtain animation
const DemoContent = () => (
  <Box className="min-h-screen p-8">
    <Stack spacing={4} alignItems="center" justifyContent="center" className="min-h-screen">
      <Typography variant="h1" align="center" color="primary.contrastText">
        Welcome to DevGeeks
      </Typography>
      <Typography variant="h4" align="center" color="text.secondary" className="max-w-2xl">
        The curtain animation is now working smoothly!
      </Typography>
      <Typography variant="body1" align="center" color="text.primary" className="max-w-3xl">
        The loading curtain animation has been fixed with proper MUI integration, 
        smooth transitions, and better state management. The scroll-based animation 
        now works seamlessly without conflicts.
      </Typography>
      <Button 
        variant="contained" 
        size="large"
        onClick={() => window.location.reload()}
        sx={{ mt: 4 }}
      >
        Replay Animation
      </Button>
    </Stack>
  </Box>
);

function App() {
  const [curtainComplete, setCurtainComplete] = useState(false);

  const handleCurtainComplete = () => {
    setCurtainComplete(true);
  };

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {!curtainComplete && (
          <LoadingCurtain onComplete={handleCurtainComplete} />
        )}
        {curtainComplete && <DemoContent />}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;