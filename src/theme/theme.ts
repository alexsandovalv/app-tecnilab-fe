import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Apple Style: Negro puro para acciones principales
    },
    secondary: {
      main: '#0076DF', // Azul enlace clásico
    },
    background: {
      default: '#F5F5F7', // Gris Apple muy suave
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none', // Evitar mayúsculas forzadas
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: '#0076DF',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#0066CC',
            },
          },
        },
      ],
    },
  },
});

export default theme;
