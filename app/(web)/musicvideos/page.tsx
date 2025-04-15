"use client";

import { motion } from "framer-motion";

const albums = [
  { id: 1, title: "Future Nostalgia", cover: "/images/futurenostalgia.jpg" },
  { id: 2, title: "Dua Lipa", cover: "/images/duaa lipa.jpeg" },
  { id: 3, title: "Club Future Nostalgia", cover: "/images/ClubFutureNostalgia.png" },
  { id: 4, title: "Levitating", cover: "/images/levitating.jpg" },
  { id: 5, title: "Break My Heart", cover: "/images/breakMyheart.jpg" },
  { id: 6, title: "Don't Start Now", cover: "/images/dontstart.jpg" },
  { id: 7, title: "Love Again", cover: "/images/loveagain.jpeg" },
  { id: 8, title: "Hallucinate", cover: "/images/Hallucinate.jpeg" },
  { id: 9, title: "Physical", cover: "/images/Physical.jpg" },
  { id: 10, title: "Be The One", cover: "/images/BetheOne.jpg" },
];

// Floating music note animations
const musicNotes = ["🎵", "🎶", "🎼"];

export default function MusicPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-10 mt-4">
      {/* Floating music notes */}
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute text-3xl opacity-60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        >
          {musicNotes[Math.floor(Math.random() * musicNotes.length)]}
        </motion.span>
      ))}

      {/* Title */}
      <motion.h1
        className="text-5xl font-bold mb-6 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        🎶 Dua Lipa Albums 🎶
      </motion.h1>

      {/* Short Description */}
      <motion.p
        className="text-lg text-gray-300 text-center max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Dua Lipa has revolutionized modern pop music with her dynamic beats and
        powerful vocals. Explore her best albums that have taken the world by
        storm, from **Future Nostalgia** to **Levitating**.
      </motion.p>

      {/* Albums in rows of three */}
      <div className="space-y-8">
        {Array.from({ length: Math.ceil(albums.length / 3) }, (_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-8">
            {albums
              .slice(rowIndex * 3, rowIndex * 3 + 3)
              .map((album) => (
                <motion.div
                  key={album.id}
                  className="flex flex-col items-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: album.id * 0.1 }}
                >
                  <div className="w-72 h-48 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-black hover:scale-105 transition-transform duration-300">
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-lg font-semibold">{album.title}</p>
                </motion.div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
