import React from 'react';
import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/images/banner.jpg";
import rotatingCap from "@/images/RotatingPngCap.gif";
const Banner = () => {
  return (
    <div
        className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${bannerImg.src})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 lg:grid-cols-2 p-12 bg-white bg-opacity-20 ">
          <div className="flex items-center justify-center h-full  p-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-[#a60707] text-5xl font-bold">Premium Appearel And Accessories Manufacturer</h1>
              <p className="text-[#f7760c] text-md mt-2">EXCEPTIONAL QUALITY FROM HATSMASTER.</p>
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
}

export default Banner;
