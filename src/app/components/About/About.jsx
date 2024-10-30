"use client";
import "./About.css";
import { useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);
  const [eclipse, setEclipse] = useState(false);
  function animation() {
    if (!eclipse) {
      setInterval(() => {
        setEclipse(true);
      }, 100);
      setInterval(() => {
        setVisible(true);
      }, 150);
    }
  }

  return (
    <div className="about-page">
      <div
        className={"eclipse " + (eclipse ? "visible" : " ")}
        id="eclipse"
        onMouseOver={animation}
      >
        <div
          className={"foreground-container " + (visible ? "visible" : " ")}
          id="foreground-container"
        >
          <div className="flex flex-col w-[100vw] h-full justify-center items-center gap-[42px]">
            <div className="about-container gap-5">
              <div
                className={
                  "about-title-container " + (visible ? "textSlideIn" : "")
                }
              >
                <h2>ABOUT</h2>
                {/* <h1>Hack For Tomorrow</h1> */}
              </div>
              <div
                className={
                  "about-content-container " + (visible ? "textSlideIn" : "")
                }
              >
                <p>
                  Welcome to Hack for Tomorrow, the hackathon where young
                  innovators come together to create cool, impactful solutions.
                  Whether you’re a coding whiz, a design genius, or just someone
                  with a big idea, this is the place to bring your skills to the
                  table and make something amazing happen.
                  <br />
                  <br />
                  At Hack for Tomorrow, it’s all about collaborating, learning,
                  and showing off what you can do. You’ll meet awesome people,
                  work on exciting projects, and maybe even change the world—no
                  big deal, right? Plus, it’s a great way to dive into the
                  latest tech, sharpen your skills, and have a ton of fun while
                  you’re at it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
