import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Una lista de todos los idiomas soportados
  locales: ['es', 'en'],

  // Si no coincide el idioma, usar este por defecto
  defaultLocale: 'es'
});

export const config = {
  // Coincidir solo con rutas internacionalizadas
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
