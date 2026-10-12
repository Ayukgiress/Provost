import type { Metadata } from "next";
import LenisProvider from "./components/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Provost | Navigate Your Academic & Funding Journey",
  description: "Empowering students and emerging professionals with intelligent guidance for academic and funding opportunities.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:wght@600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}