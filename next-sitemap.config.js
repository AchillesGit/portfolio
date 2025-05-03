/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.dennissadiki.de/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  alternateRefs: [
    { href: "https://www.dennissadiki.de", hreflang: "de" },
    { href: "https://www.dennissadiki.com", hreflang: "de" },
  ],
};
