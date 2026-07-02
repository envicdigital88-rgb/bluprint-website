import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B3D5F', // navy
      light: '#1565C0', // blue
      dark: '#083347',
    },
    secondary: {
      main: '#1565C0', // logo blue
      dark: '#0B3D5F',
      light: '#4FC3F7',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A', // ink
      secondary: 'rgba(26, 26, 26, 0.7)',
    },
    divider: 'rgba(11, 61, 95, 0.1)',
    info: {
      main: '#4FC3F7', // cyan
      light: '#81D4FA',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 1.06,
      '@media (max-width:900px)': {
        fontSize: '3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    caption: {
      fontFamily: '"Roboto Mono", monospace',
      fontSize: '0.6875rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          textTransform: 'uppercase',
          fontWeight: 700,
          letterSpacing: '0.18em',
          fontSize: '0.75rem',
          fontFamily: '"Roboto Mono", monospace',
          padding: '12px 32px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        },
        contained: {
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 20px 30px rgba(0, 0, 0, 0.15)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            transition: 'all 0.3s ease',
            '&:hover fieldset': {
              borderColor: '#0B3D5F',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0B3D5F',
            },
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '1280px',
          },
        },
      },
    },
  },
})

export default theme
