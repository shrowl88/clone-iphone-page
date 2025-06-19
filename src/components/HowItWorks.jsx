import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold neon-text-a17">
            A17 Pro.
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium neon-subtext mt-2">
            Chip dengan kemampuan kolosal.
          </h2>
          <p className="hiw-subtitle">
            Inilah A17 Pro: chip luar biasa andal yang menghadirkan kecepatan
            dan efisiensi mengagumkan ke iPhone 15 Pro. Chip ini juga
            menggerakkan fitur video dan foto canggih seperti Kontrol Kamera —
            dan menghadirkan performa grafis memukau untuk game AAA.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            MOBILE LEGENDS: BANG BANG
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-5xl font-bold ">Bermain game</h1>
          <h2 className="text-2xl md:text-4xl font-medium neon-text-a17 mt-2">
            dengan pencahayaan baru.
          </h2>
          <p className="hiw-subtitle text-5xl md:text-5xl font-bold">
            Ray tracing yang dipercepat perangkat keras hingga 2x lebih cepat
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              Dengan ray tracing yang dipercepat perangkat keras hingga dua kali
              lebih cepat, A17 Pro{" "}
              <span className="text-white">
                membuat game terlihat dan terasa sungguh nyata{" "}
              </span>{" "}
              dengan grafis yang lebih halus dan pencahayaan yang realistis.{" "}
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">
              Dan dengan Mode Game di iOS 18, Anda akan menikmati kecepatan
              frame berkelanjutan yang semakin baik untuk permainan
              terus-menerus dan respons yang disempurnakan jika Anda menggunakan
              kontroler nirkabel dan AirPods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
