const InfoCard = ({
  title,
  text,
  gradient = "from-[#3b48f9] to-[#a73ffa]",
  color = "text-white",
}) => {
  return (
    // <div className=" cardbgdiv flex justify-center items-center flex-shrink-0 ">
    // <div className="flex flex-col gap-2 w-[83%] ">
    <div
      className={` cardcontainer1 rounded-[20px] flex flex-col h-[100%] items-center justify-center  px-8 border-[0.2px] border-solid border-[#9291918f] backdrop-blur-[10px] bg-opacity-50 backdrop-saturate-[80%] bg-[rgba(255,255,255,0.1)]  `}
    >
      {/* <Image className='elementimg'
            src="/element.png" 
            alt="Description of the element" 
            width={150} 
            height={150} 
    /> */}
      <h3 className="cardtitle font-syne-semibold font-[500] mt-[30px] lg:mt-[50px] tracking-wide text-white">
        {title}
      </h3>
      <div className="flex rounded-b-[10px] font-xl font-syne-medium relative py-10 lg:px-8 px-5 gap-10 min-h-[80%] rounded-[12px]">
        <span className={`absolute w-[90%] h-[1px] mt-[10px] bg-white`} />
        <p className="mt-[50px] cardp font-[400] text-justify ">{text}</p>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default InfoCard;
