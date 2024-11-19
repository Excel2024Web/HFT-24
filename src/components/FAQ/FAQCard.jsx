"use client";
import { FaAngleDown } from "react-icons/fa";

import "./FAQCard.css";
import { useState } from "react";

const FAQCard = ({ question, answer, index }) => {
  const [height, setHeight] = useState(0);
  const handleExpand = () => {
    height == 0 ? setHeight(999) : setHeight(0);
  };

  return (
    <div className="container py-5 sm:px-5 faq-card-container" onClick={handleExpand}>
      <div className="faq-question">
        <h1>{question}</h1>
        <div
          className={
            height == 0 ? "faq-icon faq-icon-down" : "faq-icon faq-icon-up"
          }
        >
          <FaAngleDown />
        </div>
      </div>
      <p
        className="faq-answer"
        style={{
          "max-height": height,
          "margin-top": height == 0 ? "0px" : "10px",
          opacity: height == 0 ? "0" : "1",
        }}
      >
        {answer}
      </p>
      <div
        className="faq-line"
        style={{
          "max-height": height,
          "margin-top": "10px",
          opacity: "0.4",
        }}
      >
        <hr />
      </div>
    </div>
  );
};
export default FAQCard;
