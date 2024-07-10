// components/AboutSection.js
import Image from 'next/image';
import buildingImage from '@/images/Yarn/factory.jpg'; // Adjust this path to your image location

export default function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row items-center lg:mx-44">
      <div className="w-full md:w-1/2">
        <Image
          src={buildingImage.src}
          alt="Building"
          width={700}
          height={475}
        />
      </div>
      <div className="w-full md:w-1/2 p-4 lg:ml-12">
        <h2 className="text-3xl font-bold mb-4">Professional Apperarel manufacturer</h2>
        <p className="mb-4">
          Hengke Textile Technology Co., Ltd. is a China Polyester yarn and ACY yarn Factory, Nylon yarn Manufacturers.
          We are headquartered in Zhejiang, the company was founded by the enterprising Mr. Wang, the main goal is to
          become a major brand in the field of indentation and export. Focus on project commitment, speed of work, and
          quality practices.
        </p>
        <button className="bg-gray-800 text-white py-2 px-4 rounded">Read More</button>
      </div>
    </div>
  );
}
