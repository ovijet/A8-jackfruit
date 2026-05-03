"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-7xl mt-3 rounded-3xl mx-auto">
        {/* Banner Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[200px] md:h-[300px] lg:h-[450px]"
        >
          <Image
            src="/banner.jpg"
            alt="SunCart Banner"
            fill
            priority
            className="object-cover rounded-3xl"
          />

          {/* Overlay */}
          <div className="absolute flex inset-0 bg-black/40 rounded-3xl items-center">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-white px-6 md:px-16 max-w-xl text-left"
            >
              <h1 className="text-3xl md:text-5xl font-bold">
                Summer Sale <br />
                <span className="text-orange-500">50% OFF</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-3 text-sm md:text-lg"
              >
                Discover sunglasses, summer outfits, skincare & beach essentials
                for your perfect summer vibe.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-5 px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-md"
              >
                Shop Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
