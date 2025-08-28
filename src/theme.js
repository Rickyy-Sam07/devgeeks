import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F4D4C7',
      light: '#F8E1D6',
      dark: '#E6C2B1',
      contrastText: '#2D2D2D'
    },
    secondary: {
      main: '#C8A8E9',
      light: '#D4B8ED',
      dark: '#B898E5',
      contrastText: '#2D2D2D'
    },
    success: {
      main: '#A8E6CF',
      light: '#B8EBD7',
      dark: '#98E1C7',
      contrastText: '#2D2D2D'
    },
    error: {
      main: '#F8C8DC',
      light: '#FAD4E4',
      dark: '#F6BCD4',
      contrastText: '#2D2D2D'
    },
    text: {
      primary: '#2D2D2D',
      secondary: '#666666',
      disabled: '#999999'
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F8F8'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    },
    common: {
      black: '#2D2D2D',
      white: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: '"Inter", "Playfair Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.3
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3
    },
    h4: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.6
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          padding: '12px 32px',
          fontWeight: 500,
          fontSize: '0.875rem',
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }
        },
        containedPrimary: {
          backgroundColor: '#2D2D2D',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#1A1A1A'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '3px solid #2D2D2D'
        }
      }
    }
  }
});

export default theme;
