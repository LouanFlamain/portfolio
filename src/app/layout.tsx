import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "./_components/ui/aurora-background";

export const metadata: Metadata = {
  title: "Louan Flamain - Portofolio",
  description: "Original Portfolio crée par Louan Flamain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-dark text-light">
      <head>
        <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />
        <link
          href="https://fonts.cdnfonts.com/css/mochiy-pop-one"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/narnoor"
          rel="stylesheet"
        ></link>
      </head>
      <body className="dark">
        <AuroraBackground
          className="bg-dark text-light"
          showRadialGradient={true}
        >
          {children}
        </AuroraBackground>
      </body>
    </html>
  );
}
