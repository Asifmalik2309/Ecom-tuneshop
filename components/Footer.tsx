"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaSpotify, FaApple, FaYoutube, FaInstagram, FaTwitter, FaShoppingBag } from "react-icons/fa";
import { MdEmail, MdLocalShipping, MdPayment } from "react-icons/md";

export default function MusicFooter() {
  return (
    <motion.footer
      className="w-full bg-gradient-to-t from-gray-950 via-black to-gray-900 text-white py-16 px-8 md:px-16"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Music Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-200 flex items-center gap-2">
            <span className="text-purple-500">🎵</span> Music World
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Explore the best of music, latest hits, and artist trends. 
            Join us in celebrating the rhythm of life.
          </p>
          
          <div className="pt-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Stream Now</h3>
            <div className="flex gap-6 text-3xl">
              <Link href="https://spotify.com" target="_blank" aria-label="Spotify">
                <FaSpotify className="text-[#1DB954] hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://music.apple.com" target="_blank" aria-label="Apple Music">
                <FaApple className="text-[#B0B0B0] hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                <FaYoutube className="text-[#FF0000] hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* E-commerce Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-200 flex items-center gap-2">
            <FaShoppingBag className="text-blue-400" /> Shop Services
          </h2>
          
          <div className="grid grid-cols-1 gap-4 text-gray-400">
            <div className="flex items-center gap-3">
              <MdLocalShipping className="text-xl text-green-400" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center gap-3">
              <MdPayment className="text-xl text-yellow-400" />
              <span>Secure payment options</span>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 Customer support</span>
            </div>
          </div>

          <div className="pt-2">
            <Link 
              href="/shop" 
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all"
            >
              Visit Our Store
            </Link>
          </div>
        </div>

        {/* Social & Contact Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-200">Connect With Us</h2>
          
          <div className="flex gap-6 text-3xl">
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram className="text-[#E1306C] hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <FaTwitter className="text-[#1DA1F2] hover:scale-110 transition-transform" />
            </Link>
            <Link href="mailto:contact@musicworld.com" aria-label="Email">
              <MdEmail className="text-gray-300 hover:scale-110 transition-transform" />
            </Link>
          </div>

          <div className="text-gray-400 space-y-2">
            <p>Subscribe to our newsletter for updates</p>
            <div className="flex">
              {/* <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md bg-gray-800 text-white w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              /> */}
              {/* <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md transition-colors">
                Join
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Music World. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/returns" className="hover:text-gray-300 transition-colors">Returns Policy</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}