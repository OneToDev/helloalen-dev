import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Navbar } from "./_Components/Navbar";

import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/ui/providers/theme-provider";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Helloalen.dev | Let's create our creations!",
  description: "Let's create our creations!",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/Logo.png',
        href: '/Logo.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/Logo-Dark.png',
        href: '/Logo-Dark.png',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="md:flex">
            <Analytics />
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
