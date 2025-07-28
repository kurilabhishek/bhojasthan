import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-100 text-gray-700 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-orange-600 text-lg mb-2">Bhojasthan</h3>
          <p>Home-style tiffin service you can trust.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Connect with Us</h4>
          <p>📞 +91-7622045823</p>
          <p>✉️ kurilrpf@gmail.com</p>
          <div className="flex gap-4 mt-3 text-orange-600 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-6 text-gray-500">
        © {new Date().getFullYear()} Bhojasthan. All rights reserved.
      </div>
    </footer>
  );
}
