'use client';

import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function HeroSection() {
  const t = useTranslations('HomePage');

  return (
    <Box
      sx={{
        bgcolor: '#f4f3f6',
        color: '#1d1d1f',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 0 }
      }}
    >
      {/* Imagen de fondo con fondo removido */}
      <Box
        component="img"
        src="https://tecnilab.pe/wp-content/uploads/2022/07/mixroto.png"
        alt="Apple Repair Background"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
          height: { xs: '50%', sm: '60%', md: '70%' },
          objectFit: 'contain',
          objectPosition: 'bottom center',
          mixBlendMode: 'multiply',
          opacity: 0.9,
          zIndex: 0,
          userSelect: 'none',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ zIndex: 1, position: 'relative' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} sx={{ mt: { xs: -2, md: -6 } }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: 'clamp(2.2rem, 8vw, 3.1rem)',
                    sm: 'clamp(3rem, 6vw, 4.1rem)',
                    md: 'clamp(3.6rem, 5vw, 4.8rem)',
                    lg: 'clamp(4.3rem, 4.2vw, 5.4rem)'
                  },
                  fontWeight: 600,
                  lineHeight: { xs: 1.1, md: 1.05 },
                  mb: 3,
                  letterSpacing: { xs: '-0.025em', md: '-0.035em' },
                  color: '#1d1d1f',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "SF Pro Display", sans-serif',
                  maxWidth: { xs: '100%', md: '560px', lg: '620px' },
                  overflowWrap: 'anywhere',
                  wordBreak: 'break-word',
                  textWrap: 'balance'
                }}
              >
                {t('heroTitle')}
              </Typography>
              <Typography
                variant="h5"
                sx={{ 
                  color: '#424245', 
                  mb: 6, 
                  fontWeight: 400, 
                  lineHeight: 1.4,
                  width: '100%',
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
                  overflowWrap: 'anywhere',
                  wordBreak: 'break-word',
                  textWrap: 'pretty'
                }}
              >
                {t('heroSubtitle')}
              </Typography>
              
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: { xs: 4, sm: 5.5 },
                  py: { xs: 1.7, sm: 2 },
                  borderRadius: '40px',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  textTransform: 'none',
                  letterSpacing: '0.01em',
                  position: 'relative',
                  overflow: 'hidden',
                  color: '#fff',
                  background:
                    'linear-gradient(135deg, #111827 0%, #1f2937 45%, #0f172a 100%)',
                  boxShadow:
                    '0 14px 35px rgba(15, 23, 42, 0.35), 0 2px 6px rgba(15, 23, 42, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  transition: 'all 0.2s ease',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(120deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 55%)',
                    opacity: 0.35,
                    transform: 'translateX(-35%)',
                    transition: 'transform 0.25s ease, opacity 0.25s ease'
                  },
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.02)',
                    boxShadow:
                      '0 18px 45px rgba(15, 23, 42, 0.45), 0 4px 10px rgba(15, 23, 42, 0.25)',
                    '&::after': { transform: 'translateX(0)', opacity: 0.6 }
                  },
                  '&:active': {
                    transform: 'translateY(0) scale(0.99)',
                    boxShadow: '0 10px 25px rgba(15, 23, 42, 0.35)'
                  }
                }}
              >
                {t('ctaRepair')}
              </Button>
            </motion.div>
          </Grid>
          
        </Grid>
      </Container>
      
      <Box sx={{
        position: 'absolute',
        bottom: 60,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: { xs: 'none', md: 'block' }
      }}>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <Stack alignItems="center" spacing={1}>
            <Typography
              variant="caption"
              sx={{
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                mb: 0.5
              }}
            >
              SCROLL
            </Typography>
            <Box
              sx={{
                width: '20px',
                height: '32px',
                border: '2px solid #fff',
                borderRadius: '12px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                pt: 0.5
              }}
            >
              <Box
                sx={{
                  width: '3px',
                  height: '6px',
                  bgcolor: '#fff',
                  borderRadius: '2px'
                }}
              />
            </Box>
          </Stack>
        </motion.div>
      </Box>
    </Box>
  );
}
