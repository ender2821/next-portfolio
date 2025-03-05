import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Josh Jensen Creative",
  description: "Branding, UX Design, and Web Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Header />
          {children}
          <SanityLive />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
