import Image from 'next/image';
import React from 'react';
import featureClickImg from "../../assets/featured_clicknship.svg"
import stampImg from "../../assets/stamps.svg"
import mailmanImg from "../../assets/mailman.svg"

export default function SecondSection() {
  return (
    <div className="px-8 py-10 bg-[#F7F7F7]">
      <div className="custom_container flex flex-col sm:flex-row !p-0">
        <div className="w-full flex flex-col items-center gap-2 p-3 py-6">
          <Image src={featureClickImg} width={40} height={40} alt="Logo" />
          <h2 className="text-lg sm:text-xl font-bold">Click-N-Ship®</h2>
          <p className="text-gray-700">Pay for and print shipping labels.</p>
        </div>
        <div className="w-full border-x-0 border-y-2 sm:border-x-2 sm:border-y-0 flex flex-col items-center gap-2 p-3 py-6">
          <Image src={stampImg} width={56} height={56} alt="Logo" />
          <h2 className="text-lg sm:text-xl font-bold">Stamps & Supplies</h2>
          <div className="">
            <p className="text-gray-700">Forever® Stamps: $0.78</p>
            <p className="text-gray-700">Postcard Stamps: $0.61</p>
          </div>
        </div>
        <div className="w-full border-none flex flex-col items-center gap-2 p-3 py-6">
          <Image src={mailmanImg} width={56} height={56} alt="Logo" />
          <h2 className="text-lg sm:text-xl font-bold">Informed Delivery®</h2>
          <p className="text-gray-700">Digitally preview your incoming mail.</p>
        </div>
      </div>
    </div>
  );
}
