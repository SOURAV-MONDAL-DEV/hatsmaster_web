import Image from "next/image";
import Banner from "@/images/Banner/banner.jpg";
import bannerImg from "@/images/Banner/banner.jpg";
import stitching from "@/images/Delivery/stitching.png";
import ship from "@/images/Delivery/ship.jpg";
import crossdocking from "@/images/Delivery/cross-docking.jpg";
import Link from "next/link";
import WaveBanner from "@/components/WaveBanner/WaveBanner";
import RoundCarousel from "@/components/RoundCarousel/RoundCarousel";

export default function ContactUsBanner() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Contact Us section</h1> */}
      <div
        className="bg-cover bg-center h-full "
        style={{ backgroundImage: `url(${bannerImg.src})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 lg:grid-cols-2 p-12 bg-white bg-opacity-20  overflow-hidden backdrop-blur-sm ">
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-pulse-fast">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Welcome to{" "}
              <span className="text-highlight font-semibold">Hatsmaster</span>,
              a leading exporter and manufacturer of high-quality headwear. Our
              passion for fashion and commitment to excellence drives us to
              deliver the best products in the industry.
            </p>
          </div>
          <div className="flex items-center justify-center h-full p-4">
            <Image
              src={ship.src}
              alt="Sample Image"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
