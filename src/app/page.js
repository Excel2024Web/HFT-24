"use client";
import Image from "next/image";
import BlobAnimation from "./components/BlobAnimation";
import Footer from "./components/Footer";
import About from "./components/About";
import Highlights from './components/highlights/highlight';
import CountdownTimer from "./components/Countdown/Countdown";
import Navbar from "./components/Navbar";
import AccordionImageGallery from "./components/ImageGallery";
import WhyParticipate from "./components/WhyParticipate/WhyParticipate";

export default function Home() {
  return (
    <>
      <Navbar />
      <BlobAnimation />
      {/* <CountdownTimer
        targetDate={new Date("December 21, 2024 09:30:00").getTime()}
      /> */}

      <About />
      <WhyParticipate />
      <Highlights />
      <AccordionImageGallery />

      <Footer />
    </>
  );
}
