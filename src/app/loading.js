import React from "react";
import "../styles/loading.css";
import Script from "next/script";
import Image from "next/image";
import excel from "@/assets/Footer/excel.svg";

function Loading() {
  return (
    <div>
      <div id="root ">
        <div id="particles-background" className="vertical-centered-box"></div>
        <div id="particles-foreground" className="vertical-centered-box"></div>
        <div className="vertical-centered-box w-screen h-screen absolute left-0">
          <div className="content">
            <div className="loader-circle"></div>
            <div className="loader-line-mask">
              <div className="loader-line"></div>
            </div>
            <Image
              src={excel}
              alt="excellogo"
              className="skeleton_sped_up"
              data-aos="fade-up"
            ></Image>
          </div>
        </div>
      </div>
      <Script src="./script.js" strategy="beforeInteractive"  />
    </div>
  );
}

export default Loading;
