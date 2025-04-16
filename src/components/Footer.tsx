import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="hover:underline">Our Story</Link></li>
            <li><Link href="/team" className="hover:underline">Team</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Courses</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/courses" className="hover:underline">All Courses</Link></li>
            <li><Link href="/categories" className="hover:underline">Categories</Link></li>
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/help" className="hover:underline">Help Center</Link></li>
          </ul>
        </div>

        {/* Social MediLink */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 hover:text-blue-600 transition"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.847v-3.622h2.973V8.413c0-2.946 1.796-4.553 4.418-4.553 1.256 0 2.337.093 2.652.135v3.07h-1.82c-1.428 0-1.704.678-1.704 1.672v2.19h3.406l-.444 3.622h-2.962V24h5.803c.732 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-sky-400 transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-700 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Courseify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
