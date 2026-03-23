import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const routesPath = path.join(root, 'src', 'next', 'routes.ts');

fs.mkdirSync(publicDir, { recursive: true });

const cnameCandidates = [path.join(root, 'CNAME'), path.join(publicDir, 'CNAME')];

let domain = process.env.SITE_DOMAIN;
if (!domain) {
  for (const candidate of cnameCandidates) {
    if (!fs.existsSync(candidate)) continue;
    const value = fs.readFileSync(candidate, 'utf8').trim().split(/\r?\n/)[0];
    if (value) {
      domain = value;
      break;
    }
  }
}

if (!domain) {
  console.error('Missing domain. Set SITE_DOMAIN or CNAME.');
  process.exit(1);
}

const siteUrl = `https://${domain}`;
const date = new Date().toISOString().split('T')[0];

const routesSource = fs.readFileSync(routesPath, 'utf8');
const routes = [...routesSource.matchAll(/['"](\/[^'"]*)['"]/g)]
  .map((match) => match[1])
  .filter((value, index, array) => array.indexOf(value) === index)
  .sort();

const toUrl = (route) => (route === '/' ? `${siteUrl}/` : `${siteUrl}${route}/`);
const priorityFor = (route) => {
  if (route === '/' || route === '') return '1.0';
  const depth = route.split('/').filter(Boolean).length;
  if (depth === 1) return '0.8';
  if (depth === 2) return '0.6';
  return '0.5';
};

const sitemapLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
];

for (const route of routes) {
  sitemapLines.push('  <url>');
  sitemapLines.push(`    <loc>${toUrl(route)}</loc>`);
  sitemapLines.push(`    <lastmod>${date}</lastmod>`);
  sitemapLines.push(`    <priority>${priorityFor(route)}</priority>`);
  sitemapLines.push('  </url>');
}

sitemapLines.push('</urlset>');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), `${sitemapLines.join('\n')}\n`, 'utf8');

const robots = ['User-agent: *', 'Allow: /', '', `Sitemap: ${siteUrl}/sitemap.xml`, ''].join('\n');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');

console.log(`Generated ${routes.length} routes, sitemap.xml, and robots.txt for ${siteUrl}`);
