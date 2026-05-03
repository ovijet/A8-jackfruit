import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://a8-jackfruit.vercel.app/data.json");
  const data = await res.json();
  const product = await data.find((item) => item.id === Number(id));
  console.log(product);
  const { name, image, price, rating, brand, description, category, stock } =
    product;
  if (!product) {
    return <p>Product not found</p>;
  }

  const getCategoryColor = (category) => {
    if (category === "Accessories") return "bg-green-500";
    if (category === "Footwear") return "bg-orange-500";
    if (category === "Electronics") return "bg-yellow-500";
    if (category === "Skincare") return "bg-[#D6764B]";
    return "bg-gray-500";
  };
  return (
    <div className="card lg:card-side bg-base-100 h-[60vh] space-y-5 relative shadow-sm mt-10 max-w-7xl mx-auto">
      <figure className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="transition-transform duration-300 ease-in-out hover:scale-105 object-cover w-full h-full"
        />
      </figure>
      <Chip className={`absolute top-4 left-4 mt-2 ml-1 ${getCategoryColor(category)} text-white`}>
        {category}
      </Chip>
      <div className="p-6 flex flex-col justify-between">
        <div className="space-y-3">
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
            <span className="font-medium">{rating} (120 Reviews)</span>
          </div>
          {/* Price */}
          <div className="font-semibold space-y-3">
            <p className="text-xl font-semibold">${price.toFixed(2)}</p>
            <p className="text-xl font-semibold">Brand: {brand}</p>
            <p>Category: {category}</p>
            <p>Stock: {stock}</p>
            <p>Description: {description}</p>
          </div>
        </div>

        {/* Button */}
        <button className="btn border text-[17px] max-w-[200px] border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white mt-5 rounded-sm">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default page;
