'use client';

import Link from 'next/link';
import { footerLinks, socialLinks } from './MockData';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logoSvg from '../../assets/logo-sb.svg';

export default function Footer() {
  const pathname = usePathname();

  const noHeader = ['/track'];

  return (
    <>
      {noHeader.includes(pathname) ? null : (
        <div className="">
          <div className="bg-[#ffffff] w-full py-6">
            <div className="flex custom_container flex-wrap items-center justify-center gap-[5px] mt-[30px]">
              <Image src={logoSvg} width={170} height={170} alt="Logo" />
            </div>
            <div className="custom_container text-[#fff] flex flex-col gap-6">
              <div className="text-center text-black text-sm">Copyright © 2025 USPS. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
