"use client";

// components/Carousel.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import "./carousel.module.css";

// Swiper.use([Navigation, Pagination, Autoplay]);

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/path/to/image1.jpg" alt="Slide 1" />
        <div className="slide-content">
          <h2>Professional Yarn Manufacturer</h2>
          <button>Read More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/path/to/image2.jpg" alt="Slide 2" />
        <div className="slide-content">
          <h2>Quality Yarn Products</h2>
          <button>Read More</button>
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default Carousel;
