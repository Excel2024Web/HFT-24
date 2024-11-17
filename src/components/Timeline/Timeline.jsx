"use client";

import TimelineCard from "./TimelineCard";
import {TimelineData} from "@/constants";
import {timelineItemClasses} from "@mui/lab";
import Timeline from "@mui/lab/Timeline";

const TimelineSection = () => {
  return (
    <div
      id="timeline"
      className="relative flex flex-col font-syne-medium items-center justify-center min-h-screen p-2 text-white"
    >
      <div className="m-auto container font-generalSans min-h-screen flex justify-center flex-col items-center text-our_white">
        <h2
          className="font-base-neue-bold text-4xl sm:text-6xl tracking-widest mirror-vertical text-center text-white xl:scale-100 lg:scale-90 md:scale-75 scale-[.65] text-[#FFFFFF]/[0.8] "
          data-text="TIMELINE"
        >
          TIMELINE
        </h2>
        <div
          className="font-syne-medium mt-[140px] w-[900px] max-lg:w-[800px] max-md:w-[500px] max-sm:w-[350px] md:scale-110 max-sm:mt-[54px]"
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
