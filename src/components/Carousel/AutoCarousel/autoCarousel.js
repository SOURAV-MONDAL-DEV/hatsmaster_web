"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './autoCarousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner from '@/components/Banner/banner';

export default function AutoCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop= {true}
        speed = "1000"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Banner/></SwiperSlide>
        <SwiperSlide><Banner/></SwiperSlide>
      </Swiper>
    </>
  );
}