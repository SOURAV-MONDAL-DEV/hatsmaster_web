import ManyHats from "@/images/CapsAndHats/RegularImage/ManyHats.jpg";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full h-full ">
      <img
        src={ManyHats.src}
        alt="textile rolls background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 lg:flex items-center justify-between h-full p-6 lg:px-48 lg:py-24 ">
        <div className="text-white max-w-sm">
          <div className=" flex gap-2 relative  ">
            <div className="w-4 h-18 bg-red-600"></div>
            <h2 className="text-4xl font-bold mb-3">Why choose us</h2>
          </div>
          <p className="text-lg">
            We specialize in sourcing and selling a wide variety of textile
            products, ensuring a transparent approach, quality materials and
            speed of shipment.
          </p>
        </div>
        <h1 className="text-6xl font-bold text-white">Advantage</h1>
      </div>
    </section>
  );
}
