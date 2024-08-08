import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Navbar } from "./_Components/Navbar";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ui/providers/theme-provider";
import { Footer } from "./_Components/Footer";

const poppins = Poppins({
  style: ["italic", "normal"],
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Helloalen.dev | Let's create our creations!",
  description: "Let's create our creations!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/Logo-Character.png",
        href: "/Logo-Character.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/Logo-Character.png",
        href: "/Logo-Character.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-zinc-100 dark:bg-zinc-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col justify-between">
            <Analytics />
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
