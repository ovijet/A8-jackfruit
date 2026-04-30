import AllProductCard from "./AllProductCard";

const AllProduct = async () => {
  const res = await fetch("https://a8-jackfruit.vercel.app/data.json");
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10 underline">All Products</h1>
      <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto mt-5">
        {data.map((product) => (
          <AllProductCard key={product.id} product={product}></AllProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
