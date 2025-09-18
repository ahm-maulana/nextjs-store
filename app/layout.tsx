import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NextStore",
    template: "%s | NextStore",
  },
  description:
    "Discover the best deals on electronics, fashion, and more at NextStore",
  keywords: [
    "e-commerce",
    "online shopping",
    "ShopEase",
    "fashion",
    "electronics",
    "deals",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
          <Providers>
            <Navbar />
            <main>
              <Container className="py-20">{children}</Container>
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
