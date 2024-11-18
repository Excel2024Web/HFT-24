import Spline from "@splinetool/react-spline";
import React, {useEffect, useRef} from "react";
import astro from "@/assets/Landing/astro.svg";
import astro2 from "@/assets/Landing/astro2.svg";
import astro3 from "@/assets/Landing/astro3.svg";
import right from "@/assets/Landing/right2.svg";
import topleft from "@/assets/Landing/topleft.svg";
import constel from "@/assets/Landing/constellation.svg";
import arrow from "@/assets/Landing/arrow.svg";
import Image from "next/image";
import applyImage from "../assets/Gallery/apply.png";
const BlobAnimation = () => {
  const canvasRef = useRef(null);

  // useEffect(() => {
  //   var canvas = canvasRef.current;
  //   var ctx = canvas.getContext("2d");
  //   let animationFrameId;

  //   const lavaAnimation = (function () {
  //     "use strict";
  //     var t,
  //       i = {
  //         screen: {
  //           elem: null,
  //           callback: null,
  //           ctx: null,
  //           width: 0,
  //           height: 0,
  //           left: 0,
  //           top: 0,
  //           init: function (t, i, s) {
  //             return (
  //               (this.elem = t),
  //               (this.callback = i || null),
  //               "CANVAS" == this.elem.tagName &&
  //                 (this.ctx = this.elem.getContext("2d")),
  //               window.addEventListener(
  //                 "resize",
  //                 function () {
  //                   this.resize();
  //                 }.bind(this),
  //                 !1
  //               ),
  //               (this.elem.onselectstart = function () {
  //                 return !1;
  //               }),
  //               (this.elem.ondrag = function () {
  //                 return !1;
  //               }),
  //               s && this.resize(),
  //               this
  //             );
  //           },
  //           resize: function () {
  //             var t = this.elem;
  //             for (
  //               this.width = t.offsetWidth,
  //                 this.height = t.offsetHeight,
  //                 this.left = 0,
  //                 this.top = 0;
  //               null != t;
  //               t = t.offsetParent
  //             )
  //               (this.left += t.offsetLeft), (this.top += t.offsetTop);
  //             this.ctx &&
  //               ((this.elem.width = this.width),
  //               (this.elem.height = this.height)),
  //               this.callback && this.callback();
  //           },
  //         },
  //       },
  //       s = function (t, i) {
  //         (this.x = t),
  //           (this.y = i),
  //           (this.magnitude = t * t + i * i),
  //           (this.computed = 0),
  //           (this.force = 0);
  //       };
  //     s.prototype.add = function (t) {
  //       return new s(this.x + t.x, this.y + t.y);
  //     };
  //     var h = function (t) {
  //       var i = 0.1,
  //         h = 1.5;
  //       (this.vel = new s(
  //         (Math.random() > 0.5 ? 1 : -1) * (0.2 + 0.25 * Math.random()),
  //         (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random())
  //       )),
  //         (this.pos = new s(
  //           0.2 * t.width + Math.random() * t.width * 0.6,
  //           0.2 * t.height + Math.random() * t.height * 0.6
  //         )),
  //         (this.size = t.wh / 15 + (Math.random() * (h - i) + i) * (t.wh / 15)),
  //         (this.width = t.width),
  //         (this.height = t.height);
  //     };
  //     h.prototype.move = function () {
  //       this.pos.x >= this.width - this.size
  //         ? (this.vel.x > 0 && (this.vel.x = -this.vel.x),
  //           (this.pos.x = this.width - this.size))
  //         : this.pos.x <= this.size &&
  //           (this.vel.x < 0 && (this.vel.x = -this.vel.x),
  //           (this.pos.x = this.size)),
  //         this.pos.y >= this.height - this.size
  //           ? (this.vel.y > 0 && (this.vel.y = -this.vel.y),
  //             (this.pos.y = this.height - this.size))
  //           : this.pos.y <= this.size &&
  //             (this.vel.y < 0 && (this.vel.y = -this.vel.y),
  //             (this.pos.y = this.size)),
  //         (this.pos = this.pos.add(this.vel));
  //     };
  //     var e = function (t, i, e, n, a) {
  //       (this.step = 5),
  //         (this.width = t),
  //         (this.height = i),
  //         (this.wh = Math.min(t, i)),
  //         (this.sx = Math.floor(this.width / this.step)),
  //         (this.sy = Math.floor(this.height / this.step)),
  //         (this.paint = !1),
  //         (this.metaFill = r(t, i, t, n, a)),
  //         (this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0]),
  //         (this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1]),
  //         (this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0]),
  //         (this.ix = [
  //           1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1,
  //         ]),
  //         (this.grid = []),
  //         (this.balls = []),
  //         (this.iter = 0),
  //         (this.sign = 1);
  //       for (var o = 0; o < (this.sx + 2) * (this.sy + 2); o++)
  //         this.grid[o] = new s(
  //           (o % (this.sx + 2)) * this.step,
  //           Math.floor(o / (this.sx + 2)) * this.step
  //         );
  //       for (var l = 0; e > l; l++) this.balls[l] = new h(this);
  //     };
  //     (e.prototype.computeForce = function (t, i, s) {
  //       var h,
  //         e = s || t + i * (this.sx + 2);
  //       if (0 === t || 0 === i || t === this.sx || i === this.sy)
  //         h = 0.6 * this.sign;
  //       else {
  //         h = 0;
  //         for (var r, n = this.grid[e], a = 0; (r = this.balls[a++]); )
  //           h +=
  //             (r.size * r.size) /
  //             (-2 * n.x * r.pos.x -
  //               2 * n.y * r.pos.y +
  //               r.pos.magnitude +
  //               n.magnitude);
  //         h *= this.sign;
  //       }
  //       return (this.grid[e].force = h), h;
  //     }),
  //       (e.prototype.marchingSquares = function (t) {
  //         var i = t[0],
  //           s = t[1],
  //           h = t[2],
  //           e = i + s * (this.sx + 2);
  //         if (this.grid[e].computed === this.iter) return !1;
  //         for (var r, n = 0, a = 0; 4 > a; a++) {
  //           var l = i + this.ix[a + 12] + (s + this.ix[a + 16]) * (this.sx + 2),
  //             d = this.grid[l].force;
  //           ((d > 0 && this.sign < 0) || (0 > d && this.sign > 0) || !d) &&
  //             (d = this.computeForce(
  //               i + this.ix[a + 12],
  //               s + this.ix[a + 16],
  //               l
  //             )),
  //             Math.abs(d) > 1 && (n += Math.pow(2, a));
  //         }
  //         if (15 === n) return [i, s - 1, !1];
  //         5 === n
  //           ? (r = 2 === h ? 3 : 1)
  //           : 10 === n
  //           ? (r = 3 === h ? 0 : 2)
  //           : ((r = this.mscases[n]), (this.grid[e].computed = this.iter));
  //         var p =
  //           this.step /
  //           (Math.abs(
  //             Math.abs(
  //               this.grid[
  //                 i +
  //                   this.plx[4 * r + 2] +
  //                   (s + this.ply[4 * r + 2]) * (this.sx + 2)
  //               ].force
  //             ) - 1
  //           ) /
  //             Math.abs(
  //               Math.abs(
  //                 this.grid[
  //                   i +
  //                     this.plx[4 * r + 3] +
  //                     (s + this.ply[4 * r + 3]) * (this.sx + 2)
  //                 ].force
  //               ) - 1
  //             ) +
  //             1);
  //         return (
  //           ctx.lineTo(
  //             this.grid[
  //               i + this.plx[4 * r] + (s + this.ply[4 * r]) * (this.sx + 2)
  //             ].x +
  //               this.ix[r] * p,
  //             this.grid[
  //               i +
  //                 this.plx[4 * r + 1] +
  //                 (s + this.ply[4 * r + 1]) * (this.sx + 2)
  //             ].y +
  //               this.ix[r + 4] * p
  //           ),
  //           (this.paint = !0),
  //           [i + this.ix[r + 4], s + this.ix[r + 8], r]
  //         );
  //       }),
  //       (e.prototype.renderMetaballs = function () {
  //         for (var t, i = 0; (t = this.balls[i++]); ) t.move();
  //         for (
  //           this.iter++,
  //             this.sign = -this.sign,
  //             this.paint = !1,
  //             ctx.fillStyle = this.metaFill,
  //             ctx.beginPath(),
  //             i = 0;
  //           (t = this.balls[i++]);

  //         ) {
  //           var s = [
  //             Math.round(t.pos.x / this.step),
  //             Math.round(t.pos.y / this.step),
  //             !1,
  //           ];
  //           do s = this.marchingSquares(s);
  //           while (s);
  //           this.paint &&
  //             (ctx.fill(), ctx.closePath(), ctx.beginPath(), (this.paint = !1));
  //         }
  //       });
  //     var r = function (t, i, s, h, e) {
  //       var r = ctx.createRadialGradient(t / 1, i / 1, 0, t / 1, i / 1, s);
  //       return r.addColorStop(0, h), r.addColorStop(1, e), r;
  //     };

  //     return {
  //       init: function (canvas) {
  //         var a = i.screen.init(canvas, null, true);
  //         ctx = a.ctx;
  //         a.resize();
  //         t = new e(a.width, a.height, 8, "#204fdb", "#da17cd");
  //       },
  //       animate: function () {
  //         ctx.clearRect(0, 0, canvas.width, canvas.height);
  //         t.renderMetaballs();
  //       },
  //     };
  //   })();

  //   lavaAnimation.init(canvas);

  //   const animate = () => {
  //     lavaAnimation.animate();
  //     animationFrameId = requestAnimationFrame(animate);
  //   };

  //   animate();

  //   return () => {
  //     cancelAnimationFrame(animationFrameId);
  //   };
  // }, []);

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        <Image
          className="absolute top-0 left-0 z-0"
          src={topleft}
          alt="topleft"
        />
        <Image
          className="hidden lg:block absolute overflow-clip mt-[-4rem] mr-[-4rem] sm:mt-[-2rem] sm:mr-[-2rem] right-0 z-0"
          src={constel}
          alt="constellation"
        />
        <Image
          className="hidden lg:block absolute bg-cover right-0 bottom-0 z-0"
          src={right}
          alt="bot-right"
        />
        <div
          className="container max-w-full md:max-w-[70%] relative m-auto flex flex-col min-h-screen text-our_white justify-center gap-[20px] max-sm:scale-90 z-10"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <Image
            className="hidden sm:block absolute bottom-0 md:bottom-0 md:right-[-8rem] z-0"
            src={astro2}
            alt="astro"
          />
          <Image
            className="sm:hidden absolute bottom-0 sm:bottom-0 right-0 sm:right-[-4rem] z-0"
            src={astro3}
            alt="astro-mob"
          />

          <div className="flex z-10 flex-col gap-24 sm:gap-12 items-center sm:items-start">
            <div className="flex flex-col gap-1 mt-[-8rem] sm:mt-0">
              <div className="uppercase  text-center sm:text-left text-white font-base-neue-black max-w-[100vw] text-5xl md:text-[6rem] font-bold leading-[90px] max-lg:text-[61px] max-lg:max-w-[480px] max-lg:leading-[70px] md:max-w-[700px] small-screen:text-[50px] small-screen:leading-[50px]">
                Hack For Tomorrow
              </div>
              <p
                data-aos="fade-up"
                data-aos-duration="1100"
                className="text-[21px] font-[500] font-syne-medium max-lg:text-[20px] max-md:text-[18px] text-center sm:text-left"
                // className="text-[21px] font-[500] font-syne-medium max-lg:text-[20px] max-md:text-[18px] text-center sm:text-left"
              >
                Innovate Today, Impact Tomorrow
              </p>
            </div>
            {/* <button className="btn-hover mt-10 rounded-full mx-auto sm:mx-0 font-syne-semibold bg-white font-bold uppercase text-[1rem] text-black px-3 py-3 max-w-[200px]"> */}
            {/* <div className="bg-white px-2 my-auto flex rounded-full font-syne-semibold font-bold">
              <p className="text-center pl-2 flex items-center btn-hover uppercase text-[1rem] text-black">
                Register Now
              </p>
              <span className=" rounded-full">
                <Image src={arrow} className="scale-75"></Image>
              </span>
            </div> */}
            <a 
              href="https://devfolio.co/"
              className="mt-1"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image src={applyImage} alt="Apply with Devfolio" className="cursor-pointer" /> {/* Just the image as a button */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlobAnimation;
