import React from 'react'

const About = () => {
  return (
    <div
      className="container max-w-full md:max-w-[70%] relative m-auto flex flex-col max-h-screen text-our_white pt-10 pb-14  gap-[20px] max-sm:scale-90 z-10"
      data-aos="fade-up"
      data-aos-duration="1100"
    >
      <div className="flex flex-col  gap-[42px]">
        <div className="w-[100px] h-[5px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="tracking-wide text-[28px] font-[500] max-lg:text-[28px] max-md:text-[28px] w-full text-left max-w-[90w] lg:max-w-[60vw] text"
        >
          Hack for Tomorrow is a vibrant hackathon that empowers young
          innovators to create impactful solutions. Join us to collaborate,
          learn, and showcase your skills in a dynamic, tech-driven environment.
        </p>
      </div>
    </div>
  );
}

export default About