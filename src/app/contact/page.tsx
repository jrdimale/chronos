import Image from 'next/image';
import Head from 'next/head'; // Include this for custom fonts
import Link from 'next/link';

export default function Home() {
  return (
    <>      
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20"> {/* Increased height */}
            {/* Logo Placeholder */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <img className="h-14 w-14" src="/logo_final.png" alt="Your Logo" />
                </Link>
              </div>
            </div>
            {/* Navigation Links */}
            <div className="hidden sm:block">
              <div className="ml-6 flex items-center space-x-4">
                <Link href="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/aboutUs" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl p-4 md:p-8 mt-8 bg-white m-auto font-roboto"> {/* Removed rounded-lg, added font */}
        <div className="prose prose-lg mx-auto text-gray-500 text-8l">
          <p className="text-2lg text-gray-500 justify-center">
            En construcción
          </p>
      </div>
    </main>
    {/* Contacto Info Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex justify-center">
        <p>Tu gúia de relojes | <a href="mailto:chronoguia@gmail.com">chronoguia@gmail.com</a></p>
        {/* Add any other information you want here */}
      </div>
    </>
  );
}