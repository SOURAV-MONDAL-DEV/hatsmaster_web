//import styles from "@/styles/WorkLineShort.module.css"
import Image from "next/image";
import stitching from "@/images/Delivery/stitching.png";
import ship from "@/images/Delivery/ship.jpg";
import crossdocking from "@/images/Delivery/cross-docking.jpg";

export default function WorkLineShort() {
  return (
    <div className="bg-white text-black text-center py-8">
      <div className="flex flex-col w-full lg:w-3/5 p-4 lg:p-0 mx-auto justify-between items-center">
        <div className="flex w-full justify-center items-center md:space-x-8 lg:space-x-8">
          <div className="w-2/5">
            <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border-4 border-highlight animate-spin-slow mb-4 md:mb-0">
              <Image
                src={stitching}
                alt="Making good quality product"
                width={256}
                height={256}
              />
            </div>
          </div>
          <div className="w-3/5 text-left text-sm md:text-base lg:text-lg mt-2">
            <h2 className="text-2xl font-bold text-cyan-400">Making good quality products</h2>
            <p>
              Our experienced team ensures every hat is crafted with precision.
              Our experienced team ensures every hat is crafted with precision.
              Our experienced team ensures every hat is crafted with precision.
            </p>
          </div>
        </div>

        <div className="flex items-center md:space-x-8 lg:space-x-8">
          <div className="w-3/5 text-left text-sm md:text-base lg:text-lg mt-2">
            <h2 className="text-2xl font-bold text-cyan-400">Shipping in time</h2>
            <p>
              We guarantee timely delivery with our efficient logistics network.
              We guarantee timely delivery with our efficient logistics network.
            </p>
          </div>
          <div className="w-2/5 flex justify-end">
            <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border-4 border-highlight animate-spin-slow mb-4 md:mb-0">
              <Image
                src={ship}
                alt="Shipping in time"
                width={256}
                height={256}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center md:space-x-8 lg:space-x-8">
          <div className="w-2/5">
            <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border-4 border-highlight animate-spin-slow mb-4 md:mb-0">
              <Image
                src={crossdocking}
                alt="Ensure hassle-free delivery"
                width={256}
                height={256}
              />
            </div>
          </div>
          <div className="w-3/5 text-left text-sm md:text-base lg:text-lg mt-2">
            <h2 className="text-2xl font-bold text-cyan-400">Ensuring hassle-free delivery</h2>
            <p>
              Our cross-docking process minimizes handling, ensuring your
              products arrive in perfect condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
