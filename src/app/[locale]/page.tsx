import { getProducts } from '@/lib/woocommerce';
import HeroSection from '@/components/ui/HeroSection';
import StatsSection from '@/components/ui/StatsSection';
import ContactMapSection from '@/components/ui/ContactMapSection';
import ProductCard from '@/components/commerce/ProductCard';
import { Container, Typography, Box, Stack, Button, Grid } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default async function HomePage() {
  const products = await getProducts(1, 4); 
  const t = await getTranslations('HomePage');

  return (
    <main style={{ overflowX: 'hidden' }}>
      <Box id="hero">
        <HeroSection />
      </Box>

      {/* 4 PRODUCTOS DESTACADOS */}
      <Box sx={{ py: 10, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 6, textAlign: 'center' }}>
            {t('latestArrivals')}
          </Typography>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

        <StatsSection />

      {/* SECCIÓN ACCESORIOS MAGSAFE */}
      <Box id="accessories" sx={{ py: 10, bgcolor: '#000', color: '#fff', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
             <Grid size={{ xs: 12, md: 6 }}>
                <Box
                    component="img"
                    src="https://tecnilab.pe/wp-content/uploads/2022/08/MAGSAFE-1.png"
                    alt="MagSafe"
                    sx={{ width: '100%', borderRadius: '30px', filter: 'brightness(1.2)' }}
                />
             </Grid>
             <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
                    {t('accessories.title')}
                </Typography>
                <Typography variant="h6" sx={{ color: '#86868b', mb: 5, fontWeight: 400 }}>
                    {t('accessories.description')}
                </Typography>
                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                        bgcolor: '#2997ff',
                        color: '#fff',
                        px: 4,
                        py: 1.5,
                        borderRadius: '30px',
                        fontWeight: 600
                    }}
                >
                    {t('accessories.buy')}
                </Button>
             </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CARRUSEL SERVICIO TÉCNICO */}
      <Box id="service" sx={{ py: 10, bgcolor: '#fff' }}>
         <Container maxWidth="lg" sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>{t('service.title')}</Typography>
            <Typography variant="h6" sx={{ color: '#86868b' }}>{t('service.subtitle')}</Typography>
         </Container>
         
         <Stack direction="row" spacing={4} sx={{ overflowX: 'hidden', py: 4 }}>
            {[1, 2, 3, 1, 2, 3].map((num, i) => (
                <Box
                    key={i}
                    component="img"
                    src={`https://tecnilab.pe/wp-content/uploads/2022/07/${num}.png`}
                    sx={{ height: 300, borderRadius: '20px', flexShrink: 0 }}
                />
            ))}
         </Stack>
      </Box>

      <Box id="contact">
        <ContactMapSection />
      </Box>
    </main>
  );
}
