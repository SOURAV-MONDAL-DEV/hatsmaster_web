// components/OurSpecialty.js
import React from "react";
import RotatingBox from "../RotatingBox/RotatingBox";

const specialties = [
  {
    title: "PRICE ADVANTAGE",
    description: "We guarantee we always offer the best price to our clients.",
  },
  {
    title: "PRODUCT QUALITY",
    description: "We have our own testing lab and the most advanced and complete inspection equipment, which can ensure the quality of the products.",
  },
  {
    title: "EFFICIENT PRODUCTION CAPACITY",
    description: "Our annual production capacity is over 300000 tons, we can meet the needs of different customers with different purchase quantities.",
  },
  {
    title: "PROMPT DELIVERY",
    description:
      "Normally we can deliver the goods within 20 days after we confirmed the order.",
  },
];

const OurSpecialty = () => {
  return (
    <section className=" ">
      <div className=" ">
        <h2 className="text-3xl font-bold ">Our Specialty</h2>
        <div className=" md:grid md:grid-cols-2 lg:grid-cols-4 justify-center">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white group relative "
            >
              <RotatingBox />
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
