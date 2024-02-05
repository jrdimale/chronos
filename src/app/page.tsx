import Image from 'next/image';
import Head from 'next/head'; // Include this for custom fonts
import Link from 'next/link';
import { blogPosts } from '@/utils/posts';


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
                <Link href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
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

    {/* Main Content - Grid with posts title, summaries and pictures*/}
    <main className="max-w-7xl p-4 md:p-8 mt-8 bg-white m-auto font-roboto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-700 mb-8">
        Welcome to Chronoguia
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} passHref>
            <div className="group cursor-pointer">
              <div className="relative w-full h-64 md:h-96"> {/* Adjust the height as needed */}
                <Image
                  alt={post.titleHomepage}
                  src={post.mainPicture}
                  layout="fill"
                  objectFit="cover" // This will cover the div area, maintaining aspect ratio
                  className="rounded-lg"
                />
              </div>
              <div className="text-center">
                <h2 className="mt-2 text-xl font-bold">{post.title}</h2>
              </div>
              <div className="text-justify">
                {post.summary}
              </div>
            </div>
          </Link>
        ))}
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