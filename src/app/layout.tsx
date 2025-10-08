import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Clon de Netflix creado con Next.js + React",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
