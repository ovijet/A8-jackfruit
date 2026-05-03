import { Card } from "@heroui/react";
import React from "react";
import { FaCloudSun } from "react-icons/fa";
import { SiNike, SiPuma, SiZara } from "react-icons/si";
import { TbBrandSketch } from "react-icons/tb";

const SummerCareTip = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
         Summer Essentials
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 🔹 LEFT CARD */}
        <Card className="p-6 shadow-lg rounded-2xl bg-[#FDF8E9] hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaCloudSun className="text-orange-500 text-2xl" />
            Summer Care Tips
          </h2>

          <div className="space-y-2 text-gray-700">
            <p> Stay hydrated — Drink plenty of water</p>
            <p> Use sunscreen — Protect your skin</p>
            <p> Wear sunglasses — Protect your eyes</p>
            <p> Light clothes — Stay cool & comfy</p>
          </div>
        </Card>

        {/* 🔹 RIGHT CARD */}
        <Card className="p-6 shadow-lg rounded-2xl bg-[#E9F3FD] hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-center">
            <TbBrandSketch /> Top Brands
          </h2>

          <div className="flex justify-around items-center text-5xl">
            <div className="hover:scale-110 transition">
              <SiPuma />
            </div>
            <div className="hover:scale-110 transition">
              <SiZara />
            </div>
            <div className="hover:scale-110 transition">
              <SiNike />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SummerCareTip;
