import Image from "next/image";
import Banner from "@/images/Banner/banner.jpg";
import bannerImg from "@/images/Banner/banner.jpg";
import stitching from "@/images/Delivery/stitching.png"
import ship from "@/images/Delivery/ship.jpg"
import crossdocking from "@/images/Delivery/cross-docking.jpg"


export default function ContactUsBanner() {
    return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Contact Us section</h1> */}
      <div
      className="bg-cover bg-center h-full "
      style={{ backgroundImage: `url(${bannerImg.src})` }}
    >
      <div className="relative bg-primary text-white py-16 px-8 md:px-16 lg:px-32 overflow-hidden backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-accent opacity-30 transform -skew-x-12"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-highlight opacity-30 transform skew-x-12"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-pulse-fast">Contact Us</h1>
        <p className="text-lg md:text-xl mb-8">
          Welcome to <span className="text-highlight font-semibold">Hatsmaster</span>, 
          a leading exporter and manufacturer of high-quality headwear. 
          Our passion for fashion and commitment to excellence drives us to deliver the best products in the industry.
        </p>
        <div className="flex flex-wrap justify-center items-center space-x-6 md:space-x-4 lg:space-x-6">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-highlight animate-spin-slow mb-4 md:mb-0">
            <Image src={stitching} alt="Hat 1" width={192} height={192} />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-highlight animate-spin-slow mb-4 md:mb-0">
            <Image src={ship} alt="Hat 2" width={192} height={192} />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-highlight animate-spin-slow mb-4 md:mb-0">
            <Image src={crossdocking} alt="Hat 3" width={192} height={192} />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
  }
  