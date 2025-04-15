'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import { Link } from 'lucide-react';

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
        className="text-white min-h-screen flex flex-col items-center px-8 py-16 bg-indigo-300 mt-4" // Single background color applied here
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 z-10 w-full max-w-3xl mx-auto p-8 bg-indigo-300 bg-opacity-60 rounded-xl" // Background for header content
        >
          {/* Heading with smaller size by 20% */}
          <h1
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ transform: 'scale(0.8)' }} // Scales down the heading to 80% of its original size
          >
            Biography of an Artist Making Waves in Society
          </h1>
          <p className="text-md md:text-lg mt-4">
            A deep dive into the journey of an artist whose influence is shaping music, culture, and activism.
          </p>
        </motion.div>

        {/* Artist Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-16 z-10 w-full max-w-3xl mx-auto p-8 bg-indigo-300 bg-opacity-60 rounded-xl mb-12" // Background for image section
          style={{ transform: 'translateY(-30px)' }} // This moves the image 30px upwards
        >
          <Image
            src="/images/singerartist.jpg"
            alt="Artist Image"
            width={500}
            height={500}
            className="rounded-full mx-auto shadow-2xl"
          />
        </motion.div>

        {/* Artist Description Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center max-w-3xl mx-auto mb-16 z-10 w-full p-8 bg-indigo-300 bg-opacity-60 rounded-xl" // Background for description section
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Background</h2>
          <p className="text-md md:text-lg leading-relaxed">
            [Artist's Name] is a revolutionary figure in the world of music and activism. Born in [City/Country], [Artist's Name]
            quickly rose to prominence through their unparalleled musical talent and dedication to societal change.
            Their songs address pressing issues like social justice, mental health, and equality, making them a voice
            for the voiceless. Through their art, they have sparked movements and brought light to struggles faced by
            marginalized communities.
          </p>
        </motion.div>

        {/* Early Life and Musical Journey */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center max-w-3xl mx-auto mb-16 z-10 w-full p-8 bg-indigo-300 bg-opacity-60 rounded-xl" // Background for early life section
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Early Life & Musical Journey</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Growing up in [City], [Artist's Name] was surrounded by music from a young age. Their parents, both
            musicians, introduced them to a variety of genres, from classic rock to contemporary hip-hop. Inspired by
            the sounds of [famous artist or genre], they began honing their craft at an early age. By the time they
            were in their teens, they had already started writing their own songs, combining meaningful lyrics with
            a powerful, unique sound.
          </p>
        </motion.div>

        {/* Key Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-center max-w-3xl mx-auto mb-16 z-10 w-full p-8 bg-indigo-300 bg-opacity-60 rounded-xl" // Background for milestones section
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Key Milestones</h2>
          <ul className="list-disc list-inside text-md md:text-lg">
            <li><strong>Debut Album Release:</strong> [Album Name] - Released in [Year], it quickly became a chart-topping hit.</li>
            <li><strong>Social Activism:</strong> [Artist's Name] became an advocate for [Cause], using their platform to raise awareness.</li>
            <li><strong>Awards & Recognition:</strong> Won [Award] in [Year] for [Category], cementing their status as a global influencer.</li>
            <li><strong>Collaborations:</strong> Worked with artists like [Artist's Name] on tracks such as [Song Name].</li>
          </ul>
        </motion.div>

        {/* Impact on Society Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-center max-w-3xl mx-auto mb-16 z-10 w-full p-8 bg-indigo-300 bg-opacity-60 rounded-xl" // Background for impact on society section
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Impact on Society</h2>
          <p className="text-md md:text-lg leading-relaxed">
            [Artist's Name] has used their voice to not only entertain but to educate and inspire. Through their lyrics,
            they address topics like [mention topics such as social justice, mental health awareness, LGBTQ+ rights, etc.],
            offering a fresh perspective on issues that matter. Their involvement in [specific cause] has inspired millions
            to take action and be more aware of the issues that plague our society today. [Artist's Name]'s impact goes
            beyond music; they have become a symbol of hope, unity, and change.
          </p>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-center z-10 w-full p-8 bg-indigo-300 bg-opacity-60 rounded-xl" // Background for CTA section
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
