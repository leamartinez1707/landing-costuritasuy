import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modista a Medida",
  description: "Ropa personalizada, arreglos y confección con pasión y experiencia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
