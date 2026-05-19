import type { RequestHandler } from "./$types";

export const prerender = true;

const baseUrl = "https://www.jscastanos.dev";

export const GET: RequestHandler = () => {
	const lastModified = new Date().toISOString();
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${baseUrl}</loc>
		<lastmod>${lastModified}</lastmod>
	</url>
</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "max-age=0, s-maxage=3600",
		},
	});
};
