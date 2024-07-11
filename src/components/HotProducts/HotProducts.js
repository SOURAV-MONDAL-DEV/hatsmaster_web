// components/ProductCategory.js
import Image from "next/image";
import polyesterDTY from "@/images/Yarn/polyester.webp"; // replace with your image path
import acyYarn from "@/images/Yarn/acy.webp"; // replace with your image path
import ProductSlider from "../Carousel/ProductSlider/ProductSlider";

const HotProducts = () => {
  return (
    <section className="relative py-10 bg-gray-600">
      <div className="mx-auto ">
        <div className=" w-full lg:flex m-2 ">
          <div className="lg:w-[30%]  overflow-hidden">
            <div className="text-left ">
              <div className="text-[100px] font-bold text-gray-500 relative top-40 ">
                <span className="inline-block ">Products</span>
              </div>
              <div className=" flex gap-2 relative left-24 ">
                <div className="w-4 h-18 bg-red-600"></div>
                <h2 className="text-5xl lg:-mt-3 font-bold text-white  ">
                  <span className="text-red-600">Hot </span> <br/> Products
                </h2>
              </div>
            </div>
          </div>

          <div className="lg:w-[70%] bg-gray-100">
            <ProductSlider/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotProducts;
