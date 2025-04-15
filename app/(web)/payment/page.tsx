'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/app/types';

interface Address {
  name: string;
  street: string;
  city: string;
  pincode: string;
}

export default function PaymentPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [address, setAddress] = useState<Address | null>(null);

  useEffect(() => {
    const cartData: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(cartData);

    const addressData: Address | null = JSON.parse(localStorage.getItem('address') || 'null');
    setAddress(addressData);
  }, []);

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  const handlePayment = () => {
    alert('Payment Successful! Order Placed.');
    localStorage.removeItem('cart'); // Clear cart after payment
  };

  return (
    <div className="container mx-auto p-4 mt-20 bg-white">
      <h1 className="text-2xl font-bold mb-6">Order Summary</h1>

      {/* Shipping Address */}
      <div className="border p-4 rounded-lg mb-4">
        <h2 className="font-bold">Shipping Address:</h2>
        {address ? (
          <p>{address.name}, {address.street}, {address.city} - {address.pincode}</p>
        ) : (
          <p className="text-red-500">No address found</p>
        )}
      </div>

      {/* Cart Items */}
      <div className="border p-4 rounded-lg mb-4">
        <h2 className="font-bold">Cart Items:</h2>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <p>{item.title} x {item.quantity || 1}</p>
              <p>${(item.price * (item.quantity || 1)).toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p className="text-red-500">No items in cart</p>
        )}
      </div>

      {/* Total & Payment */}
      <div className="border-t pt-4 text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button onClick={handlePayment} className="mt-4 bg-green-500 text-white px-6 py-2 rounded">
          Pay Now
        </button>
      </div>
    </div>
  );
}
