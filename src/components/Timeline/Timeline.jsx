"use client";

import TimelineCard from "./TimelineCard";
import {TimelineData} from "@/constants";
import {timelineItemClasses} from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import "../About/About.css";
import circle1 from "../../assets/backgrounds/about/circle1.png";
import circle2 from "../../assets/backgrounds/about/circle2.png";
import circle3 from "../../assets/backgrounds/about/circle3.png";
import Image from "next/image";
import bottom_right from "../../assets/backgrounds/about/bottomright.png";
import "../WhyParticipate/WhyParticipate.css";
import top_left from "../../assets/backgrounds/about/topleft.png";

const TimelineSection = () => {
  return (
    <div
      id="timeline"
      className="relative flex flex-col font-syne-medium items-center justify-center min-h-screen p-2 text-white pb-12 mt-[80px]"
    >
      {/* <div className="absolute " /> */}

      <Image
        className="pointer-events-none top-left12 top-[-80px]"
        src={top_left}
      />
      <Image className="pointer-events-none bottom-right" src={bottom_right} />
      <Image className="pointer-events-none circle1" src={circle1} />
      <Image className="pointer-events-none circle2" src={circle2} />
      <Image className="pointer-events-none circle3" src={circle3} />
      <div className="container flex flex-col items-center justify-center min-h-screen m-auto font-generalSans text-our_white">
        <h2
          className="font-base-neue-bold text-5xl tracking-widest mirror-vertical text-center text-white xl:scale-100 max-md:text-4xl text-[#FFFFFF]/[0.8] "
          data-text="TIMELINE"
        >
          TIMELINE
        </h2>
        <div
          className="font-syne-medium mt-[60px] w-[900px] max-lg:w-[800px] max-md:w-[500px] max-sm:w-[350px] md:scale-110 max-sm:mt-[54px]"
          data-aos="zoom-in-up"
        >
          <Timeline className="font-syne-medium max-md:hidden">
            {TimelineData.map((item, index) => (
              <TimelineCard
                item={item}
                key={index}
                index={index}
                mobile={false}
              />
            ))}
          </Timeline>

          {/* timeline for smaller devices */}
          <Timeline
            position="right"
            className="md:hidden"
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {TimelineData.map((item, index) => (
              <TimelineCard
                item={item}
                key={index}
                index={index}
                mobile={true}
              />
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
