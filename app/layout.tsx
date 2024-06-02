import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Roboto } from "next/font/google";
import { Navbar } from "./_Components/Navbar";

import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/ui/providers/theme-provider";

const poppins = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
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
      <body className={`${poppins.className} bg-[#fafafa] dark:bg-maBlack`}>
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
