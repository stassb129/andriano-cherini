/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./src/styles"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: ["172.19.0.1:3000", "localhost:3000"],
  async redirects() {
    const retired = [
      "montegranaro-oxford",
      "porto-loafer",
      "ascoli-monk",
      "sibillini-boot",
      "macerata-derby",
      "recanati-suede",
    ];
    return [
      { source: "/collection/fermo-derby", destination: "/collection/fermo-derby-nero", permanent: true },
      { source: "/collection/urbino-oxford", destination: "/collection/urbino-oxford-nero", permanent: true },
      ...retired.map((slug) => ({ source: `/collection/${slug}`, destination: "/collection", permanent: true })),
    ];
  },
};

export default nextConfig;
