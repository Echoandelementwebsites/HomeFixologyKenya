export default function handler(req, res) {
  // Use environment variable or default to the canonical URL
  const baseUrl = process.env.PUBLIC_URL || 'https://www.homeandofficefixology.co.ke';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache for 24 hours
  res.status(200).send(sitemap);
}
