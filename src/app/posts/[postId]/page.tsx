import Image from 'next/image';
import Head from 'next/head'; // Include this for custom fonts
import Link from 'next/link';
import { blogPosts } from '@/utils/posts';

export default function Home({ params }: { params: { postId: string } }) {
  const post = blogPosts.find((post) => post.id === params.postId);

  return (
    <>      
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20"> {/* Increased height */}
            {/* Logo Placeholder */}
            <div className="flex items-center">
                <Link href="/">
                  <img className="h-14 w-14" src="/logo/logo_final.png" alt="Your Logo" />
                </Link>
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
                <Link href="/contact" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl p-4 md:p-8 mt-8 bg-white m-auto font-roboto"> {/* Removed rounded-lg, added font */}
        <h1 className="text-2xl md:text-2xl font-bold font-serif text-center text-gray-700 mb-8">
          {post?.categoryTitle}
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-700 mb-8">
          {post?.title}
        </h1>
        <div className="flex justify-center items-center gap-4 mb-8">
          <p className="text-gray-500"> {post?.editor}</p>
          <p className="text-gray-500">•</p>
          <p className="text-gray-500"> {post?.date}</p>
        </div>
        <div className="flex justify-center items-center gap-4 mb-8">
          {post?.content}
        </div>
      </main>
    {/* Contacto Info Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex justify-center">
        <p>Tu guía de relojes  | <a href="mailto:info@chronoguia.com">info@chronoguia.com</a></p>
      </div>
    </>
  );
}