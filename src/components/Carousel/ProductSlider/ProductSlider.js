"use client";
import Image from "next/image";
import polyesterDTY from "@/images/Yarn/polyester.webp"; // replace with your image path
import acyYarn from "@/images/Yarn/acy.webp"; // replace with your image path


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function ProductSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        centeredSlides={true}
        loop= {true}
        speed = "4000"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-2/3"
      >
        <SwiperSlide>
          <div className=" p-0">
            <div className="relative overflow-hidden">
              <Image
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-125"
                src={polyesterDTY}
                alt="polyester"
              />
            </div>
            <p className="text-gray-600">Polyester</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-0">
            <div className="relative overflow-hidden">
              <Image
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-125"
                src={polyesterDTY}
                alt="polyester"
              />
            </div>
            <p className="text-gray-600">Polyester</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-0">
            <div className="relative overflow-hidden">
              <Image
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-125"
                src={polyesterDTY}
                alt="polyester"
              />
            </div>
            <p className="text-gray-600">Polyester</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-0">
            <div className="relative overflow-hidden">
              <Image
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-125"
                src={polyesterDTY}
                alt="polyester"
              />
            </div>
            <p className="text-gray-600">Polyester</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-0">
            <div className="relative overflow-hidden">
              <Image
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-125"
                src={polyesterDTY}
                alt="polyester"
              />
            </div>
            <p className="text-gray-600">Polyester</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-0">
            <div className="relative overflow-hidden">
              <Image
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-125"
                src={polyesterDTY}
                alt="polyester"
              />
            </div>
            <p className="text-gray-600">Polyester</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
