'use client';

import { Box, Container, Typography, Stack, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <Box sx={{ bgcolor: '#f5f5f7', color: '#1d1d1f', pt: 8, pb: 4, borderTop: '1px solid #d2d2d7' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Tecnilab</Typography>
            <Typography variant="body2" sx={{ color: '#86868b', mb: 3 }}>
              {t('description')}
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small"><FacebookIcon /></IconButton>
              <IconButton size="small"><InstagramIcon /></IconButton>
              <IconButton size="small"><WhatsAppIcon /></IconButton>
            </Stack>
          </Grid>
          
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>{t('links')}</Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: '#515154' }}>Inicio</Typography>
              <Typography variant="body2" sx={{ color: '#515154' }}>Serv. Técnico</Typography>
              <Typography variant="body2" sx={{ color: '#515154' }}>Accesorios</Typography>
              <Typography variant="body2" sx={{ color: '#515154' }}>Promos</Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>{t('contact')}</Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: '#515154' }}>{t('address')}</Typography>
              <Typography variant="body2" sx={{ color: '#515154' }}>hola@tecnilab.pe</Typography>
              <Typography variant="body2" sx={{ color: '#515154' }}>+51 987 654 321</Typography>
            </Stack>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 8, pt: 3, borderTop: '1px solid #d2d2d7', textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: '#86868b' }}>
            © {new Date().getFullYear()} Tecnilab. {t('rights')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
