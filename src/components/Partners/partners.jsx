import React, { useEffect, useRef } from "react";
import "./partners.css";
import Image from "next/image";
import top_left from "../../assets/backgrounds/about/topleft.png";
import Devfolio from "../../assets/Gallery/devfolio.png";
import EthIndia from "../../assets/Gallery/Ethindia.png";
import Polygon from "../../assets/Gallery/polygon.png";
import KeyValue from "../../assets/Gallery/keyvalue2.jpg";
import Geojit from "../../assets/Gallery/geo.jpg";
import KSUM from "../../assets/Gallery/ksumw.jpg";
import right from "@/assets/Landing/right2.svg";
import Tinkher from "../../assets/Gallery/tinkerhubbb.png";
import Devarmy from "../../assets/Gallery/devarmy.png";
import bottom_right from "../../assets/backgrounds/about/bottomright.png";

const Partners = () => {
  const rowRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);

    rowRefs.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => {
      rowRefs.current.forEach((row) => {
        if (row) observer.unobserve(row);
      });
    };
  }, []);

  return (
    <section className="partners-section pt-[80px] " id="partners">
      <Image className="pointer-events-none top-left1" src={top_left} />
      <Image
        className="pointer-events-none bottom-right1"
        src={bottom_right}
        alt="bot-right"
      />
      {/* <div className="absolute bg-gradient-to-b from-[#2d0c14] to-5% to-transparent bg-no-repeat inset-0" /> */}
      {/* <div className="absolute bg-no-repeat inset-0" /> */}
      <h1 className="text-5xl partners-title max-md:text-4xl">
        OUR <br className="hidden max-sm:flex" /> PARTNERS
      </h1>
      <div className="partners-container">
        {/* Title Partner */}
        <div className="partners-row" ref={(el) => (rowRefs.current[0] = el)}>
          <div className="partner title-partner ">
            <a
              href="https://keyvalue.systems"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={KeyValue}
                alt="KEYVALUE LOGO"
                className="pointer-events-none partner-logo styled-partner"
              />
            </a>
            <p className="partner-label font-syne-medium">Platinum Partner</p>
          </div>
          <div className="partner title-partner ">
            <a
              href="https://geojit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Geojit}
                alt="GEOJIT LOGO"
                className="pointer-events-none partner-logo styled-partner"
              />
            </a>
            <p className="partner-label font-syne-medium">Platinum Partner</p>
          </div>
        </div>

        {/* Second Row Partners */}
        <div className="partners-row" ref={(el) => (rowRefs.current[1] = el)}>
          <div className="partner wide-partner">
            <Image
              src={Polygon}
              alt="POLYGON LOGO"
              className="pointer-events-none partner-logo"
              width={240}
              height={70}
            />
            <p className="partner-label font-syne-medium">Gold Partner</p>
          </div>
          <div className="partner wide-partner">
            <Image
              src={Devfolio}
              alt="DEVFOLIO LOGO"
              className="pointer-events-none partner-logo"
              width={240}
              height={70}
            />
            <p className="partner-label font-syne-medium">Platinum Partner</p>
          </div>
          <div className="partner wide-partner">
            <Image
              src={EthIndia}
              alt="ETHINDIA LOGO"
              className="pointer-events-none partner-logo"
              width={240}
              height={70}
            />
            <p className="partner-label font-syne-medium">Gold Partner</p>
          </div>
        </div>
        <div className="partners-row" ref={(el) => (rowRefs.current[2] = el)}>
          <div className="partner">
            <a
              href="https://mec.tinkerhub.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Tinkher}
                alt="TINKERHUB MEC LOGO"
                className="partner-logo styled-partnernew"
                width={240}
                height={70}
              />
            </a>
            <p className="partner-label font-syne-medium">Community Partner</p>
          </div>
          <div className="partner">
            <a
              href="https://theDevArmy.com/branding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Devarmy}
                alt="DEVARMY LOGO"
                className="partner-logo styled-partnernew"
                width={240}
                height={70}
              />
            </a>
            <p className="partner-label font-syne-medium">Community Partner</p>
          </div>
        </div>

        <div className="partners-row" ref={(el) => (rowRefs.current[3] = el)}>
          <a
            href="https://startupmission.kerala.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="partner ">
              <Image
                src={KSUM}
                alt="KERALA STARTUP MISSION LOGO"
                className="pointer-events-none partner-logo styled-partner"
                width={240}
                height={70}
              />
              <p className="partner-label font-syne-medium">
                Ecosystem Partner
              </p>
            </div>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Partners;
