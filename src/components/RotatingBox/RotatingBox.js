"use client"

import Image from 'next/image';
import in10 from "@/images/icons/index_10.png";
import in11 from "@/images/icons/index_11.png";
import in12 from "@/images/icons/index_12.png";
import in13 from "@/images/icons/index_13.png";

import { useEffect, useRef } from 'react';
const RotatingBox = () => {
    const rotatingBorderRef = useRef(null);
  
    useEffect(() => {
      const element = rotatingBorderRef.current;
      let rotation = 0;
  
      const rotate = () => {
        rotation += 0.3; // Decreased value to slow down the rotation
        element.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(rotate);
      };
  
      rotate();
    }, []);
  
    return (
      <div className="flex justify-center items-center  m-auto p-1 ">
        <div className="relative w-60 h-60 flex items-center justify-center bg-white ">
          <div
            ref={rotatingBorderRef}
            className="absolute inset-0 border-[4px] border-dashed border-gray-300 rounded-full"
          ></div>
          <div className=" flex flex-col items-center justify-center z-10 text-center">
            <Image src={in10} alt="Icon" width={64} />
            <p className="mt-4 text-xl font-semibold">Your Text Here</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default RotatingBox;