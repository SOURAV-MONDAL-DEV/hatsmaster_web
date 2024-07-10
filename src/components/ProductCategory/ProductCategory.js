// components/ProductCategory.js
import Image from "next/image";
import polyesterDTY from "@/images/Yarn/polyester.webp"; // replace with your image path
import acyYarn from "@/images/Yarn/acy.webp"; // replace with your image path

const ProductCategory = () => {
  return (
    <section className="relative py-10 bg-white">
      <div className="mx-auto ">
        <div className=" w-full lg:flex m-2 ">
          <div className="lg:w-[30%] bg-gray-100 overflow-hidden">
            <div className="text-left ">
              <div className="text-[100px] font-bold text-gray-200 relative top-40 ">
                <span className="inline-block  ">Category</span>
              </div>
              <div className=" flex lg:block lg:transform lg:rotate-90 relative bottom-12 lg:top-32 ">
                <div className="w-4 h-16 lg:ml-6 bg-red-600 lg:rotate-90"></div>
                <h2 className="text-4xl lg:-mt-3 font-bold text-black  ">
                  Product Category
                </h2>
              </div>
            </div>
          </div>

          <div className="lg:w-[70%] bg-gray-100">
            <div className="flex">
              <div className="lg:w-1/2 p-2">
                <div className="relative overflow-hidden">
                  <Image
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-125"
                    src={polyesterDTY}
                    alt="polyester"
                  />
                </div>
                <p className="text-gray-600">Polyester</p>
              </div>
              <div className="lg:w-1/2 p-2">
                <div className="relative overflow-hidden">
                  <Image
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-125"
                    src={acyYarn}
                    alt="acy yarn"
                  />
                </div>
                <p className="text-gray-600">Acrylic Yarn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
