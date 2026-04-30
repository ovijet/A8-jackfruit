import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://a8-jackfruit.vercel.app/data.json");
  const data = await res.json();
  const product = await data.find((item) => item.id === Number(id));
  console.log(product);
  return <div>{product.name}</div>;
};

export default page;
