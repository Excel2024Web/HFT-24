import React, { useEffect, useRef } from 'react';
import './partners.css';
import Image from 'next/image';

import zilmoneyLogo from '../../assets/Gallery/zilmoney.png';

const Partners = () => {
  const rowRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
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
    <section className="partners-section">
      <h1 className="partners-title">Our Partners</h1>

      <div className="partners-container">
        {/* Title Partner */}
        <div
          className="partners-row"
          ref={(el) => (rowRefs.current[0] = el)}
        >
          <div className="partner title-partner">
            <Image 
              src={zilmoneyLogo} 
              alt="Zil Money" 
              className="partner-logo" 
              width={300}
              height={100}
            />
            <p className="partner-label">Title Partner</p>
          </div>
        </div>

        {/* Second Row Partners */}
        <div
          className="partners-row"
          ref={(el) => (rowRefs.current[1] = el)}
        >
          <div className="partner wide-partner">
            <Image 
              src={zilmoneyLogo} 
              alt="Kerala Startup Mission" 
              className="partner-logo" 
              width={240}
              height={70}
            />
            <p className="partner-label">Association Partner</p>
          </div>
          <div className="partner wide-partner">
            <Image 
              src={zilmoneyLogo} 
              alt="Devfolio" 
              className="partner-logo" 
              width={240}
              height={70}
            />
            <p className="partner-label">Gold Partner</p>
          </div>
          <div className="partner wide-partner">
            <Image 
              src={zilmoneyLogo} 
              alt="Polygon" 
              className="partner-logo" 
              width={240}
              height={70}
            />
            <p className="partner-label">Gold Partner</p>
          </div>
          <div className="partner wide-partner">
            <Image 
              src={zilmoneyLogo} 
              alt="Replit" 
              className="partner-logo" 
              width={240}
              height={70}
            />
            <p className="partner-label">Gold Partner</p>
          </div>
          <div className="partner wide-partner">
            <Image 
              src={zilmoneyLogo} 
              alt="Wolfram" 
              className="partner-logo" 
              width={240}
              height={70}
            />
            <p className="partner-label">Gold Partner</p>
          </div>
        </div>

        {/* Community Partner */}
        <div
          className="partners-row"
          ref={(el) => (rowRefs.current[2] = el)}
        >
          <div className="partner">
            <Image 
              src={zilmoneyLogo} 
              alt="GitHub" 
              className="partner-logo" 
              width={350}
              height={100}
            />
            <p className="partner-label">Community Partner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;