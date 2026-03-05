import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import StoreProvider from '@/store/StoreProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import { Box } from '@mui/material';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Tecnilab - Servicio Técnico Apple Premium',
  description: 'Expertos en reparación de iPhone, Mac y iPad en Lima. Soluciones inmediatas con garantía.',
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!['es', 'en'].includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body style={{ margin: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#000' }} suppressHydrationWarning>
        <StoreProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <ThemeRegistry>
              <Header />
              <Box sx={{ flex: 1 }}>
                {children}
              </Box>
              <Footer />
            </ThemeRegistry>
          </NextIntlClientProvider>
        </StoreProvider>
        <SpeedInsights
          sampleRate={1}
          debug={false}
        />
      </body>
    </html>
  );
}
