'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const Biography: React.FC = () => {
  return (
    <>
      <Head>
        <title>Artist Biography - Impact on Society</title>
        <meta
          name="description"
          content="Learn more about the artist and their profound impact on society through music, activism, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        className="text-white min-h-screen flex flex-col items-center px-8 py-16 bg-indigo-300 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 z-10 w-full max-w-3xl mx-auto p-8 bg-indigo-300 bg-opacity-60 rounded-xl"
        >
          <h1
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ transform: 'scale(0.8)' }}
          >
            Biography of an Artist Making Waves in Society
          </h1>
          <p className="text-md md:text-lg mt-4">
            A deep dive into the journey of an artist whose influence is shaping music, culture, and activism.
          </p>
        </motion.div>

        {/* Artist Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-16 z-10 w-full max-w-3xl mx-auto p-8 bg-indigo-300 bg-opacity-60 rounded-xl mb-12"
          style={{ transform: 'translateY(-30px)' }}
        >
          <Image
            src="/images/singerartist.jpg"
            alt="Artist Image"
            width={500}
            height={500}
            className="rounded-full mx-auto shadow-2xl"
          />
        </motion.div>

        {/* Background Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center max-w-3xl mx-auto mb-16 z-10 w-full p-8 bg-indigo-300 bg-opacity-60 rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Background</h2>
          <p className="text-md md:text-lg leading-relaxed">
            [Artist&apos;s Name] is a revolutionary figure in the world of music and activism. Born in [City/Country], [Artist&apos;s Name]
            quickly rose to prominence through their unparalleled musical talent and dedication to societal change.
            Their songs address pressing issues like social justice, mental health, and equality.
          </p>
        </motion.div>

        {/* Early Life */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center max-w-3xl mx-auto mb-16 z-10 w-full p-8 bg-indigo-300 bg-opacity-60 rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Early Life & Musical Journey</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Growing up in [City], [Artist&apos;s Name] was surrounded by music from a young age. Their parents, both
            musicians, introduced them to a variety of genres. Inspired by the sounds of [famous artist or genre], they
            began honing their craft early.
          </p>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-center max-w-3xl mx-auto mb-16 z-10 w-full p-8 bg-indigo-300 bg-opacity-60 rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Key Milestones</h2>
          <ul className="list-disc list-inside text-md md:text-lg">
            <li><strong>Debut Album:</strong> [Album Name], released in [Year]</li>
            <li><strong>Activism:</strong> Advocated for [Cause]</li>
            <li><strong>Awards:</strong> Won [Award] for [Category]</li>
            <li><strong>Collaborations:</strong> Worked with [Other Artist]</li>
          </ul>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-center max-w-3xl mx-auto mb-16 z-10 w-full p-8 bg-indigo-300 bg-opacity-60 rounded-xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Impact on Society</h2>
          <p className="text-md md:text-lg leading-relaxed">
            [Artist&apos;s Name] has used their voice to educate and inspire. Their involvement in [specific cause] has
            empowered millions. They are now a symbol of unity and progress.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-center z-10 w-full p-8 bg-indigo-300 bg-opacity-60 rounded-xl"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-full font-semibold"
            >
              Discover Their Music & Merch
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Biography;
