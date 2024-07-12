// components/OurSpecialty.js
import React from "react";
import RotatingBox from "../RotatingBox/RotatingBox";
import in10 from "@/images/icons/index_10.png";
import in11 from "@/images/icons/index_11.png";
import in12 from "@/images/icons/index_12.png";
import in13 from "@/images/icons/index_13.png";

const specialties = [
  {
    title: "PRICE ADVANTAGE",
    description: "We guarantee we always offer the best price to our clients.",
    image: in10,
  },
  {
    title: "PRODUCT QUALITY",
    description: "We have our own testing lab and the most advanced and complete inspection equipment, which can ensure the quality of the products.",
    image: in11,
  },
  {
    title: "EFFICIENT PRODUCTION CAPACITY",
    description: "Our annual production capacity is over 300000 tons, we can meet the needs of different customers with different purchase quantities.",
    image: in12,
  },
  {
    title: "PROMPT DELIVERY",
    description:
      "Normally we can deliver the goods within 20 days after we confirmed the order.",
    image: in13,
  },
];

const OurSpecialty = () => {
  return (
    <section className=" ">
      <div className=" ">
        <div className=" md:grid md:grid-cols-2 lg:grid-cols-4 justify-center">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white group relative "
            >
              <RotatingBox specialty={specialty} />
              <div className="px-2 text-center bg-white max-h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-96 absolute z-20 ">
                <div className=" w-56 h-1 bg-red-600 mx-auto mt-16 mb-8 "> </div>
                <p className="mb-4 text-lg text-gray-800">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpecialty;
