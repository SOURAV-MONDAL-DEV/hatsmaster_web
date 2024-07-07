import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner/banner";
import WaveBanner from "@/components/WaveBanner/WaveBanner";

export default function Home() {
  return (
    <section>
      <Banner></Banner>
      <WaveBanner/>
    </section>
  );
}
