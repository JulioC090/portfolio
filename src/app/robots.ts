import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/private/', '/admin/', '/404', '/500'],
      },
      {
        userAgent: ['Applebot', 'Bingbot', 'Googlebot'],
        allow: ['/'],
      },
      {
        userAgent: ['AhrefsBot', 'SemrushBot'],
        crawlDelay: 10,
      },
    ],
    sitemap: 'https://pigeonlab.vercel.app/sitemap.xml',
  };
}
