import Image from "next/image";
import React from "react";

const AllProductCard = ({ product }) => {
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
       <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
