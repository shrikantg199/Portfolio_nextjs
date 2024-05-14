import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shrikant Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" dark darkMode">
      <Head>
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
