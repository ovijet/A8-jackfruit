"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card } from "@heroui/react";

const AllProductCard = ({ product }) => {
  // console.log(product.id);
  const { name, image, price, rating } = product;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white h-full rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        {/* Left Side Image */}
        <figure className="overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={500}
            height={300}
            className="transition-transform duration-300 ease-in-out hover:scale-105 object-cover w-full h-full"
          />
        </figure>

        {/* Right Side Content */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
            <p className="text-sm text-gray-500 mb-2">{name}</p>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-orange-500 flex items-center gap-1 text-sm">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStarHalfAlt />
              </span>
              <span className="font-medium text-orange-500">{rating}</span>
            </div>
            {/* Price */}
            <p className="text-xl font-semibold  text-orange-500">
              ${price.toFixed(2)}
            </p>
          </div>

          {/* Button */}
          <Link
            href={`/product/${product.id}`}
            className="btn border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white mt-5 rounded-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AllProductCard;
