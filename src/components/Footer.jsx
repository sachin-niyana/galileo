"use client";
import Link from "next/link";
import React, { useState } from "react";
import { footerIcons, footerLinks } from "./common/Helper";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value === "") {
      setError("Email field cannot be empty");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
    } else {
      console.log("Email Submitted:", email);
      setEmail("");
      setError(""); // Clear any previous error
    }
  };

  return (
    <div className="bg-light-grey">
      <div className="max-w-[1180px] mx-auto px-5 md:pt-20 sm:pt-16 pt-12">
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
            <p className="font-Poppins font-normal sm:text-base text-sm text-rich-black md:max-w-[448px] text-opacity-70 md:text-start text-center !leading-normal pt-4">
              Galileo Sky, founded by industry experts, is redefining the gaming
              landscape. With a blend of groundbreaking technology and immersive
              entertainment, we create world-class gaming experiences and
              thriving digital economies that captivate and inspire
            </p>
            <div className="flex md:justify-start justify-center gap-4 mt-6">
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
          <div className="flex sm:flex-row flex-col md:justify-end justify-center sm:items-start items-center xl:gap-[76px] lg:gap-14 gap-8 md:ms-auto">
            <div className="flex items-start flex-col w-[113px]">
              <p className="font-Poppins font-normal text-start text-base text-rich-black leading-sm pb-0.5">
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
            <div className="flex flex-col lg:w-[347px] md:w-[270px] max-w-[350px]">
              <p className="font-Poppins sm:text-start text-center font-normal text-base text-rich-black !leading-normal">
                Get Connected
              </p>
              <div>
                <div className="bg-grey p-[7px] rounded-[10px] flex gap-2 mt-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="font-Poppins font-normal sm:text-base text-sm placeholder-rich-black placeholder-opacity-70 text-opacity-70 bg-transparent ms-3.5 outline-none border-none rounded-lg text-rich-black !leading-normal w-full"
                  />
                  <button
                    onClick={handleSubmit}
                    className="py-3.5 px-8 text-light-white rounded-lg bg-red font-normal font-Poppins sm:text-base text-sm !leading-normal"
                  >
                    Submit
                  </button>
                </div>
                {error && <div className="text-orange mt-2">{error}</div>}
              </div>
              <p className="font-Poppins font-normal sm:text-start text-center sm:text-base text-sm text-opacity-70 text-rich-black !leading-normal pt-4">
                Your email address is very safe with Galileo Sky. You will only
                receive our gaming updates
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-rich-black sm:mt-[45px] mt-8 bg-opacity-15"></div>
      <p className="font-Poppins font-normal sm:text-base text-sm text-rich-black text-center text-opacity-70 leading-normal sm:py-6 py-4">
        {currentYear} Copyrights Galileo Sky, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
