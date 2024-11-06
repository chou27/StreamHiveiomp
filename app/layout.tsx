// layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import type { Metadata } from "next";
//import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body>
          
          <ThemeProvider attribute="class" forcedTheme="dark" storageKey="streamhive-theme">
            <Toaster theme="light" position="bottom-center" />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
