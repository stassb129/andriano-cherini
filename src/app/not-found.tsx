import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="ru">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f3eee4", color: "#0a0a0a" }}>
        <main style={{ minHeight: "100svh", display: "grid", placeContent: "center", gap: "1rem", padding: "2rem", textAlign: "center" }}>
          <p style={{ letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.7rem", opacity: 0.55 }}>404</p>
          <h1 style={{ fontWeight: 400, fontSize: "clamp(2rem, 6vw, 3.5rem)", margin: 0 }}>Страница не найдена / Page not found</h1>
          <p style={{ opacity: 0.7, maxWidth: "28rem", margin: "0 auto" }}>
            Andriano Cherini — <Link href="/">главная</Link> · <Link href="/en">home</Link> · <Link href="/collection">коллекция</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
