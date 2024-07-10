// components/ProductCategory.js
import Image from "next/image";
import polyesterDTY from "@/images/Yarn/polyester.webp"; // replace with your image path
import acyYarn from "@/images/Yarn/acy.webp"; // replace with your image path

const ProductCategory = () => {
  return (
    <section className="relative py-10 bg-white">
      <div className="mx-auto ">
        <div className=" w-full lg:flex m-2 lg:gap-8">
          <div className="lg:w-1/3 bg-gray-100">
            <div className="text-left">
              <div className="text-6xl font-bold text-gray-300">
                <span className="inline-block   ">Category</span>
              </div>
              <div className="text-6xl font-bold text-gray-300">
                <span className="inline-block   ">Category</span>
              </div>
              
              <div className=" flex lg:block lg:transform lg:rotate-90" >
                <div className="w-4 h-16 lg:ml-6 bg-red-600 lg:rotate-90"></div>
                <h2 className="text-4xl lg:-mt-3 font-bold text-black  ">
                  Product Category
                </h2>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-gray-100">
            <h3 className="text-2xl font-bold leading-8 tracking-tight">
              Column 2
            </h3>
            <p className="mt-2 text-gray-500">
              Describe your product category here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
