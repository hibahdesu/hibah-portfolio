import "./globals.css";
import { sceneScript } from "@/lib/scene";

export const metadata = {
  title: "Hibah Sindi | AI Engineer & Data Analyst",
  description:
    "Hibah Sindi builds multi-agent AI systems, ML models, and data pipelines in Riyadh, Saudi Arabia.",
  icons: { icon: "/favicon.svg" },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-season="fall" data-time="night" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: sceneScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Fredoka:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
