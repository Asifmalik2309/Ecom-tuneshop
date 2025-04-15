'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        document.cookie = 'session=true; path=/'; // Simulating session storage
        router.push('/'); // Redirect to home or desired page
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred, please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <motion.div
        className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center mx-auto text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="w-full">
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition font-semibold"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}