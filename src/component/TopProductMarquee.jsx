import React from "react";
import Marquee from "react-fast-marquee";

const data = [
  {
    id: 1,
    title: "Waterproof Sunscreen SPF 50",
  },
  {
    id: 2,
    title: "UV Protection Sunglasses",
  },
  {
    id: 3,
    title: "Portable Mini Fan",
  },
];

const TopProductMarquee = () => {
  return (
    <div className="flex justify-between items-center mt-5 gap-2 py-1 bg-gray-300 container mx-auto">
      <button className="btn bg-red-500 gap-4 ml-2 text-white">
        Top Product
      </button>
      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="flex gap-4 text-orange-500">
          {data.map((item) => (
            <p key={item.id} className="mx-4">
              {item.title}
            </p>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopProductMarquee;
