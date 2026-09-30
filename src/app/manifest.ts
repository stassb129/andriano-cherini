import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Andriano Cherini",
    short_name: "Cherini",
    description: "Классическая мужская обувь из Фермо, Италия.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3eee4",
    theme_color: "#0a0a0a",
    lang: "ru",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
