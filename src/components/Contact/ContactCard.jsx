"use client";

import React, {useState} from "react";
import Image from "next/image";
import {FaLinkedinIn} from "react-icons/fa";
import {FaEnvelope, FaPhone} from "react-icons/fa6";
import {motion} from "framer-motion";
import "./ContactCard.css";

const ContactCard = ({details}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.4}},
    exit: {opacity: 0, y: -50, transition: {duration: 0.4}},
  };

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: {opacity: 0},
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: -5,
      transition: {duration: 0.5},
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {duration: 0.5},
    },
  };

  return (
    <>
      {/* <motion.div
        className="card-container"
        variants={cardVariants}

        exit="exit"
        viewport={{ once: false }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="logowrapper">
          <Image
            className="logoimg"
            src={details.img}
            alt="Logo"
          />
        </div>
        <div className="text-field">
          <h2>{details.name}</h2>
          <p>{details.title}</p>
        </div>

        <motion.div
          className="socials"
          variants={containerVariants}

          animate={isHovered ? 'visible' : 'visible'}
        >
          <motion.a href={details.linkedin} variants={childVariants} target='blank'>
            <FaLinkedinIn />
          </motion.a>
          <motion.a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${details.email}`} variants={childVariants} target='blank'>
            <LuMails />
          </motion.a>
          <motion.a href={`tel:${details.phone}`} variants={childVariants}>
            <FaPhone />
          </motion.a>
        </motion.div>
      </motion.div> */}
      <div
        className="card-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
      >
        <div className="background-image">
          <Image
            src={details.img}
            alt="background"
            fill={true}
            style={{objectFit: "cover"}}
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
              target="blank"
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              className="social-mail"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${details.email}`}
              variants={childVariants}
              target="blank"
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
      </div>
    </>
  );
};

export default ContactCard;
