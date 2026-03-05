'use client';

import {AppBar, Toolbar, Container, Box, Button, Stack, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemButton, ListItemText, Divider} from '@mui/material';
import Link from 'next/link';
import { ShoppingBagOutlined, LanguageOutlined, MenuOutlined, CloseOutlined } from "@mui/icons-material";
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { key: 'home', href: '#hero' },
  { key: 'service', href: '#service' },
  { key: 'accessories', href: '#accessories' },
  { key: 'contact', href: '#contact' },
];

export default function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setScrolled(heroBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    handleLanguageClose();
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            bgcolor: '#000',
            color: '#fff',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
            <Link href={`/${locale}`} onClick={() => setMobileMenuOpen(false)}>
              <Box
                component="img"
                src="https://tecnilab.pe/wp-content/uploads/2021/02/cropped-cropped-TECNILAB-LOGO1.png"
                alt="Tecnilab Logo"
                sx={{ height: 40 }}
              />
            </Link>
            <IconButton onClick={() => setMobileMenuOpen(false)} sx={{ color: '#fff' }}>
              <CloseOutlined />
            </IconButton>
          </Stack>
          <Divider sx={{ borderColor: '#333', mb: 2 }} />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.key} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.href)}>
                  <ListItemText
                    primary={t(item.key)}
                    primaryTypographyProps={{
                      fontSize: '1.2rem',
                      fontWeight: 500
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ borderColor: '#333', my: 2 }} />
          <Stack spacing={2} sx={{ px: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => {
                handleLanguageChange(locale === 'es' ? 'en' : 'es');
                setMobileMenuOpen(false);
              }}
              sx={{
                color: '#fff',
                borderColor: '#fff',
                textTransform: 'none',
                py: 1.5
              }}
            >
              {locale === 'es' ? 'English' : 'Español'}
            </Button>
          </Stack>
        </Box>
      </Drawer>

    {/* AppBar */}
    <AppBar
      position={scrolled ? 'fixed' : 'absolute'}
      elevation={scrolled ? 4 : 0}
      sx={{
        bgcolor: '#000',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        backdropFilter: 'blur(20px)',
        top: 0,
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Link href={`/${locale}`} style={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="https://tecnilab.pe/wp-content/uploads/2021/02/cropped-cropped-TECNILAB-LOGO1.png"
              alt="Tecnilab Logo"
              sx={{ height: 40, filter: 'none' }}
            />
          </Link>

          <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                sx={{ color: '#fff', textTransform: 'none', fontWeight: 500, fontSize: '0.9rem' }}
              >
                {t(item.key)}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            {/* Desktop Icons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <IconButton
                size="small"
                color="inherit"
                onClick={handleLanguageClick}
                sx={{ color: '#fff' }}
              >
                <LanguageOutlined />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleLanguageClose}
              >
                <MenuItem
                  onClick={() => handleLanguageChange('es')}
                  selected={locale === 'es'}
                >
                  Español
                </MenuItem>
                <MenuItem
                  onClick={() => handleLanguageChange('en')}
                  selected={locale === 'en'}
                >
                  English
                </MenuItem>
              </Menu>
              <IconButton size="small" color="inherit">
                <ShoppingBagOutlined />
              </IconButton>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              size="small"
              color="inherit"
              onClick={() => setMobileMenuOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#fff' }}
            >
              <MenuOutlined />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
