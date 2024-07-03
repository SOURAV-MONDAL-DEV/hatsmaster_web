import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/images/banner.jpg";

export default function Home() {
  return (
    <section>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${bannerImg.src})` }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-5xl font-bold">Your Content Here</h1>
        </div>
      </div>
    </section>
  );
}
