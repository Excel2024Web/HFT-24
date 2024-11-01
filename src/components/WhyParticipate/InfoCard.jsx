const InfoCard = ({
  title,
  text,
  gradient = "from-[#3b48f9] to-[#a73ffa]",
  color="text-white"
}) => {
  return (
    <div className="flex  justify-center items-center ">
      <div className="flex flex-col gap-2 w-96">
        <div className={`py-10 px-8 bg-gradient-to-r ${gradient}`}>
          <h3 className={`text-3xl font-[500] tracking-wide ${color}`}>
            {title}
          </h3>
        </div>
        <div className="flex relative py-10 px-8 bg-[#1a1a1a] gap-10 min-h-72">
          <span className={`absolute w-14 h-[2px] bg-gradient-to-r ${gradient}`} />
          <p className="mt-10 text-xl font-[400]  ">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
