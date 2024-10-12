"use client";
import Image from "next/image";
import BlobAnimation from "./components/BlobAnimation";
import Footer from "./components/Footer";
import About from "./components/About";
import Highlights from './components/highlights/highlight';
import CountdownTimer from "./components/Countdown/Countdown";

export default function Home() {
  return (
    <>
      <BlobAnimation />
      {/* <CountdownTimer
        targetDate={new Date("December 21, 2024 09:30:00").getTime()}
      /> */}
      
      <About />
      <Highlights />
      <Footer />
    </>
  );
}
