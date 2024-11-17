import React, {useEffect, useState} from "react";
import "./prizes.css";

function Pricing() {
  const [startCount, setStartCount] = useState(false);
  const prizeAmounts = [20000, 50000, 30000];

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.querySelector(".pricing-section");
      const rect = pricingSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        // Start counting prizes
        setTimeout(() => {
          setStartCount(true);
        }, 3000);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pricing-section">
      <h1 className="pricing-header font-base-neue-bold text-4xl sm:text-6xl tracking-wider">
        PRIZES
      </h1>
      <p className="pricing-subheader font-syne-medium">
        Win exciting prizes in our hackathon!
      </p>
      <div className="pricing-cards font-base-neue-black tracking-wider">
        <div className="pricing-card second-prize glass-card">
          <div className="icon icon-website"></div>
          <h2 className="prize-title">Second Prize</h2>
          <div className="price">
            ₹{startCount ? <CyclingCount end={prizeAmounts[0]} /> : 0}
          </div>
        </div>

        <div className="pricing-card first-prize glass-card">
          <div className="icon icon-app"></div>
          <h2 className="prize-title">First Prize</h2>
          <div className="price">
            ₹{startCount ? <CyclingCount end={prizeAmounts[1]} /> : 0}
          </div>
        </div>

        <div className="pricing-card third-prize glass-card">
          <div className="icon icon-branding"></div>
          <h2 className="prize-title">Third Prize</h2>
          <div className="price">
            ₹{startCount ? <CyclingCount end={prizeAmounts[2]} /> : 0}
          </div>
        </div>
      </div>
    </div>
  );
}

function CyclingCount({end}) {
  const [displayedCount, setDisplayedCount] = useState("0000");
  const endString = end.toString().padStart(4, "0");

  useEffect(() => {
    let frame = 0;
    const duration = 2000;
    const steps = Math.ceil(duration / 50);

    const counter = setInterval(() => {
      frame++;
      const newDisplay = endString.split("").map((digit, index) => {
        if (frame >= steps) return digit;
        return Math.floor(Math.random() * 10);
      });

      setDisplayedCount(newDisplay.join(""));

      if (frame >= steps) {
        clearInterval(counter);
        setDisplayedCount(endString);
      }
    }, 50);

    return () => clearInterval(counter);
  }, [end, endString]);

  return <span>{displayedCount}</span>;
}

export default Pricing;
