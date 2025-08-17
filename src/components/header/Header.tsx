'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logoSvg from '../../assets/logo-sb.svg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const noHeader = ['/track'];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {noHeader.includes(pathname) ? null : (
        <div>
          <div className="header bg-white p-4">
            <div className="mx-auto flex min-h-[35px] max-w-[1150px] items-center">
              <div className="flex items-center justify-between w-full">
                <Image src={logoSvg} width={200} height={200} className="w-[150px] h-[40px]" alt="Logo" />
                <FiSearch />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
