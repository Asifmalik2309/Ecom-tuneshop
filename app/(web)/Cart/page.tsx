'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '@/app/types';

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  // Load cart from localStorage when component mounts or cartUpdated event fires
  useEffect(() => {
    const loadCart = () => {
      const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(cartData);
    };

    loadCart();
    window.addEventListener('cartUpdated', loadCart);

    return () => window.removeEventListener('cartUpdated', loadCart);
  }, []);

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.dispatchEvent(new Event('cartUpdated')); // 🔥 Real-time update trigger
  };

  const removeItem = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.dispatchEvent(new Event('cartUpdated')); // 🔥 Real-time update trigger
  };

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="container mx-auto p-4 mt-20 bg-white">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-10">
          <p>Your cart is empty</p>
          <Link href="/shop" className="text-blue-500 mt-2 inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg flex justify-between items-center">
              {/* Product Image & Info */}
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p>${item.price}</p>
                </div>
              </div>

              {/* Quantity & Remove Buttons */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                    className="px-3 py-1 border-r"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity || 1}</span>
                  <button
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                    className="px-3 py-1 border-l"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price & Checkout Button */}
          <div className="border-t pt-4 mt-4 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button 
              onClick={() => router.push('/address')}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
