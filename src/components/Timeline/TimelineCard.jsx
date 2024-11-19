"use client";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const TimelineCard = ({ item, mobile, index }) => {
  return (
    <TimelineItem className="font-syne-medium">
      {!mobile && (
        <TimelineOppositeContent
          color="white"
          className="font-syne-medium text-white text-[16px]"
          sx={{ m: "auto 0" }}
        >
          <div className={`flex gap-2 ml-8`}>
            <span className="text-xs font-medium">0{index + 1}</span>
            <h3 className="text-3xl">
              {item.title}
              <span className="text-base block">{item.date}</span>
            </h3>
          </div>
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        {index !== 0 && (
          <div className="absolute w-[700px] max-sm:w-[500px] flex">
            <div className="w-6/12 border max-md:border-none" />
            <div className="w-1/12" />
            <div className="w-6/12 border" />
          </div>
        )}
        {index === 0 ? (
          <TimelineConnector style={{ backgroundColor: "transparent" }} />
        ) : (
          <TimelineConnector
            style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          />
        )}
        <TimelineDot />
        {index === 4 ? (
          <TimelineConnector style={{ backgroundColor: "transparent" }} />
        ) : (
          <TimelineConnector
            style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          />
        )}
      </TimelineSeparator>
      <TimelineContent sx={{ m: "auto 0" }}>
        <div
          className={`relative p-8 max-md:p-6 text-left flex flex-col overflow-hidden`}
          data-aos="fade-up"
        >
          {mobile ? (
            <>
              <span className="font-syne-medium text-[#FFF] text-xl font-[500]">
                {item.title}
              </span>
              <span className="font-syne-medium text-xs text-[#FFF] font-[500]">
                {item.date}
              </span>
              <span className="font-syne-medium mt-[11px] text-[#FFF]/[0.85]">
                {item.para}
              </span>
            </>
          ) : (
            <span className="font-syne-medium text-[#FFF] text-lg font-[500]">
              {item.para}
            </span>
          )}
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineCard;
