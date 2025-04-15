'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert('Registration successful! You can now log in.');
      router.push('/login');
    } else {
      const errorData = await response.json();
      alert(errorData.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleRegister} className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
}
