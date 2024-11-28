"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./ContactCard.css";

const ContactCard = ({ details }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger animation when 30% of the element is visible
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
      },
    },
    hidden: { opacity: 0 },
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: -5,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="card-container"
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="background-image">
        <Image
          src={details.img}
          alt="background"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="text-field z-10 flex flex-col justify-end items-start w-full h-full p-5">
        <motion.div
          className="text-field-inner p-0"
          variants={containerVariants}
          animate={isHovered ? "hidden" : "visible"}
        >
          <h2 className="font-syne-medium">{details.name}</h2>
          <p className="font-syne-medium">{details.title}</p>
        </motion.div>
        <motion.div
          className="socials"
          variants={containerVariants}
          animate={isHovered ? "visible" : "hidden"}
        >
          <motion.a
            className="social-linkedin"
            href={details.linkedin}
            variants={childVariants}
            target="_blank"
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            className="social-mail"
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${details.email}`}
            variants={childVariants}
            target="_blank"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            className="social-phone"
            href={`tel:${details.phone}`}
            variants={childVariants}
          >
            <FaPhone />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
