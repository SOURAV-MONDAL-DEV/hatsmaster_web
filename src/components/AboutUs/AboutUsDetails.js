import React from 'react';
import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/images/Banner/banner.jpg";
import rotatingCap from "@/images/CapsAndHats/Animeted/RotatingPngCap.gif";
export default function AboutUsDetails () {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600">
            We'd love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Address</h3>
            <p className="text-gray-600">
              123 Exporter St.<br />
              Dhaka, Bangladesh
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
            <p className="text-gray-600">+880 1234 567890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600">info@hatsmaster.com</p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src={bannerImg}
            alt="Contact Us"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

