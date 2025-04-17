'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

type CartItem = {
  id: number;
  quantity: number;
};

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-opacity-80 bg-gray-900 text-white shadow-md p-3 rounded-2xl mx-auto md:w-3/4 mt-2' : 'text-white p-3'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <div className="hidden md:flex gap-4 text-xs items-center">
          <Link href="/" className="font-bold hover:text-gray-300">Home</Link>
          <Link href="/biography" className="hover:text-gray-300">Biography</Link>
          <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <Link href="/musicvideos" className="hover:text-gray-300">Music</Link>
          <Link href="/shop" className="hover:text-gray-300">ShopNow</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <AnimatePresence>
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
          </AnimatePresence>
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

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            {mobileMenuOpen ? (
              <X className="cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
            ) : (
              <Menu className="cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-900 text-white px-6 py-4 space-y-4 text-sm"
          >
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-gray-700 font-semibold">Home</Link>
            <Link href="/biography" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-gray-700">Biography</Link>
            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-gray-700">Gallery</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-gray-700">Contact</Link>
            <Link href="/musicvideos" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-gray-700">Music</Link>
            <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="block py-2">ShopNow</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
