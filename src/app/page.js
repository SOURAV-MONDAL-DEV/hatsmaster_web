import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner/banner";
import WaveBanner from "@/components/WaveBanner/WaveBanner";
import RoundCarousel from "@/components/RoundCarousel/RoundCarousel";

export default function Home() {
  return (
    <section>
      <Banner></Banner>
      <RoundCarousel/>
      {/* <WaveBanner/> */}
    </section>
  );
}
