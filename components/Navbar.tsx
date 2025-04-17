'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, User } from 'lucide-react';

// Define the CartItem type
type CartItem = {
  id: number;
  quantity: number;
  // Add other properties as needed, like price, title, etc.
};

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
      const count = cart.reduce((total: number, item: CartItem) => total + (item.quantity || 1), 0);
      setCartCount(count);
    };

    updateCartCount();

    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-opacity-80 bg-gray-900 text-white shadow-md p-3 rounded-2xl mx-auto w-3/4 mt-2' : 'text-white p-3'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <Link href="/" className="text-xs font-bold">Home</Link>
          <Link href="/biography" className="hover:text-gray-300 text-xs">Biography</Link>
          <Link href="/gallery" className="hover:text-gray-300 text-xs">Gallery</Link>
          <Link href="/contact" className="hover:text-gray-300 text-xs">Contact</Link>
          <Link href="/musicvideos" className="hover:text-gray-300 text-xs">Music</Link>
          <Link href="/shop" className="hover:text-gray-300 text-xs">ShopNow</Link>
        </div>

        <div className="flex items-center gap-4">
          {searchOpen && (
            <motion.input
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '150px' }}
              exit={{ opacity: 0, width: 0 }}
              type="text"
              placeholder="Search..."
              className="px-2 py-1 rounded-md text-black border border-gray-300"
            />
          )}
          <Search className="cursor-pointer" onClick={() => setSearchOpen(!searchOpen)} />
          <Link href="/login"><User className="cursor-pointer" /></Link>
          <Link href="/Cart" className="relative">
            <ShoppingCart className="cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
