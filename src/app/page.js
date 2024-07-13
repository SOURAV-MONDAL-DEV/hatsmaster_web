import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner/banner";
import WaveBanner from "@/components/WaveBanner/WaveBanner";
import RoundCarousel from "@/components/RoundCarousel/RoundCarousel";
import Carousel from "@/components/Carousel/carousel";
import AutoCarousel from "@/components/Carousel/AutoCarousel/autoCarousel";
import ProductCategory from "@/components/ProductCategory/ProductCategory";
import AboutSection from "@/components/AboutUs/AboutSection";
import ProductSlider from "@/components/Carousel/ProductSlider/ProductSlider";
import HotProducts from "@/components/HotProducts/HotProducts";
import RotatingBox from "@/components/RotatingBox/RotatingBox";
import OurSpecialty from "@/components/OurSpecialty/OurSpecialty";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import HotNews from "@/components/HotNews/HotNews";

export default function Home() {
  return (
    <section>
      <AutoCarousel/>
      <ProductCategory/>
      <AboutSection/>
      <HotProducts/>
      <OurSpecialty/>    
      <WhyChooseUs/>
      <HotNews/>  


      {/* <Carousel/> */}
      {/* <Banner></Banner> */}
      {/* <RoundCarousel/> */}
      {/* <WaveBanner/> */}
    </section>
  );
}
