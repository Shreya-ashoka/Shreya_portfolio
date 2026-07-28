import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import StarfieldBackdrop from "@/components/canvas/StarfieldBackdrop";

export const metadata: Metadata = {
  title: "Shreya Ashoka / AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Shreya Ashoka, an AI/ML engineer working across Python, LLMs, deep learning, APIs, and full-stack development.",
  metadataBase: new URL("https://shreya-ashoka.dev"),
  openGraph: {
    title: "Shreya Ashoka / AI/ML Engineer & Full-Stack Developer",
    description:
      "Portfolio of Shreya Ashoka, focused on ML workflows, APIs, dashboards, and applied AI research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        <StarfieldBackdrop />
        <CursorGlow />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
