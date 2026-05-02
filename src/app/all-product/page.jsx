"use client";

import AllProductCard from "@/component/AllProductCard";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
  // const res = await fetch("https://a8-jackfruit.vercel.app/data.json");
  // const res = await fetch("./data.json")
  // const data = await res.json();
  // console.log(data, "ovi");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // const res = await fetch("https://a8-jackfruit.vercel.app/data.json");
      const res = await fetch("./data.json");
      const result = await res.json();
      setData(result);
    };

    getData();
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold underline">All Products</h1>

      <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto mt-5">
        {data.map((product) => (
          <AllProductCard key={product.id} product={product}></AllProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
