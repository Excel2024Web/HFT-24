import React, {useEffect, useRef} from "react";
import "./partners.css";
import Image from "next/image";

import Devfolio from "../../assets/Gallery/devfolio.png";
import EthIndia from "../../assets/Gallery/Ethindia.png";
import Polygon from "../../assets/Gallery/polygon.png";
import KeyValue from "../../assets/Gallery/keyvalue.png";

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
    <section className="partners-section" id="partners">
      <h1 className="partners-title">OUR PARTNERS</h1>
      <div className="partners-container">
        {/* Title Partner */}
        <div className="partners-row" ref={(el) => (rowRefs.current[0] = el)}>
          <div className="partner title-partner">
            <Image
              src={KeyValue}
              alt="KEYVALUE LOGO"
              className="partner-logo"
              width={240}
              height={70}
            />
            <p className="partner-label font-syne-medium">Platinum Partner</p>
          </div>
        </div>

        {/* Second Row Partners */}
        <div className="partners-row" ref={(el) => (rowRefs.current[1] = el)}>
          <div className="partner wide-partner">
            <Image
              src={Polygon}
              alt="POLYGON LOGO"
              className="partner-logo"
              width={240}
              height={70}
            />
            <p className="partner-label font-syne-medium">Gold Partner</p>
          </div>
          <div className="partner wide-partner">
            <Image
              src={Devfolio}
              alt="DEVFOLIO LOGO"
              className="partner-logo"
              width={240}
              height={70}
            />
            <p className="partner-label font-syne-medium">Platinum Partner</p>
          </div>
          <div className="partner wide-partner">
            <Image
              src={EthIndia}
              alt="ETHINDIA LOGO"
              className="partner-logo"
              width={240}
              height={70}
            />
            <p className="partner-label font-syne-medium">Gold Partner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
