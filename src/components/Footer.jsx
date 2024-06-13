import Link from "next/link";
import React from "react";
import { footerIcons, footerLinks } from "./common/Helper";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="max-w-[1180px] mx-auto px-5 sm:pt-[67px] pt-12">
      <div className="flex md:flex-row flex-col gap-10">
        <div className="flex flex-col">
          <Link
            aria-label="Read more about Seminole tax hike"
            href="/"
            className="flex justify-center md:justify-start"
          >
            <Image
              width={289}
              height={53}
              src="/assets/images/png/logo.png"
              alt="logo"
            />
          </Link>
          <p className="font-Poppins font-normal sm:text-base text-sm text-rich-black md:max-w-[448px] text-opacity-70 md:text-start text-center leading-sm pt-5">
            Galileo Sky, founded by industry experts, is redefining the gaming
            landscape. With a blend of groundbreaking technology and immersive
            entertainment, we create world-class gaming experiences and thriving
            digital economies that captivate and inspire
          </p>
          <div className="flex md:justify-start justify-center gap-4 mt-8">
            {footerIcons.map((obj, index) => (
              <Link
                aria-label="Read more about Seminole tax hike"
                key={index}
                href={obj.src}
                target="_blank"
                className="hover:scale-105 duration-300 transition-all ease-linear"
              >
                {obj.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex md:justify-end justify-center gap-[76px] md:ms-auto">
          <div className="flex flex-col w-[113px]">
            <p className="font-Poppins font-normal text-base text-rich-black leading-sm pb-0.5">
              Quick Links
            </p>
            <ul>
              {footerLinks.map((obj, index) => (
                <li
                  key={index}
                  className="flex flex-col list-none sm:mt-3 mt-2 opacity-70 hover:opacity-100 duration-300 transition-all ease-linear text-rich-black"
                >
                  <Link
                    href={obj.src}
                    aria-label="Read more about Seminole tax hike"
                    className="font-Poppins font-normal sm:text-base text-sm leading-sm"
                  >
                    {obj.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-[347px]">
            <p className="font-Poppins font-normal text-base text-rich-black !leading-normal">
              Get Connected
            </p>
            <div className="bg-grey p-[7px] rounded-[10px] flex gap-2 mt-4">
              <input
                type="email"
                name="email"
                placeholder="Email Here"
                className="font-Poppins font-normal text-base text-opacity-70 bg-transparent text-rich-black !leading-normal"
              />
              <button className="py-3.5 px-8 text-light-white rounded-lg bg-red font-normal font-Poppins text-base !leading-normal">
                Submit
              </button>
            </div>
            <p className="font-Poppins font-normal text-base text-opacity-70 text-rich-black !leading-normal pt-4">
              Your email address is very safe with Galileo Sky. You will only
              receive our gaming updates
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-richtext-rich-black sm:mt-12 mt-8 bg-opacity-40"></div>
      <p className="font-Poppins font-normal sm:text-base text-sm text-rich-black text-center text-opacity-70 leading-normal sm:py-6 py-4">
        @ All Rights Reserved {currentYear} Sherpa Property Management
      </p>
    </div>
  );
};

export default Footer;
