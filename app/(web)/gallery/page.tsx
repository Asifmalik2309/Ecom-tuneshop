'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/images/gallery1.jpeg',
  '/images/gallery2.jpeg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.webp',
  '/images/gallery6.jpg',
  '/images/galley7.jpg',
  '/images/gallery8.jpeg',
  '/images/gallery9.jpg',
  '/images/gallery10.jpg',
];
export default function GalleryPage() { 
  return ( 
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-10 mt-3"> 
      <h1 className="text-4xl font-bold text-white mb-6">Gallery</h1> 
      <p className="text-lg text-gray-300 mb-10">Explore the stunning visuals of the Dua Lipa Gallery section.</p> 
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-7xl" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }} 
      > 
        {images.map((src, index) => ( 
          <motion.div 
            key={index} 
            className="relative overflow-hidden rounded-2xl cursor-pointer mb-6" 
            initial={{ scale: 0.9 }} 
            animate={{ scale: 1 }} 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }} 
            transition={{ duration: 0.3 }} 
          > 
            <Image 
              src={src} 
              alt={`Gallery Image ${index + 1}`} 
              width={400} 
              height={400} 
              className="w-full h-full rounded-2xl object-cover" 
            /> 
          </motion.div> 
        ))} 
      </motion.div> 
    </div> 
  ); 
} 