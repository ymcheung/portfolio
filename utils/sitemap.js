const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const root = process.cwd();
const pagesPath = path.join(root, 'pages');
const pages = fs.readdirSync(pagesPath);

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .filter(page => {
          return page.indexOf("_") === -1
        })
        .map((page) => {
          const path = page
            .replace('.tsx', '');
          const route = path === 'index' ? '' : path;
          return `
            <url>
              <loc>${`https://ymcheung.tw/${route}`}</loc>
            </url>`
          ;
        })
        .join('')}
    </urlset>
  `;

  const sitemapFormatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', sitemapFormatted);
})();
