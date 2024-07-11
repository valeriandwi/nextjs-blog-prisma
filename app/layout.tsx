import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog NextJS Starter",
  description:
    "This application is for learning NextJS with Auth and Prisma purpose only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="business">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
