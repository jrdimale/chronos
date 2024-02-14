import Image from "next/legacy/image";
import Head from 'next/head'; // Include this for custom fonts
import Link from 'next/link';
import { blogPosts } from '@/utils/posts';


export default function Home() {
  return (
    <>
    {/* Main Content - Grid with posts title, summaries and pictures*/}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-700 mb-8">
        Chronoguia
        <p className="text-2xl md:text-3xl text-center text-gray-700 mb-8">
        Tu guía de relojes
        </p>
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
                <h2 className="mt-2 text-2xl font-bold">{post.titleHomepage}</h2>
              </div>
              <div className="text-center">
                {post.summary}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}