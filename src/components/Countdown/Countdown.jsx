"use client"
import './Countdown.css'
import React, { useState, useEffect, useRef } from "react";


const CountdownTimer = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());
  const ref = useRef(null);

  // Get scroll position


  // Create a transform for scaling based on scroll progress


  // Vertical movement (up to down or vice versa)
 
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    } else {
      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }
  }

  return (
    <div
      ref={ref}
      className="container relative m-auto flex flex-col max-h-screen text-our_white py-16   gap-[20px] max-sm:scale-90 z-10 count_down_bg  "
    >
      <div className="w-full min-h-[200px] flex flex-col border-x-0 border-y-2 border-t-blue-400 border-b-blue-400">
        <div className="grid mb-16 grid-cols-4 gap-16 text-center auto-cols-max ">
          <div className="flex flex-col min-w-[120px] min-h-[120px] p-4 bg-neutral rounded-sm text-neutral-content ">
            <span className="text-[7rem] text-white h2-effect">
              {remainingTime.days}
            </span>
            <span className="text-white font-normal text-4xl">Days</span>
          </div>
          <div className="flex flex-col min-w-[120px] min-h-[120px] p-4 bg-neutral rounded-sm text-neutral-content ">
            <span className="text-[7rem] text-white h2-effect">
              {remainingTime.hours}
            </span>
            <span className="text-white font-normal text-4xl">Hours</span>
          </div>
          <div className="flex flex-col min-w-[120px] min-h-[120px] p-4 bg-neutral rounded-sm text-neutral-content ">
            <span className="text-[7rem] text-white h2-effect">
              {remainingTime.minutes}
            </span>
            <span className="text-white font-normal text-4xl">Min</span>
          </div>
          <div className="flex flex-col min-w-[120px] min-h-[120px] p-4 bg-neutral rounded-sm text-neutral-content ">
            <span className="text-[7rem] text-white h2-effect">
              {remainingTime.seconds}
            </span>
            <span className="text-white font-normal text-4xl">Sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
