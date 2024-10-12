import React, { useState, useEffect } from "react";
import Image from "next/image";
import hft1 from "@/app/assets/Gallery/hft1.jpg";
import hft2 from "@/app/assets/Gallery/hft2.jpg";
import hft3 from "@/app/assets/Gallery/hft3.jpg";
import hft4 from "@/app/assets/Gallery/hft4.jpg";
import hft5 from "@/app/assets/Gallery/hft6.jpg";

const images = [
  { src: hft1, alt: "D-Day HFT 2023", gradient: "from-blue-500 to-green-500" },
  {
    src: hft3,
    alt: "Sharing Experiences",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    src: hft2,
    alt: "Winners HFT 2023",
    gradient: "from-yellow-500 to-red-500",
  },
  { src: hft4, alt: "Hackers", gradient: "from-green-500 to-blue-500" },
  { src: hft5, alt: " Hackers", gradient: "from-purple-500 to-pink-500" },
];

const AccordionImageGallery = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleImages = isMobile ? images.slice(0, 3) : images;

  return (
    <div
      className="container relative m-auto flex flex-col max-h-screen text-our_white pt-10 pb-14 gap-[20px] max-sm:scale-90 z-10"
      data-aos="fade-up"
      data-aos-duration="1100"
    >
      <div className="flex h-[400px] w-full overflow-hidden">
        {visibleImages.map((image, index) => (
          <div
            key={index}
            className={`relative transition-all duration-300 ease-in-out ${
              expandedIndex === index
                ? isMobile
                  ? "w-2/3"
                  : "w-3/5"
                : isMobile
                ? "w-1/3"
                : "w-1/5"
            }`}
            onMouseEnter={() => setExpandedIndex(index)}
            onMouseLeave={() => setExpandedIndex(null)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
              className={`transition-all duration-300 ease-in-out ${
                expandedIndex === index ? "" : "grayscale"
              }`}
              sizes={isMobile ? "25vw" : "(max-width: 1200px) 20vw, 20vw"}
              loading="lazy"
            />
            <div
              className={`transition-all duration-300 ease-in-out ${
                expandedIndex === index ? "" : "grayscale"
              }`}
            />
            <div className="absolute bottom-0 left-0 p-4 text-white bg-[#0000007d] w-full">
              <h3 className="text-lg font-bold underline decoration-green-500 underline-offset-2">
                {image.alt}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionImageGallery;
