import Image from 'next/image';
import Head from 'next/head'; // Include this for custom fonts

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
                <img className="h-14 w-14" src="/logo_final.png" alt="Your Logo" />
              </div>
            </div>
            {/* Navigation Links */}
            <div className="hidden sm:block">
              <div className="ml-6 flex items-center space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl p-4 md:p-8 mt-8 bg-white m-auto font-roboto"> {/* Removed rounded-lg, added font */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-700 mb-8">
          The invincible diver
        </h1>
        <div className="flex justify-center items-center gap-4 mb-8">
          <p className="text-gray-500">by Chronoguia</p>
          <p className="text-gray-500">•</p>
          <p className="text-gray-500">Jan 19, 2024</p>
        </div>
        <div className="prose prose-lg mx-auto text-gray-500 text-8l">
          <p className="text-2lg text-gray-500 justify-center">
            The Orient Blue Ray II diver watch is a renowned timepiece, celebrated for its exceptional blend of style, durability, and affordability. As a successor to the original Blue Ray, the Blue Ray II has upheld the legacy of its predecessor while introducing several enhancements that elevate its status in the world of diving watches.
            At its core, the Blue Ray II is powered by Orient&apos;s in-house, automatic mechanical movement. This ensures reliable and accurate timekeeping, a critical feature for divers who depend on their watch&apos;s precision underwater. The movement also supports hand winding and hacking, allowing for more precise time setting an upgrade from the original Blue Ray.
          </p>
          <figure className="flex justify-center my-8">
            <Image
              alt="Minimalist living"
              className="aspect-video overflow-hidden rounded-lg object-cover"
              height={340}
              src="/IMG_6515.jpg"
              width={1250}
            />
          </figure>
        <p className="text-lg text-gray-500 justify-center">
          The watch&apos;s design is both classic and contemporary, making it versatile enough for both casual wear and more formal occasions. It features a 41.5mm stainless steel case, which is comfortably sized for most wrists and provides a substantial, robust feel without being overly bulky. The case is complemented by a unidirectional rotating bezel, a staple in diver watches, which allows divers to track their elapsed time underwater. The bezel&apos;s 120 clicks give a satisfying tactile feedback and ensure precise setting.

          One of the most striking features of the Blue Ray II is its dial. The deep blue sunburst dial captures and reflects light, creating an ever-changing and captivating display. The watch&apos;s hands and markers are generously coated with lume, providing excellent legibility in low-light conditions, an essential attribute for a diver&apos;s watch.
        </p>
        <figure className="flex justify-center my-8">
          <Image
            alt="Minimalist workspace"
            className="aspect-video overflow-hidden rounded-lg object-cover"
            height="340"
            src="/IMG_7021.jpg"
            width="1250"
          />
        </figure>
        <p className="text-lg text-gray-500">
          The Blue Ray II&apos;s crystal is made of mineral glass, offering a clear view of the dial while being sufficiently resistant to scratches. The watch is water-resistant up to 200 meters (660 feet), making it suitable for a variety of water activities, including professional marine activity and serious surface water sports.

          Orient has also paid close attention to the bracelet of the Blue Ray II. The stainless steel bracelet is sturdy and well-crafted, with a double locking fold-over clasp that ensures the watch stays secure on the wrist.

          In conclusion, the Orient Blue Ray II stands as a testament to Orient&apos;s ability to produce high-quality, affordable diver watches. It offers a perfect balance of functional features, aesthetic appeal, and durability, making it a popular choice among both seasoned divers and watch enthusiasts. Whether you&apos;re exploring the depths of the ocean or navigating the complexities of daily life, the Blue Ray II is more than capable of meeting the challenge.
        </p>
        <figure className="flex justify-center my-8">
          <Image
            alt="Minimalist lifestyle"
            className="aspect-video overflow-hidden rounded-lg object-cover"
            height="340"
            src="/IMG_7021.jpg"
            width="1250"
          />
        </figure>
      </div>
    </main>
    {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex justify-center">
        <p>From watch lovers, to watch lovers  | <a href="mailto:info@chronoguia.com">info@chronoguia.com</a></p>
        {/* Add any other information you want here */}
      </div>
    </>
  );
}