export default async function sitemap() {
  const baseUrl = 'https://www.jscastanos.dev';

  return [{ url: baseUrl, lastModified: new Date() }];
}
