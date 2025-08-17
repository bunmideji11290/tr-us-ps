'use client';

import Link from 'next/link';
import { footerLinks, socialLinks } from './MockData';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logoSvg from '../../assets/logo-sb.svg';

type FooterLinkItem = { title: string; slug: string } | { form: boolean };

function isFooterLinkWithSlug(item: FooterLinkItem): item is { title: string; slug: string } {
  return (item as { slug: string }).slug !== undefined;
}

interface IconComponents {
  [key: string]: React.ComponentType<IconBaseProps>;
}

const iconComponents: IconComponents = {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
};

export default function Footer() {
  const pathname = usePathname();

  const noHeader = ['/track'];

  return (
    <>
      {noHeader.includes(pathname) ? null : (
        <div className="">
          <div className="bg-[#f7f7f7] hidden pt-[30px] pb-[30px]">
            <div className="custom_container">
              <div>
                <div className="flex flex-col gap-[20px] md:flex-row">
                  {footerLinks.map((fLinks, index) => (
                    <div key={index} className="w-full">
                      <h3 className="text-[#191919] text-base font-bold mb-[11px]">{fLinks.title}</h3>
                      <ul>
                        {fLinks.list.map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-[5px]">
                            <Link href={item.slug} className="text-[#666] hover:underline text-xs font-normal leading-slug">
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f7f7f7] absolute bottom-0 w-full py-6">
            <div className="flex custom_container flex-wrap items-center justify-center gap-[5px] mt-[30px]">
              <Image src={logoSvg} width={170} height={170} alt="Logo" />            
              <div className="hidden gap-[20px]">
                {socialLinks.map((sLinks, index) => (
                  <div key={index} className="w-full flex flex-col gap-2">
                    <h3 className="text-[#ffffff] text-[12px] font-bold">{sLinks.title}</h3>
                    <ul className="flex gap-3">
                      {sLinks.list.map((item, itemIndex) => {
                        const IconComponent = iconComponents[item.icon];
                        return (
                          <li key={itemIndex} className="mb-[5px]">
                            <Link href={item.slug} className="text-[#ffffff] text-xl">
                              <IconComponent />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="custom_container text-[#fff] flex flex-col gap-6">
              <ul className="hidden flex-wrap gap-3 text-sm items-center">
                <li>
                  <Link className="hover:underline" href="">
                    Fraud Awareness
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="">
                    Legal Notice
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="">
                    Privacy Notice
                  </Link>
                </li>
              </ul>
              <div className="text-center text-black text-sm">Copyright © 2025 USPS. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
