import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/images/Banner/banner.jpg";
import rotatingCap from "@/images/CapsAndHats/Animeted/RotatingPngCap.gif";
const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-full"
      style={{ backgroundImage: `url(${bannerImg.src})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 lg:grid-cols-2 p-12 bg-black bg-opacity-30 ">
        <div className="flex items-center justify-center h-full  p-4">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left ">
            <h1 className="text-white text-5xl font-bold">
              Premium Appearel And Accessories Manufacturer
            </h1>
            <p className="text-orange-300 text-md mt-2">
              EXCEPTIONAL QUALITY FROM HATSMASTER.
            </p>
            <button className="bg-[#fc0303] text-white text-2xl  py-4 px-8 mt-8 rounded-xs transition duration-300 ease-in-out hover:bg-red-700 ">
              Read More
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center h-full p-4">
          <Image
            src={rotatingCap.src}
            alt="Sample Image"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
