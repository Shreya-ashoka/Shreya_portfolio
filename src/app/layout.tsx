import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import StarfieldBackdrop from "@/components/canvas/StarfieldBackdrop";

export const metadata: Metadata = {
  title: "Shreya Ashoka — AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Shreya Ashoka, an AI/ML engineer with expertise in Python, LLMs, deep learning, and full-stack development. Published researcher (Taylor & Francis, IEEE).",
  metadataBase: new URL("https://shreya-ashoka.dev"),
  openGraph: {
    title: "Shreya Ashoka — AI/ML Engineer & Full-Stack Developer",
    description:
      "Building intelligent systems using Python, LLMs, and deep learning. Turning complex problems into elegant AI solutions.",
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
