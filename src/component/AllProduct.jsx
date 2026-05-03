"use client";

import { useEffect, useState } from "react";
import AllProductCard from "./AllProductCard";
import TopProductMarquee from "./TopProductMarquee";

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getData = async () => {
      // const res = await fetch("https://a8-jackfruit.vercel.app/data.json");
      const res = await fetch("./data.json");
      const result = await res.json();
      setData(result);
    };

    getData();
  }, []);

  const visibleData = showAll ? data.slice(0, 6) : data.slice(0, 3);

  if (data.length === 0) {
    return <span className="loading loading-spinner loading-md mx-auto"></span>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10 underline">
        All Products
      </h1>

      <TopProductMarquee />

      {/* View All Button */}
      <div className="flex justify-end max-w-7xl mx-auto mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-orange-500 font-semibold hover:underline"
        >
          {showAll ? "Show Less" : "View All Product"}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-7xl mx-auto mt-5">
        {visibleData.map((product) => (
          <AllProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
