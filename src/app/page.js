import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div id="carousel" className="relative">
        <div
          id="slide01"
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('path/to/banner-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-white px-6">
            <h1 className="text-4xl font-bold mb-4">
              Premium Appearel And Accessories Manufacturer
            </h1>
            <p className="text-lg mb-8">EXCEPTIONAL QUALITY FROM HATSMASTER.</p>
            <Link
              href="#"
              className="bg-red-500 hover:bg-red-400 text-white py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
