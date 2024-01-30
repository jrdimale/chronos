// pages/index.tsx
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  // Replace with your actual blog posts data
  { title: 'Blog Post 1', imageUrl: '/IMG_7021.jpg', url: '/post1' },
  { title: 'Blog Post 2', imageUrl: '/IMG_7021.jpg', url: '/post2' },
  { title: 'Blog Post 3', imageUrl: '/IMG_7021.jpg', url: '/post1' },
  { title: 'Blog Post 4', imageUrl: '/IMG_7021.jpg', url: '/post2' },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogPosts.map((post, index) => (
          <Link key={index} href={post.url} passHref>
            <a className={`flex flex-col ${index % 2 === 0 ? 'md:col-span-1' : 'md:col-span-2'}`}>
              <Image
                alt={post.title}
                src={post.imageUrl}
                width={600}  // Adjust as needed
                height={400} // Adjust for aspect ratio
                className="rounded-lg"
              />
              <h2 className="mt-2 text-xl font-bold">{post.title}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
