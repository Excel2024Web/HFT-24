"use client";
import "./About.css";
import Image from "next/image";
import { useState } from "react";
import top_left from "../../assets/backgrounds/about/topleft.png";
import bottom_right from "../../assets/backgrounds/about/bottomright.png";
import circle1 from "../../assets/backgrounds/about/circle1.png";
import circle2 from "../../assets/backgrounds/about/circle2.png";
import circle3 from "../../assets/backgrounds/about/circle3.png";

const About = () => {
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-b from-[#0a0a0a] from-10% to-transparent z-50 bg-no-repeat right-0 left-0 top-0 min-h-32" />
      <div id="about" className="about-container pt-[80px]">
        <Image className="top-left" src={top_left} />
        <Image className="bottom-right" src={bottom_right} />
        <Image className="circle1" src={circle1} />
        <Image className="circle2" src={circle2} />
        <Image className="circle3" src={circle3} />
        <h1 className="text-5xl abouth1 font-base-neue-bold max-md:text-4xl pb-[18px] text-center">
          ABOUT
        </h1>
        <div className="details-container">
          <svg
            width="1238"
            height="589"
            viewBox="0 0 1238 589"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="aboutsvg"
          >
            <g filter="url(#filter0_bd_22_35)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 72C20 43.2812 43.2811 20 71.9999 20H360.56C370.34 20 379.922 22.7582 388.206 27.958L426.573 52.042C434.857 57.2418 444.439 60 454.219 60H789.462C800.009 60 810.307 56.7929 818.989 50.8042L850.314 29.1958C858.996 23.2071 869.294 20 879.841 20H1166C1194.72 20 1218 43.2812 1218 72V477C1218 505.719 1194.72 529 1166 529H838.864C826.677 529 814.876 533.281 805.524 541.095L786.6 556.905C777.248 564.719 765.447 569 753.26 569H487.134C475.766 569 464.711 565.275 455.662 558.394L430.949 539.606C421.9 532.725 410.845 529 399.477 529H72C43.2812 529 20 505.719 20 477V72Z"
                fill="#4E4848"
                fill-opacity="0.17"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_bd_22_35"
                x="0"
                y="0"
                width="1238"
                height="589"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_22_35"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_22_35"
                  result="effect2_dropShadow_22_35"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_22_35"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            className="aboutsvg1"
            width="393"
            height="812"
            viewBox="0 0 393 812"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <g filter="url(#filter0_bd_36_11)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 44C10 25.2223 25.2223 10 44 10H85.4028C96.9908 10 107.781 15.902 114.032 25.6595L114.468 26.3405C120.719 36.098 131.509 42 143.097 42H246.417C256.883 42 266.766 37.1796 273.209 28.9319L277.791 23.0681C284.234 14.8204 294.117 10 304.583 10H349C367.778 10 383 25.2223 383 44V750C383 768.778 367.778 784 349 784H298.967C291.836 784 284.887 786.242 279.1 790.408L271.9 795.592C266.113 799.758 259.164 802 252.033 802H137.308C129.053 802 121.079 798.996 114.875 793.549L113.625 792.451C107.421 787.004 99.4473 784 91.1915 784H44C25.2223 784 10 768.778 10 750V44Z"
                fill="url(#paint0_linear_36_11)"
                fill-opacity="0.25"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_bd_36_11"
                x="0"
                y="0"
                width="393"
                height="812"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_36_11"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_36_11"
                  result="effect2_dropShadow_36_11"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_36_11"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_36_11"
                x1="50"
                y1="35.5"
                x2="285"
                y2="756"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.135809" stop-color="#534E4E" />
                <stop offset="0.578659" stop-color="#504C4C" />
              </linearGradient>
            </defs>
          </svg>

          <p className="abtp font-syne-medium">
            Level up your coding skills and slay real-world challenges! Whether
            you're a seasoned developer or a coding newbie, HFT is the place to
            collaborate with like-minded tech enthusiasts to build
            groundbreaking solutions.
            <br />
            Join us for a 24-hour coding marathon filled with caffeine, food,
            and endless possibilities. So, gather your squad and let's code a
            better tomorrow at Hack for Tomorrow!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
