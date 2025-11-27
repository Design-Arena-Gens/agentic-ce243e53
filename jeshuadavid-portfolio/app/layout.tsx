import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono as JetBrainsMono,
  Playfair_Display as PlayfairDisplay,
} from "next/font/google";
import "./globals.css";

const playfair = PlayfairDisplay({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrainsMono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeshua David | Video Editor & Visual Storyteller",
  description:
    "Cinematic video editor and visual storyteller crafting editorial narratives with depth, precision, and immersive 3D sensibilities.",
  metadataBase: new URL("https://agentic-ce243e53.vercel.app"),
  openGraph: {
    title: "Jeshua David | Video Editor & Visual Storyteller",
    description:
      "Cinematic video editor and visual storyteller crafting editorial narratives with depth, precision, and immersive 3D sensibilities.",
    type: "website",
    url: "https://agentic-ce243e53.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeshua David | Video Editor & Visual Storyteller",
    description:
      "Cinematic video editor and visual storyteller crafting editorial narratives with depth, precision, and immersive 3D sensibilities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased bg-background text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
