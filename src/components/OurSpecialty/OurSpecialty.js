// components/OurSpecialty.js
import React from 'react';
import RotatingBox from '../RotatingBox/RotatingBox';

const specialties = [
  { title: 'Quality Materials', description: 'We use the best quality materials for all our hats and caps.' },
  { title: 'Custom Designs', description: 'We offer a wide range of custom designs to meet your needs.' },
  { title: 'Fast Shipping', description: 'We ensure fast and reliable shipping for all our products.' },
  { title: 'Affordable Prices', description: 'Our products are priced competitively without compromising quality.' },
];

const OurSpecialty = () => {
  return (
    <section className="bg-gray-400 ">
      <div className=" ">
        <h2 className="text-3xl font-bold ">Our Specialty</h2>
        <div className=" md:grid md:grid-cols-2 lg:grid-cols-4 justify-center">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white  shadow-lg rounded-lg ">
              <RotatingBox/>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default OurSpecialty;
