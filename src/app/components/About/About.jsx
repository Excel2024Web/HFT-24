import React from "react";
import "./About.css";

const About = () => {
  // return (
  //   <div
  //     className="container relative m-auto flex flex-col max-h-screen text-our_white pt-10 pb-14  gap-[20px] max-sm:scale-90 z-10"
  //     data-aos="fade-up"
  //     data-aos-duration="1100"
  //   >
  //     <div className="flex flex-col  gap-[42px]">
  //       <div className="w-[100px] h-[5px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
  //       <p
  //         data-aos="fade-up"
  //         data-aos-duration="1100"
  //         className="tracking-wide text-[28px] font-[500] max-lg:text-[28px] max-md:text-[28px] w-full text-left max-w-[90w] lg:max-w-[60vw] text"
  //       >
  //         Hack for Tomorrow is a vibrant hackathon that empowers young
  //         innovators to create impactful solutions. Join us to collaborate,
  //         learn, and showcase your skills in a dynamic, tech-driven environment.
  //       </p>
  //     </div>
  //   </div>
  // );
  return (
    <div className="about-page container relative flex flex-col min-h-screen h-[100vh] text-our_white pt-10 pb-14 gap-[20px] max-sm:scale-90 z-10">
      <div className="flex flex-col w-[100vw] h-full justify-center items-center gap-[42px]">
        <div className="about-container gap-5">
          <div className="about-title-container">
            <h2>ABOUT</h2>
            <h1>HFT</h1>
          </div>
          <div className="about-content-container">
            <p>
              Welcome to Hack for Tomorrow, the hackathon where young innovators
              come together to create cool, impactful solutions. Whether you’re
              a coding whiz, a design genius, or just someone with a big idea,
              this is the place to bring your skills to the table and make
              something amazing happen.
              <br />
              <br />
              At Hack for Tomorrow, it’s all about collaborating, learning, and
              showing off what you can do. You’ll meet awesome people, work on
              exciting projects, and maybe even change the world—no big deal,
              right? Plus, it’s a great way to dive into the latest tech,
              sharpen your skills, and have a ton of fun while you’re at it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
