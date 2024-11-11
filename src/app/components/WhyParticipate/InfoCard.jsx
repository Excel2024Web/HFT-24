const InfoCard = ({
  title,
  text,
  gradient = "from-[#3b48f9] to-[#a73ffa]",
  color="text-white"
}) => {
  return (
    <div className="flex  justify-center items-center flex-shrink-0 ">
      <div className="flex flex-col gap-2 w-[83%] ">
        <div className={` cardcontainer1 rounded-[20px] flex flex-col items-center justify-center py-10 px-8 border-[0.1px] border-solid border-[#ffffff8f] backdrop-blur-[18px] backdrop-saturate-[113%] bg-[rgba(57,57,59,0.43)]`} >
          <h3 className={`text-3xl font-[500] mt-[20px] tracking-wide ${color}`}>
            {title} 
          </h3>
        <div className="flex rounded-b-[10px]   relative py-10 px-8 gap-10 min-h-[80%] rounded-[12px] ">
          <span className={`absolute w-[80%] h-[2px] mt-[10px] bg-gradient-to-r ${gradient}`} />
          <p className="mt-[50px] text-xl font-[400] ">{text}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
