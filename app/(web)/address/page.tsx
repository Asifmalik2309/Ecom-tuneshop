'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddressPage() {
  const router = useRouter();
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    pincode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('address', JSON.stringify(address));
    router.push('/payment');
  };

  return (
    <div className="container mx-auto p-4 mt-20 bg-white">
      <h1 className="text-2xl font-bold mb-6">Shipping Address</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="street" placeholder="Street Address" required onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="city" placeholder="City" required onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="pincode" placeholder="Pincode" required onChange={handleChange} className="border p-2 rounded"/>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Proceed to Payment</button>
      </form>
    </div>
  );
}
