import React, {useState, useRef, useEffect} from "react";
import InfoCard from "./InfoCard";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
// import 'swiper/swiper-bundle.min.css';
import "./WhyParticipate.css";

const WhyParticipate = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);

  const cards = [
    {
      title: "Win Big",
      text: "Compete for a massive prize pool of up to ₹70K and reward your efforts with some well-deserved recognition.",
      gradient: "from-[#3b48f9] to-[#a73ffa]",
      color: "text-white",
    },
    {
      title: " Super Swags",
      text: "Stock up on cool swags from stickers to Red Bull and more! Swank 'em, fuel your creativity and stay energized throughout the hackathon.",
      gradient: "from-[#5f72be] to-[#06e1ae]",
      color: "text-white",
    },
    {
      title: "Network",
      text: "Expand your network with the brightest tech minds. Meet up with fellow innovators, share ideas and forge new long-lasting friendships.",
      gradient: "from-[#5bd8fa] to-[#00f982]",
      color: "text-white",
    },
    {
      title: "Expert Guidance",
      text: "Benefit from the guidance of our experienced mentors who will provide valuable insights, troubleshooting tips, and support throughout the event to supercharge your project.",
      gradient: "from-[#5f72be] to-[#06e1ae]",
      color: "text-white",
    },
    {
      title: "Build the Future",
      text: "Push your coding limits. Use brand new technologies to create innovative solutions to solve real-world problems and make a difference.",
      gradient: "from-[#3b48f9] to-[#a73ffa]",
      color: "text-white",
    },
  ];
  const cardWidth = 350; // Adjust this value based on your desired card width
  const visibleCards = 3; // Number of cards visible at once
  const totalWidth = cards.length * cardWidth;

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.offsetWidth;
        const maxTranslate = -(totalWidth - containerWidth);
        setTranslateX(Math.max(maxTranslate, Math.min(0, translateX)));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [translateX, totalWidth]);

  const handleSlide = (direction) => {
    const containerWidth = sliderRef.current.offsetWidth;
    const maxTranslate = -(totalWidth - containerWidth);
    const slideAmount = direction * cardWidth;

    setTranslateX((prevTranslateX) => {
      const newTranslateX = prevTranslateX + slideAmount;
      return Math.max(maxTranslate, Math.min(0, newTranslateX));
    });
  };

  return (
    // <div className="container max-w-full md:max-w-[70%] mx-auto  py-8">
    //   <h2 className="text-3xl text-left text-white py-5 tracking-wide">
    //     Why Participate ?
    //   </h2>
    //   <div className="relative overflow-hidden" ref={sliderRef}>
    //     <div
    //       className="flex transition-transform duration-300 ease-in-out"
    //       style={{
    //         transform: `translateX(${translateX}px)`,
    //         width: `${totalWidth}px`,
    //       }}
    //     >
    //       {cards.map((card, index) => (
    //         <div
    //           key={index}
    //           className="flex-shrink-0 h-full "
    //           style={{ width: `${cardWidth}px` }}
    //         >
    //           <div className="px-2">
    //             <InfoCard
    //               title={card.title}
    //               text={card.text}
    //               gradient={card.gradient}
    //               color={card.color}
    //             />
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     <button
    //       onClick={() => handleSlide(1)}
    //       className="absolute left-0 top-1/2 -translate-y-1/2  p-2 rounded-full shadow-md z-10 scale-150"
    //     >
    //       <FaChevronLeft />
    //     </button>
    //     <button
    //       onClick={() => handleSlide(-1)}
    //       className="absolute right-0 top-1/2 -translate-y-1/2  p-2 rounded-full shadow-md z-10 scale-150"
    //     >
    //       <FaChevronRight />
    //     </button>
    //   </div>
    // </div>

    <>
      <div id="why" className="main-container">
        <div className="container h-[100%] block place-content-center  md:max-w-[80%] mx-auto  py-8">
          <h2 className=" titleh2 text-4xl sm:text-6xl font-base-neue-bold mb-[50px] text-center text-white py-5 tracking-wide ">
            WHY PARTICIPATE
          </h2>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            navigation={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              480: {slidesPerView: 1, spaceBetween: 10},
              768: {slidesPerView: 1.3, spaceBetween: 20},
              1024: {slidesPerView: 2, spaceBetween: 30},
              1280: {slidesPerView: 2, spaceBetween: 40},
              1536: {slidesPerView: 3, spaceBetween: 50},
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <InfoCard
                  title={card.title}
                  text={card.text}
                  gradient={card.gradient}
                  color={card.color}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </div>
    </>
  );
};

export default WhyParticipate;
