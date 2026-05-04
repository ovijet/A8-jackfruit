"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/sunBanner.png",
    title: "Summer Sale 50% OFF",
    desc: "Hot deals on sunglasses & outfits",
  },
  {
    id: 2,
    image: "/sunBanner2.png",
    title: "Beach Essentials",
    desc: "Get ready for beach vibes",
  },
  {
    id: 3,
    image: "/sunBanner2.png",
    title: "Skincare Collection",
    desc: "Stay fresh this summer",
  },
];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  //  Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <div className="w-full max-w-7xl mt-3 rounded-3xl mx-auto">
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[450px] overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt="slide"
              fill
              className="object-fit-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="text-white px-6 md:px-16 max-w-xl">
                <h1 className="text-3xl md:text-5xl font-bold">
                  {current.title}
                </h1>
                <p className="mt-3">{current.desc}</p>

                <button className="mt-5 px-6 py-2 bg-orange-500 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 🔘 Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-orange-500" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
