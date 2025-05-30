'use client';

import Image from 'next/image';
import TrackingForm from '../trackingForm/TrackingForm';
import { useState } from 'react';
import bannerImg from '../../assets/appteaser-ma.png';

export default function Banner() {
  const [loading, setLoading] = useState(false);

  const items = [
    {
      img: 'https://i.imgur.com/Q5cj2lz.png',
      title: 'Shop',
      desc: 'Find the right service'
    },
    {
      img: 'https://i.imgur.com/nfO0Y86.png',
      title: 'Get a Quote',
      desc: 'Estimate cost to share and compare'
    },
    {
      img: 'https://i.imgur.com/36w5AaD.png',
      title: 'Request a Business Account',
      desc: 'Shipping regularly or frequently? Learn about volume discounts'
    }
  ];
  return (
    <div className="bg-img overflow-hidden px-8 pb-[100px] pt-10">
      <div className="custom_container !p-0">
        <div className="relative shape-box max-w-[600px] p-7 bg-[#333366] flex justify-between mt-5">
          <div className="w-full">
            <div className="">
              <h5 className="text-[18px] md:text-[28px] underline underline-offset-[7px] decoration-[#ffc400] decoration-4 text-white">Track Packages</h5>
            </div>
            <TrackingForm />
            <p className="text-white mt-3">Need help changing your delivery? Get Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}
