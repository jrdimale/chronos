import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl p-4 md:p-8 mt-24 bg-white shadow-md rounded-lg dark:bg-gray-800 m-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-700 dark:text-gray-300 mb-8">
        Pol Marica!
      </h1>
      <div className="flex justify-center items-center gap-4 mb-8">
        <p className="text-gray-500 dark:text-gray-400">by Chronoguia</p>
        <p className="text-gray-500 dark:text-gray-400">•</p>
        <p className="text-gray-500 dark:text-gray-400">Jan 19, 2024</p>
      </div>
      <div className="prose prose-lg dark:prose-dark mx-auto">
        <p>
          Orient is a minimal, responsive, and typography-focused theme for the
        </p>
        <figure className="lg:-mx-12 xl:-mx-20">
          <img
            alt="Minimalist living"
            className="aspect-video overflow-hidden rounded-lg object-cover"
            height="340"
            src="/placeholder.svg"
            width="1250"
          />
          <figcaption className="text-center text-gray-500 dark:text-gray-400">
            Minimalist living
          </figcaption>
        </figure>
        <p>
          In this guide, we&apos;ll explore the principles of minimalism, how to
          apply them in your own life, and the benefits you can expect to see
          when you do.
        </p>
        <figure className="lg:-mx-12 xl:-mx-20">
          <img
            alt="Minimalist workspace"
            className="aspect-video overflow-hidden rounded-lg object-cover"
            height="340"
            src="/placeholder.svg"
            width="1250"
          />
          <figcaption className="text-center text-gray-500 dark:text-gray-400">
            Minimalist workspace
          </figcaption>
        </figure>
        <p>
          From your workspace to your home, minimalism can transform every
          aspect of your life.
        </p>
        <figure className="lg:-mx-12 xl:-mx-20">
          <img
            alt="Minimalist lifestyle"
            className="aspect-video overflow-hidden rounded-lg object-cover"
            height="340"
            src="/placeholder.svg"
            width="1250"
          />
          <figcaption className="text-center text-gray-500 dark:text-gray-400">
            Minimalist lifestyle
          </figcaption>
        </figure>
      </div>
    </main>
  );
}

const Patata = () => {
  return <div>Fuck you</div>;
};
