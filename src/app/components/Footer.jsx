"use client";

import Image from "next/image";

import MECLogo from "@/app/assets/logos/mec@official.svg";
import ExcelLogo from "@/app/assets/logos/excel@2024.svg";

import excel from "@/app/assets/Footer/excel.svg";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const FooterSocials = [
    {
      item: "Twitter",
      link: "https://x.com/excelmec",
      icon: FaXTwitter,
    },
    {
      item: "Facebook",
      link: "https://www.facebook.com/excelmec",
      icon: FaFacebookF,
    },
    {
      item: "Instagram",
      link: "https://www.instagram.com/excelmec",
      icon: FaInstagram,
    },
    {
      item: "LinkedIn",
      link: "https://www.linkedin.com/company/excelmec",
      icon: FaLinkedinIn,
    },
  ];
  return (
    <footer className="z-10 flex relative justify-center flex-col items-center font-satoshi container m-auto pb-[34px]">
      <div className="flex flex-col items-center gap-[20px] mb-[52px] sm:my-[128px] z-10">
        <Image
          src={excel}
          alt="excellogo"
          className="skeleton"
          data-aos="fade-up"
        ></Image>
        <div className="text-center">
          <h3
            className="text-4xl title__gradient-text font-[700] font-satoshi leading-[53px] mb-[12px] h-fit overflow-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Are you ready to shape the future?
          </h3>
          <p
            className="title__gradient-text-small text-lg font-regular"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            Turn your ideas into impact with HFT. Join us in driving
            innovation.
          </p>
        </div>
        <div className="flex mt-8 max-sm:flex-col-reverse max-md:items-center max-sm:gap-[6px]">
          <div data-aos="zoom-in-up" data-aos-delay="100"></div>

          <div data-aos="zoom-in-up" data-aos-delay="50">
            {/* <Button
              text="Submit Your Idea"
              Icon=""
              variant="white"
              handleClick={() => {
                window.open("https://forms.gle/RqC944r5C9KJXYqG9");
              }}
              scale="scale-[91%]"
              onHoverScale="hover:scale-[100%]"
            /> */}
          </div>
        </div>
      </div>

      <div className="flex w-full h-[36px] md:container justify-between text-white items-center z-10 max-md:p-2">
        <Image
          src={ExcelLogo}
          alt="ExcelLogo"
          className="h-[64px] w-fit cursor-pointer max-md:h-[50px]"
          onClick={() => {
            window.open("https://ibeto.excelmec.org", "_blank");
          }}
        />
        <div className="flex flex-row gap-8 max-md:hidden">
          {FooterSocials.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              key={index}
              className="hover:scale-[1.1]"
            >
              <item.icon className="text-xl  text-[#D4D4D8] hover:text-pink_m/[.6] ease-in-out duration-300" />
            </a>
          ))}
        </div>
        <Image
          src={MECLogo}
          alt="mec"
          className="h-[54px] max-md:scale-90 w-fit cursor-pointer max-md:h-[68px]"
          onClick={() => {
            window.open("https://www.mec.ac.in", "_blank");
          }}
        />
      </div>
      <div className="max-md:flex hidden mt-10 gap-8 flex-row">
        {FooterSocials.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            key={index}
            className="hover:scale-[1.1]"
          >
            <item.icon className="text-xl text-[#D4D4D8] hover:text-pink_m/[.6] ease-in-out duration-300" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
