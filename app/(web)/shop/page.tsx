// /app/shop/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Product } from '@/app/types';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products/');
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Function to add product to cart
  const addToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = existingCart.find((item: Product) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));

    // Dispatch an event to update the Navbar
    window.dispatchEvent(new Event('cartUpdated'));
    alert(`${product.title} added to cart!`);
  };

  const navigateToProduct = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mt-20">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="border rounded-lg p-4 shadow-lg bg-white"
          whileHover={{ scale: 1.05 }}
        >
          <div 
            onClick={() => navigateToProduct(product.id)} 
            className="cursor-pointer"
          >
            <Image 
              src={product.image} 
              alt={product.title} 
              width={200} 
              height={200} 
              className="mx-auto" 
            />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </motion.div>
      ))}
    </div>
  );
}
