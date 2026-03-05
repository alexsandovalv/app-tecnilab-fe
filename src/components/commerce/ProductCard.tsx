'use client';

import { Box, Typography, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import { Product } from '@/lib/woocommerce';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useTranslations } from 'next-intl';

export default function ProductCard({ product }: { product: Product }) {
  const t = useTranslations('Common');
  
  const mainImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'transparent',
        '&:hover .secondary-img': {
          opacity: 1,
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingTop: '100%',
          borderRadius: '24px',
          bgcolor: '#ffffff',
          overflow: 'hidden',
          border: '1px solid #e5e5e7',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#000',
            boxShadow: '0 12px 24px rgba(0,0,0,0.06)'
          }
        }}
      >
        <Box
          component="img"
          src={mainImage}
          sx={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '80%',
            height: '80%',
            objectFit: 'contain',
          }}
        />
        
        <Box
          component="img"
          src={secondaryImage}
          className="secondary-img"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            padding: '10%',
            opacity: 0,
            transition: 'opacity 0.4s ease, transform 0.6s ease',
            bgcolor: '#ffffff',
            cursor: 'zoom-in',
            '&:hover': {
                transform: 'scale(1.8)',
            }
          }}
        />
        
        <Box sx={{ position: 'absolute', top: 16, left: 16, zIndex: 2, display: 'flex', gap: 1 }}>
          <Chip label={t('new')} size="small" sx={{ bgcolor: '#000', color: '#fff', fontWeight: 700 }} />
          {product.on_sale && (
              <Chip label={t('offer')} size="small" sx={{ bgcolor: '#ff3b30', color: '#fff', fontWeight: 700 }} />
          )}
        </Box>
      </Box>

      <CardContent sx={{ px: 0.5, py: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="caption" sx={{ color: '#86868b', fontWeight: 600, mb: 0.5, textTransform: 'uppercase' }}>
          {product.categories[0] || 'Apple'}
        </Typography>
        
        <Typography
          variant="subtitle1"
          sx={{ 
            fontWeight: 600, 
            fontSize: '1rem', 
            mb: 1, 
            lineHeight: 1.2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            height: '2.4em', 
          }}
        >
          {product.name}
        </Typography>

        <Box sx={{ mt: 'auto' }}>
            <Stack direction="row" spacing={1} alignItems="baseline" sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: product.on_sale ? '#ff3b30' : '#000', fontSize: '1.25rem' }}>
                    {product.price.includes('Consultar') ? t('consult') : `S/ ${product.price}`}
                </Typography>
                {product.on_sale && (
                    <Typography variant="body2" sx={{ color: '#86868b', textDecoration: 'line-through' }}>
                        S/ {parseInt(product.price) + 100} {/* Simulado ya que la API no da regular_price */}
                    </Typography>
                )}
            </Stack>
            
            <Button
              fullWidth
              variant="contained"
              color="primary"
              disableElevation
              startIcon={<AddShoppingCartIcon />}
              sx={{
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 600,
                py: 1.2,
              }}
            >
              {t('addToCart')}
            </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
