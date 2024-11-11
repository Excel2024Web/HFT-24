'use client';

import React, { useState } from 'react';
import Image from 'next/image'; 
import { FaLinkedinIn } from 'react-icons/fa';
import { LuMails } from 'react-icons/lu';
import { FaPhone } from 'react-icons/fa6';
import { motion } from 'framer-motion'; 
import './ContactCard.css';

const ContactCard = ({details}) => {
  const [isHovered, setIsHovered] = useState(false);


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
  };

 
  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
    hidden: { opacity: 0 },
  };

  const childVariants = {
    visible: { 
      opacity: 1, 
      y: -10,
      transition: { duration: 0.5 }  
    },
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.5 }
    },
  };

  return (
    <>
      <motion.div
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
      </motion.div>
    </>
  );
};

export default ContactCard;
