import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Jelajahi cerita singkatnya.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-4xl md:text-6xl font-bold neon-text">
              Kuat. Indah.
            </h2>
            <h2 className="text-5xl md:text-7xl font-bold neon-text-glow mt-2">
              Inilah Titanium.
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro memiliki desain titanium Kelas 5 dengan
                    tekstur mikroblasting baru yang disempurnakan. Titanium
                    memiliki salah satu rasio kekuatan terhadap berat tertinggi
                    dibandingkan logam lainnya, yang membuat model ini{" "}
                    <span className="text-white">
                      sangat tangguh dan luar biasa ringan
                    </span>
                    , iPhone 15 Pro hadir dalam empat warna memukau — termasuk
                    Titanium Gurun baru.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Penyempurnaan desain internal — termasuk substruktur termal
                    aluminium daur ulang 100 persen dan pengoptimalan kaca
                    belakang yang semakin menghilangkan panas — memungkinkan
                    hingga 20 persen.{" "}
                    <span className="text-white">
                      {" "}
                      Performa berkelanjutan yang lebih baik
                    </span>{" "}
                    Jadi, Anda dapat melakukan segala hal yang Anda sukai —
                    seperti bermain game intensitas tinggi — lebih lama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
