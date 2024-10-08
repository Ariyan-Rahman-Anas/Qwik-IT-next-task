import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster, toast } from 'sonner'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App test",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={` ${inter.className} min-h-screen max-w-full px-4 relative bg-darkGray text-gray `}>
        <Toaster richColors position="top-right" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}