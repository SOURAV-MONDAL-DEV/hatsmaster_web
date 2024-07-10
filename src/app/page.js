import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner/banner";
import WaveBanner from "@/components/WaveBanner/WaveBanner";
import RoundCarousel from "@/components/RoundCarousel/RoundCarousel";
import Carousel from "@/components/Carousel/carousel";
import AutoCarousel from "@/components/Carousel/AutoCarousel/autoCarousel";
import ProductCategory from "@/components/ProductCategory/ProductCategory";
import AboutSection from "@/components/AboutUs/AboutSection";

export default function Home() {
  return (
    <section>
      <AutoCarousel/>
      <ProductCategory/>
      <AboutSection/>
      {/* <Carousel/> */}
      {/* <Banner></Banner> */}
      {/* <RoundCarousel/> */}
      {/* <WaveBanner/> */}
    </section>
  );
}
