'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const Counter = ({ end, label }: { end: number, label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: 'center',
        py: 4,
        px: 2,
        borderRadius: '24px',
        transition: 'all 0.3s ease',
        '&:hover': {
          bgcolor: '#f5f5f7',
          transform: 'translateY(-4px)'
        }
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: '#1d1d1f',
          fontSize: { xs: '3rem', md: '4rem' },
          mb: 1,
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
        }}
      >
        {count.toLocaleString()}+
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: '#86868b',
          fontWeight: 600,
          fontSize: { xs: '1rem', md: '1.1rem' },
          letterSpacing: '0.02em'
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default function StatsSection() {
  const t = useTranslations('HomePage.stats');

  return (
    <Box sx={{ py: 12, bgcolor: '#fbfbfd' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Counter end={3371} label={t('devices')} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Counter end={3364} label={t('clients')} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Counter end={3} label={t('labs')} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
