"use client";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const TimelineCard = ({ item, mobile, index }) => {
  return (
<TimelineItem>
  {!mobile && (
    <TimelineOppositeContent
      color="white"
      className="text-white font-orbitron text-[16px]"
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
    {index !== 0 && <div className="absolute w-full flex">
      <div className="w-6/12 border"  />
      <div className="w-1/12" />
      <div className="w-6/12 border" />
    </div>}
    {index === 0 ? (
      <TimelineConnector style={{ backgroundColor: "transparent" }} />
    ) : (
      <TimelineConnector style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} />
    )}
    <TimelineDot />
    {index === 1 ? (
      <TimelineConnector style={{ backgroundColor: "transparent" }} />
    ) : (
      <TimelineConnector style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} />
    )}
  </TimelineSeparator>
  <TimelineContent sx={{ m: "auto 0" }}>
    <div
      className={`relative p-8 text-left flex flex-col overflow-hidden`}
      data-aos="fade-up"
    >
      <span className="font-orbitron text-[#FFF] text-lg font-[500]">
        {item.para}
      </span>
      {mobile && (
        <>
          <span className="font-orbitron text-[#FFF] text-xl font-[500]">
            {item.title}
          </span>
          <span className="font-orbitron text-xs text-[#FFF] font-[500]">
            {item.date}
          </span>
          <span className="font-inter mt-[11px] text-[#FFF]/[0.85]">
            {item.para}
          </span>
        </>
      )}
    </div>
  </TimelineContent>
</TimelineItem>

  );
};

export default TimelineCard;
