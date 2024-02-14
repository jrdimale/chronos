import Image from "next/legacy/image";
import Head from 'next/head'; // Include this for custom fonts
import Link from 'next/link';
import { blogPosts } from '@/utils/posts';

export default function Home({ params }: { params: { postId: string } }) {
  const post = blogPosts.find((post) => post.id === params.postId);

  return (
    <>      

      {/* Main Content */}
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
    </>
  );
}