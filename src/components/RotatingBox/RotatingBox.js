"use client"

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const RotatingBox = ({ specialty }) => {
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
        <section className='hover:shadow-2xl group relative'>
          <div className="flex justify-center items-center  m-auto p-1 ">
            <div className="relative w-60 h-60 flex items-center justify-center bg-white ">
                <div
                    ref={rotatingBorderRef}
                    className="absolute inset-0 border-[4px] border-dashed border-gray-300 rounded-full"
                ></div>
                <div className=" flex flex-col items-center justify-center z-10 text-center">
                    <Image src={specialty.image} alt={specialty.title} width={64} />
                    <p className="mt-4 text-lg ">{specialty.title}</p>
                </div>
            </div>
        </div>
        <div className="px-2 text-center bg-white max-h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:max-h-96 absolute z-20 ">
                <div className=" w-56 h-1 bg-red-600 mx-auto mt-16 mb-8 "> </div>
                <p className="mb-4 text-lg text-gray-800">{specialty.description}</p>
              </div>
        </section>
    );
};

export default RotatingBox;
