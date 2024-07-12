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
            <RotatingBox key={index} specialty={specialty} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpecialty;
