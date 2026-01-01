/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep i18n config for Pages Router compatibility with next-intl
  i18n: {
    locales: ['en'],
    defaultLocale: "en",
  }
}

module.exports = nextConfig