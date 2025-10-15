import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue & Beta 💍",
  description: "Oparitxo 5 hilabetegatik",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
