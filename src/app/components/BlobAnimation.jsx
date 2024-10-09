// import React, { useEffect, useRef } from "react";

// const BlobAnimation = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", resizeCanvas);
//     resizeCanvas();

//     class Vector {
//       constructor(x, y) {
//         this.x = x;
//         this.y = y;
//       }

//       add(v) {
//         return new Vector(this.x + v.x, this.y + v.y);
//       }
//     }

//     class Ball {
//       constructor(width, height) {
//         this.pos = new Vector(
//           0.2 * width + Math.random() * width * 0.6,
//           0.2 * height + Math.random() * height * 0.6
//         );
//         this.vel = new Vector(
//           (Math.random() > 0.5 ? 1 : -1) * (0.2 + 0.25 * Math.random()),
//           (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random())
//         );
//         this.radius =
//           Math.min(width, height) / 165 +
//           (Math.random() * 1.4 + 0.1) * (Math.min(width, height) / 15);
//         this.width = width;
//         this.height = height;
//         this.color = Math.random() > 0.5 ? "pink" : "purple";
//       }

//       move() {
//         if (this.pos.x >= this.width - this.radius) {
//           if (this.vel.x > 0) this.vel.x = -this.vel.x;
//           this.pos.x = this.width - this.radius;
//         } else if (this.pos.x <= this.radius) {
//           if (this.vel.x < 0) this.vel.x = -this.vel.x;
//           this.pos.x = this.radius;
//         }
//         if (this.pos.y >= this.height - this.radius) {
//           if (this.vel.y > 0) this.vel.y = -this.vel.y;
//           this.pos.y = this.height - this.radius;
//         } else if (this.pos.y <= this.radius) {
//           if (this.vel.y < 0) this.vel.y = -this.vel.y;
//           this.pos.y = this.radius;
//         }
//         this.pos = this.pos.add(this.vel);
//       }
//     }

//     class BlobAnimation {
//       constructor(width, height) {
//         this.width = width;
//         this.height = height;
//         this.balls = [];
//         for (let i = 0; i < 35; i++) {
//           this.balls.push(new Ball(width, height));
//         }
//       }

//       render(ctx) {
//         ctx.fillStyle = "black";
//         ctx.fillRect(0, 0, this.width, this.height);

//         for (let i = 0; i < this.balls.length; i++) {
//           const ball = this.balls[i];
//           const gradient = ctx.createRadialGradient(
//             ball.pos.x,
//             ball.pos.y,
//             0,
//             ball.pos.x,
//             ball.pos.y,
//             ball.radius
//           );
//           gradient.addColorStop(
//             0,
//             ball.color === "pink"
//               ? "rgba(255, 192, 203, 0.8)"
//               : "rgba(128, 0, 128, 0.8)"
//           );
//           gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

//           ctx.beginPath();
//           ctx.fillStyle = gradient;
//           ctx.arc(ball.pos.x, ball.pos.y, ball.radius * 2, 0, Math.PI * 2);
//           ctx.fill();

//           ball.move();
//         }
//       }
//     }

//     const animation = new BlobAnimation(canvas.width, canvas.height);

//     const animate = () => {
//       animation.render(ctx);
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{ width: "100%", height: "100%", background: "black" }}
//     />
//   );
// };

// export default BlobAnimation;

import React, { useEffect, useRef } from "react";

const BlobAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Vector {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      add(v) {
        return new Vector(this.x + v.x, this.y + v.y);
      }
    }

    class Ball {
      constructor(width, height) {
        this.pos = new Vector(
          0.2 * width + Math.random() * width * 0.6,
          0.2 * height + Math.random() * height * 0.6
        );
        this.vel = new Vector(
          (Math.random() > 0.5 ? 1 : -1) * (0.2 + 0.25 * Math.random()),
          (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random())
        );
        this.radius =
          Math.min(width, height) / 1005 +
          (Math.random() * 1.4 + 0.1) * (Math.min(width, height) / 15);
        this.width = width;
        this.height = height;
      }

      move() {
        if (this.pos.x >= this.width - this.radius) {
          if (this.vel.x > 0) this.vel.x = -this.vel.x;
          this.pos.x = this.width - this.radius;
        } else if (this.pos.x <= this.radius) {
          if (this.vel.x < 0) this.vel.x = -this.vel.x;
          this.pos.x = this.radius;
        }
        if (this.pos.y >= this.height - this.radius) {
          if (this.vel.y > 0) this.vel.y = -this.vel.y;
          this.pos.y = this.height - this.radius;
        } else if (this.pos.y <= this.radius) {
          if (this.vel.y < 0) this.vel.y = -this.vel.y;
          this.pos.y = this.radius;
        }
        this.pos = this.pos.add(this.vel);
      }
    }

    class BlobAnimation {
      constructor(width, height) {
        this.width = width;
        this.height = height;
        this.balls = [];
        for (let i = 0; i < 6; i++) {
          this.balls.push(new Ball(width, height));
        }
      }

      render(ctx) {
        ctx.clearRect(0, 0, this.width, this.height);
        const imageData = ctx.createImageData(this.width, this.height);
        const data = imageData.data;

        for (let y = 0; y < this.height; y++) {
          for (let x = 0; x < this.width; x++) {
            let sum = 0;
            for (let i = 0; i < this.balls.length; i++) {
              const ball = this.balls[i];
              const dx = x - ball.pos.x;
              const dy = y - ball.pos.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              sum += ball.radius / dist;
            }
            const index = (y * this.width + x) * 4;
            const color = Math.min(255, sum * 255);
            data[index] = 18; // R
            data[index + 1] = 155; // G
            data[index + 2] = 113; // B
            data[index + 3] = color; // A
          }
        }

        ctx.putImageData(imageData, 0, 0);

        for (let i = 0; i < this.balls.length; i++) {
          this.balls[i].move();
        }
      }
    }

    const animation = new BlobAnimation(canvas.width, canvas.height);

    const animate = () => {
      animation.render(ctx);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default BlobAnimation;
