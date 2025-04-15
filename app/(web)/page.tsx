'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Music & Merch - Home</title>
        <meta name="description" content="Your destination for music and music-related clothing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-screen w-screen overflow-hidden mt-4">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/4962796-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
             Style by <br /> DUAA LIPA
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore the latest  and exclusive merchandise.
          </p>
          <div className="flex space-x-4">
            {/* <Link href="/musicvideos">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-full font-semibold"
              >
                Music
              </motion.button>
            </Link> */}
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="
bg-orange-500 hover:bg-orange-700 py-3 px-6 rounded-full font-semibold"
              >
                Shop Merch Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Featured Products Section */}
      <section className="bg-gray-900 text-white py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image src="/images/album1.jpg" alt="Album 1" width={180} height={180} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Limited Edition Vinyl</h3>
            <p className="text-gray-400 mt-2">Exclusive collector’s item</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image src="/images/bandtshirt.jpeg" alt="Band T-Shirt" width={180} height={180} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Band T-Shirt</h3>
            <p className="text-gray-400 mt-2">Show your support with style</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image src="/images/hoodie.avif" alt="Exclusive Hoodie" width={180} height={180} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Exclusive Hoodie</h3>
            <p className="text-gray-400 mt-2">Stay warm, stay stylish</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image src="/images/album1.jpg" alt="Album 1" width={180} height={180} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Limited Edition Vinyl</h3>
            <p className="text-gray-400 mt-2">Exclusive collector’s item</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image src="/images/bandtshirt.jpeg" alt="Band T-Shirt" width={180} height={180} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Band T-Shirt</h3>
            <p className="text-gray-400 mt-2">Show your support with style</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image src="/images/hoodie.avif" alt="Exclusive Hoodie" width={180} height={180} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Exclusive Hoodie</h3>
            <p className="text-gray-400 mt-2">Stay warm, stay stylish</p>
          </div>
        </div>
      </section>

      {/* Trending Music Section */}
      <section className="bg-black text-white py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Trending Music</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image src="/images/singleRelease.jpeg" alt="Artist 1" width={180} height={180} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">New Single Release</h3>
            <p className="text-gray-400 mt-2">Listen to the latest hit now</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image src="/images/topcharting.webp" alt="Artist 2" width={180} height={180} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Top Charting Album</h3>
            <p className="text-gray-400 mt-2">Discover the hottest albums</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image src="/images/liveconcert.jpeg" alt="Live Concert" width={180} height={180} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Live Concerts</h3>
            <p className="text-gray-400 mt-2">Experience the music live</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image src="/images/newRelease1.jpg" alt="Artist 1" width={180} height={180} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">New Single Release</h3>
            <p className="text-gray-400 mt-2">Listen to the latest hit now</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image src="/images/topCharting1.jpg" alt="Artist 2" width={180} height={180} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Top Charting Album</h3>
            <p className="text-gray-400 mt-2">Discover the hottest albums</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
            <Image src="/images/liveConcert1.jpg" alt="Live Concert" width={180} height={180} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Live Concerts</h3>
            <p className="text-gray-400 mt-2">Experience the music live</p>
          </div>
        </div>
      </section>

      
      {/* Artist Spotlight Section */}
      {/* <section className="bg-gray-800 text-white py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Artist Spotlight</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-700 p-6 rounded-lg w-60">
            <Image
              src="/images/artistspotlight.avif"
              alt="Dua Lipa"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">DUAA LIPA</h3>
            <p className="text-gray-400 mt-2">Discover her latest music and projects.</p>
            <Link href="/artist/duaalipa">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full mt-4"
              >
                Learn More
              </motion.button>
            </Link>
          </div> */}
          {/* Add more artists here */}
        {/* </div>
      </section> */}
    </>
  );
};

export default HomePage;
