"use client";
import Spline from "@splinetool/react-spline";
import {useEffect, useRef} from "react";
import astro from "@/assets/Landing/astro.svg";
import astro2 from "@/assets/Landing/astro2.svg";
import astro3 from "@/assets/Landing/astro3.svg";
import right from "@/assets/Landing/right2.svg";
import topleft from "@/assets/Landing/topleft.svg";
import constel from "@/assets/Landing/constellation.svg";
import arrow from "@/assets/Landing/arrow.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import circle1 from "../assets/backgrounds/landing/circle1.svg";
import circle2 from "../assets/backgrounds/landing/circle2.svg";
import circle3 from "../assets/backgrounds/landing/circle3.svg";

const BlobAnimation = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        <Image
          className="pointer-events-none absolute top-0 left-0 z-0"
          src={topleft}
          alt="topleft"
        />
        {/* <Image
          className="hidden lg:block absolute overflow-clip mt-[-4rem] mr-[-4rem] sm:mt-[-2rem] sm:mr-[-2rem] right-0 z-0"
          src={constel}
          alt="constellation"
        /> */}
        <Image
          className="hidden pointer-events-none lg:block absolute bg-cover right-0 top-0 h-full z-0"
          src={right}
          alt="bot-right"
        />
        <Image className="pointer-events-none lcircle1" src={circle1} />
        <Image className="pointer-events-none lcircle2" src={circle2} />
        <Image className="pointer-events-none lcircle3" src={circle3} />
        <div className="absolute bg-gradient-to-b from-transparent from-95% to-[#0a0a0a] z-0 to-100% bg-no-repeat right-0 left-0 top-0 bottom-0" />
        <div
          className="container max-w-full sm:max-w-[70%] relative m-auto flex flex-col min-h-screen text-our_white justify-center gap-[20px] z-0"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <Image
            className="pointer-events-none hidden sm:block absolute bottom-0 md:bottom-0 md:right-[-8rem] z-0"
            src={astro2}
            alt="astro"
          />
          <Image
            className="pointer-events-none sm:hidden absolute bottom-0 sm:bottom-0 right-0 max-sm: sm:right-[-4rem] z-0"
            src={astro3}
            alt="astro-mob"
          />
          <div className="lg:hidden absolute bg-gradient-to-b from-transparent from-95% to-[#0a0a0a] z-0 to-100% bg-no-repeat right-0 left-0 top-0 bottom-0" />

          <div className="flex z-50 flex-col gap-24 sm:gap-12 items-center sm:items-start max-sm:scale-90">
            <div className="flex flex-col gap-1 mt-[-8rem] sm:mt-0">
              <div className="uppercase  text-center sm:text-left text-white font-base-neue-black max-w-[100vw] text-5xl md:text-[6rem] font-bold leading-[90px] max-lg:text-[61px] max-lg:max-w-[480px] max-lg:leading-[70px] md:max-w-[700px] small-screen:text-[50px] small-screen:leading-[50px]">
                Hack For Tomorrow
              </div>
              <p
                data-aos="fade-up"
                data-aos-duration="1100"
                className="text-[21px] font-[500] font-syne-medium max-lg:text-[20px] max-md:text-[18px] text-center sm:text-left"
                // className="text-[21px] font-[500] font-syne-medium max-lg:text-[20px] max-md:text-[18px] text-center sm:text-left"
              >
                Innovate Today, Impact Tomorrow
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1100"
                className="text-[20px] font-[500] font-syne-medium max-lg:text-[19px] max-md:text-[17px] text-center sm:text-left"
              >
                KSUM, Kalamassery, Kochi
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1100"
                className="text-[20px] font-[500] font-syne-medium max-lg:text-[19px] max-md:text-[17px] text-center sm:text-left"
              >
                Dec 21, 22
              </p>
            </div>
            {/* <button className="btn-hover mt-10 rounded-full mx-auto sm:mx-0 font-syne-semibold bg-white font-bold uppercase text-[1rem] text-black px-3 py-3 max-w-[200px]"> */}
            {/* <div className="bg-white px-2 my-auto flex rounded-full font-syne-semibold font-bold">
              <p className="text-center pl-2 flex items-center btn-hover uppercase text-[1rem] text-black">
                Register Now
              </p>
              <span className=" rounded-full">
                <Image src={arrow} className="scale-75"></Image>
              </span>
            </div> */}
            <div
              className="apply-button z-50"
              data-hackathon-slug="hackfortomorrow2024"
              data-button-theme="dark-inverted"
              style={{height: "44px", width: "312px"}}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlobAnimation;
