import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chronoguia",
  description: "Para amantes de relojes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className} style={{flex: 1, flexDirection: "column", display: "flex"}}>
        
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20"> {/* Increased height */}
            {/* Logo Placeholder */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <img className="h-14 w-14" src="/logo/logo_final.png" alt="Your Logo" />
                </Link>
              </div>
            </div>
            {/* Navigation Links */}
            <div className="">
              <div className="ml-6 flex items-center space-x-4">
                <Link href="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/aboutUs" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </Link>
                <Link href="/contact" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl p-4 md:p-8 mt-8 bg-white m-auto font-roboto flex-1">

      {children}
      </main>
      {/* Contacto Info Section */}
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex justify-center">
        <p>Tu guía de relojes | <a href="mailto:info@chronoguia.com">info@chronoguia.com</a></p>
        {/* Add any other information you want here */}
      </div>
      </nav>
      </body>
    </html>
  );
}
