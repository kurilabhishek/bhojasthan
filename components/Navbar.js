import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* ✅ Clickable text logo */}
        <Link href="/" legacyBehavior>
          <a className="font-sahitya font-bold text-3xl text-orange-600 hover:opacity-80 transition duration-200">
            Bhojasthan
          </a>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 text-sm md:text-base">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/gallery">Gallery</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-orange-600 focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-2 text-gray-700">
          <Link href="/" onClick={toggleMenu}>Home</Link><br />
          <Link href="/about" onClick={toggleMenu}>About</Link><br />
          <Link href="/blog" onClick={toggleMenu}>Blog</Link><br />
          <Link href="/testimonials" onClick={toggleMenu}>Testimonials</Link><br />
          <Link href="/contact" onClick={toggleMenu}>Contact</Link><br />
          <Link href="/faq" onClick={toggleMenu}>FAQ</Link><br />
          <Link href="/gallery" onClick={toggleMenu}>Gallery</Link>
        </div>
      )}
    </header>
  );
}
