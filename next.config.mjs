/** @type {import('next').NextConfig} */

const STATIC_CACHE = "public, max-age=604800, stale-while-revalidate=2592000";

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  sassOptions: {
    includePaths: ["./src/styles"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920],
    qualities: [75, 85],
    minimumCacheTTL: 2678400,
  },
  experimental: {
    optimizePackageImports: ["gsap"],
  },
  allowedDevOrigins: ["172.19.0.1:3000", "localhost:3000"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: STATIC_CACHE }] },
      { source: "/:file(favicon.ico|apple-touch-icon.png|icon-192.png|icon-512.png|og.jpg)", headers: [{ key: "Cache-Control", value: STATIC_CACHE }] },
    ];
  },
  async redirects() {
    const retired = [
      "montegranaro-oxford",
      "porto-loafer",
      "ascoli-monk",
      "sibillini-boot",
      "macerata-derby",
      "recanati-suede",
    ];
    const moved = [
      { from: "/collection/fermo-derby", to: "/collection/classico-nero" },
      { from: "/collection/fermo-derby-nero", to: "/collection/classico-nero" },
      { from: "/collection/fermo-derby-moro", to: "/collection/classico-moro" },
      { from: "/collection/urbino-oxford", to: "/collection/caiman-nero" },
      { from: "/collection/urbino-oxford-nero", to: "/collection/caiman-nero" },
      { from: "/collection/urbino-oxford-moro", to: "/collection/caiman-moro" },
      { from: "/journal/fermo-derby", to: "/journal/classico-derby" },
      { from: "/boutiques", to: "/" },
      { from: "/contact", to: "/" },
      ...retired.map((slug) => ({ from: `/collection/${slug}`, to: "/collection" })),
    ];
    return moved.flatMap(({ from, to }) => [
      { source: from, destination: to, permanent: true },
      { source: `/en${from}`, destination: `/en${to}`, permanent: true },
    ]);
  },
};

export default nextConfig;
