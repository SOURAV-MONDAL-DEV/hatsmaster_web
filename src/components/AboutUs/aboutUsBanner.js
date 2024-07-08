import Image from "next/image";
import bannerImg from "@/images/Banner/banner.jpg";
import garments2 from "@/images/Banner/garments2.png";

import stitching from "@/images/Delivery/stitching.png";
import ship from "@/images/Delivery/ship.jpg";
import crossdocking from "@/images/Delivery/cross-docking.jpg";

export default function AboutUsBanner() {
  return (
    // <div>
    //   <h1 className="text-3xl font-bold underline">About Us section</h1>

    // </div>

    <div
      className="bg-cover bg-center h-full "
      style={{ backgroundImage: `url(${garments2.src})` }}
    >
      <div className="relative bg-primary text-white py-16 px-8 md:px-16 lg:px-32 overflow-hidden backdrop-blur-[2px]">
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-pulse-fast">
      About Us
    </h1>
    <p className="text-lg md:text-xl mb-8">
      Welcome to{" "}
      <span className="text-highlight font-semibold">Hatsmaster</span>, a
      leading exporter and manufacturer of high-quality headwear. Our
      passion for fashion and commitment to excellence drives us to
      deliver the best products in the industry.
    </p>
  </div>
</div>

    </div>
  );
}
