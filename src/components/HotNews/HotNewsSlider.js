"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import NewsCard from "./NewsCard";







let NewsData = [
    {
      "id": 1,
      "image": "https://example.com/image1.jpg",
      "date": "2024-07-13",
      "title": "First News Article",
      "description": "This is the description of the first news article. It provides a brief overview of the article's content."
    },
    {
      "id": 2,
      "image": "https://example.com/image2.jpg",
      "date": "2024-07-12",
      "title": "Second News Article",
      "description": "This is the description of the second news article. It provides a brief overview of the article's content."
    },
    {
      "id": 3,
      "image": "https://example.com/image3.jpg",
      "date": "2024-07-11",
      "title": "Third News Article",
      "description": "This is the description of the third news article. It provides a brief overview of the article's content."
    },
    {
      "id": 4,
      "image": "https://example.com/image4.jpg",
      "date": "2024-07-10",
      "title": "Fourth News Article",
      "description": "This is the description of the fourth news article. It provides a brief overview of the article's content."
    },
    {
      "id": 5,
      "image": "https://example.com/image5.jpg",
      "date": "2024-07-09",
      "title": "Fifth News Article",
      "description": "This is the description of the fifth news article. It provides a brief overview of the article's content."
    },
    {
      "id": 6,
      "image": "https://example.com/image6.jpg",
      "date": "2024-07-08",
      "title": "Sixth News Article",
      "description": "This is the description of the sixth news article. It provides a brief overview of the article's content."
    }
  ];
  
  
  






export default function HotNewsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        centeredSlides={true}
        loop= {true}
        speed = "4000"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {NewsData.map((news, index) => (
            <SwiperSlide key={index}>
                <NewsCard/>
            </SwiperSlide>
          ))}
        
      </Swiper>
    </>
  );
}
