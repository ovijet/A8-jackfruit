import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="w-full max-w-7xl mt-3 rounded-3xl mx-auto">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/banner.jpg"
          alt="SunCart Banner"
          fill
          priority
          className="object-cover rounded-3xl"
        />

        {/* Overlay */}
        <div className="absolute  flex inset-0 bg-black/40 rounded-3xl items-center">
          <div className="text-white px-6 md:px-16 max-w-xl text-left">
            <h1 className="text-3xl md:text-5xl font-bold">
              Summer Sale <br />{" "}
              <span className="text-orange-500">50% OFF</span>
            </h1>

            <p className="mt-3 text-sm md:text-lg">
              Discover sunglasses, summer outfits, skincare & beach essentials
              for your perfect summer vibe.
            </p>

            <button className="mt-5 px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {/* <div className="p-6 max-w-7xl mx-auto">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div> */}
    </div>
  );
};

export default HomePage;
