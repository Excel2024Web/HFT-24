"use client";
import "./About.css";
import Image from "next/image";
import {useState} from "react";
import top_left from "../../assets/backgrounds/about/topleft.png";
import bottom_right from "../../assets/backgrounds/about/bottomright.png";
import circle1 from "../../assets/backgrounds/about/circle1.png";
import circle2 from "../../assets/backgrounds/about/circle2.png";
import circle3 from "../../assets/backgrounds/about/circle3.png";

const About = () => {
  return (
    <>
      <div className="about-container">
        <Image className="top-left" src={top_left} />
        <Image className="bottom-right" src={bottom_right} />
        <Image className="circle1" src={circle1} />
        <Image className="circle2" src={circle2} />
        <Image className="circle3" src={circle3} />
        <h1 className="abouth1 font-base-neue-bold text-4xl sm:text-6xl">
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
          <p className="abtp font-syne-medium">
            Level up your coding skills and slay real-world challenges! Whether
            you're a seasoned developer or a coding newbie, HFT is the place to
            collaborate with like-minded tech enthusiasts to build
            groundbreaking solutions.
            <br />
            Join us for a 24-hour coding marathon filled with caffeine, food,
            and endless possibilities. So, gather your squad and let's code a
            better tomorrow at Hack for Tomorrow!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
