"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import BlobAnimation from "../components/BlobAnimation";
import Footer from "../components/Footer";
import About from "../components/About/About";
import Prizes from "../components/prizes/prizes";
import Partners from "../components/Partners/partners";
import CountdownTimer from "../components/Countdown/Countdown";
import Navbar from "../components/Navbar";
import AccordionImageGallery from "../components/ImageGallery";
import WhyParticipate from "../components/WhyParticipate/WhyParticipate";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/ContactPage";
import Intro from "../components/Intro";
import TimelineSection from "../components/Timeline/Timeline";
import Loading from "./loading";
import {AnimatePresence, motion} from "framer-motion"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.removeChild(script);
    };
  }, []);




  return (
    <AnimatePresence >
      {isLoading ? (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.05, ease: 'easeIn' }}
          className="h-screen w-screen overflow-hidden"
        >
          <Loading />
        </motion.div>
      ) : (
        <div className="text-white">
          <Navbar />
          <BlobAnimation />
          <About />
          <WhyParticipate />
          <Prizes />
          <Partners />
          <TimelineSection />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}
