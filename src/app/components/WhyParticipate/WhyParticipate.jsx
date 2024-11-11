import React, { useState, useRef, useEffect } from "react";
import InfoCard from "./InfoCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css';
import './WhyParticipate.css'



const WhyParticipate = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);

  const cards = [
    {
      title: "Build and Learn",
      text: "Dive into intense coding sessions, tackle real-world problems, and enhance your skills. Hackathons provide a unique opportunity to learn new technologies and apply them in innovative projects.",
      gradient: "from-[#3b48f9] to-[#a73ffa]",
      color: "text-white",
    },
    {
      title: "Network",
      text: "Connect with  industry professionals, and potential employers. Hackathons are a melting pot of talent, offering invaluable networking opportunities that can shape your career.",
      gradient: "from-[#5f72be] to-[#06e1ae]",
      color: "text-white",
    },
    {
      title: "Mentor Support",
      text: "Gain insights and guidance from experienced mentors. They'll be there to help you overcome challenges, refine your ideas, and maximize your learning experience throughout the hackathon.",
      gradient: "from-[#5bd8fa] to-[#00f982]",
      color: "text-white",
    },
    {
      title: "Goodies and Swag",
      text: "Take home cool branded merchandise and tech gadgets. Hackathons often provide participants with exclusive swag, giving you lasting mementos of your innovative journey.",
      gradient: "from-[#5f72be] to-[#06e1ae]",
      color: "text-white",
    },
    {
      title: "Cash Prizes",
      text: "Compete for substantial cash rewards and other prizes. Hack for Tommorow offers significant prize pools, giving you the chance to fund your projects or kickstart your entrepreneurial dreams.",
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
      <div className="container max-w-full md:max-w-[70%] mx-auto  py-8">
        <h2 className="text-3xl text-left text-white py-5 tracking-wide">
          Why Participate ?
        </h2>
        
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          navigation={true}
          centeredSlides={true}
          // slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 0.5,
            disableOnInteraction: false,
          }}
          
          modules={[EffectCoverflow, Pagination, Navigation]} // Include Navigation module
          className="mySwiper"
          slidesPerView={1} 
    breakpoints={{
      640: { // For small devices (e.g. mobile)
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: { // For tablets
        slidesPerView: 1,
        // spaceBetween: 40,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: { // For laptops/desktops
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: { // For larger screens
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }}
>
        
        {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-full "
              style={{ width: `${cardWidth}px` }}
            >
              <div className="px-2">
              <SwiperSlide>
          
                <InfoCard
                  title={card.title}
                  text={card.text}
                  gradient={card.gradient}
                  color={card.color}
                  />
              </SwiperSlide>
              </div>
            </div>
          ))}
      </Swiper>

      </div>
    </>
  );
};

export default WhyParticipate;
