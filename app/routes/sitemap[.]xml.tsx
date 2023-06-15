export const loader = () => {
  const content = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
      <loc>https://wasescha.immobilien.ch/</loc>
      <priority>1.0</priority>
      </url>
      <url>
      <loc>https://wasescha.immobilien.ch/angebote/easy-verkauf/</loc>
      <priority>1.0</priority>
      </url>
      <url>
      <loc>https://wasescha.immobilien.ch/angebote/expert-verkauf/</loc>
      <priority>1.0</priority>
      </url>
      <url>
      <loc>https://wasescha.immobilien.ch/angebote/finanzierung/immobilienrettung/</loc>
      <priority>1.0</priority>
      </url>      
      <url>
      <loc>https://wasescha.immobilien.ch/angebote/finanzierung/durch-eigenheim/</loc>
      <priority>1.0</priority>
      </url>     
      <url>
      <loc>https://wasescha.immobilien.ch/angebote/angebote/finanzierung</loc>
      <priority>1.0</priority>
      </url>
      <url>
      <loc>https://wasescha.immobilien.ch/angebote/finanzierung/zwangsversteigerung/</loc>
      <priority>1.0</priority>
      </url>
    </urlset>
    `;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
