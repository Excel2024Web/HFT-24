const InfoCard = ({
  title,
  text,
  gradient = "from-[#3b48f9] to-[#a73ffa]",
  color = "text-white",
}) => {
  return (
    <div className= "cardcontainer1">
      <div className="cardcontainer2">
        <h3 className=" font-syne-semibold font-[100] text-4xl text-center text-[2rem] tracking-widest mt-14 text-white h-[20%] px-3">
          {title.toUpperCase()}
        </h3>
        <div className="separation mt-[10%] w-full relative flex justify-center items-center">
          <svg className="w-[85%] absolute" width="205" height="1" viewBox="0 0 205 1" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <line y1="0.9" x2="205" y2="0.9" stroke="white" strokeOpacity="0.8" strokeWidth="0.2"/>
          </svg>
          <svg className = "absolute" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <rect y="7.07108" width="10" height="10" transform="rotate(-45 0 7.07108)" fill="#ffffff90"/>
          </svg>
        </div>
        <div className="h-full md:text-2xl lg:text-4xl w-[80%] font-syne-medium opacity-80 text-center flex justify-center items-center">
          <p className="cardp">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
