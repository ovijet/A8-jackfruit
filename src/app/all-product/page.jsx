import AllProductCard from "@/component/AllProductCard";

const AllProducts = async () => {
  const res = await fetch("https://a8-jackfruit.vercel.app/data.json");

  const data = await res.json();
  console.log(data, "ovi");

  return (
    <div>
      <h1 className="text-center text-3xl font-bold underline">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-7xl mx-auto">
        {data.map((product) => (
          <AllProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
