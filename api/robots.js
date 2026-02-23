export default function handler(req, res) {
  // Use environment variable or default to the canonical URL
  const baseUrl = process.env.PUBLIC_URL || 'https://www.homeandofficefixology.co.ke';

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.status(200).send(robotsTxt);
}
