"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(result.error || "Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
            placeholder="Type your message"
            required
          />
        </div>

        <motion.button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {status && <p className="mt-4 text-center text-green-700">{status}</p>}
      </motion.form>
    </div>
  );
}
