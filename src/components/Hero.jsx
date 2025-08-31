import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import DarkVeil from "./assets/Darkveil";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
  gsap.set("#nama", { overflow: "hidden" });
  gsap.set([".hero-subtitle", ".hero-description", ".scroll-text", ".scroll-arrow"], {
    opacity: 0,
    y: 50
  });

  const heroText = new SplitText("#nama", { type: "chars,words" });
  gsap.set(heroText.chars, { yPercent: 100, opacity: 0 });

  // Responsif GSAP
  let mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    // Timeline khusus desktop
    const tl = gsap.timeline();

    tl.to(".hero-subtitle", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    })
    .to(".hero-description", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    }, "-=0.8")
    .to(heroText.chars, {
      yPercent: 0,
      opacity: 1,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    }, "-=0.5")
    .to(".scroll-text", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.3")
    .to(".scroll-arrow", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "back.out(1.7)",
    }, "-=0.5");
  });

  mm.add("(max-width: 767px)", () => {
    // Timeline khusus HP (lebih cepat, tanpa delay lama)
    const tl = gsap.timeline();

    tl.to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.8 })
      .to(heroText.chars, {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.04,
      }, "-=0.4")
      .to(".hero-description", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(".scroll-text", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to(".scroll-arrow", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");
  });

  gsap.to(".scroll-arrow", {
    y: -10,
    duration: 1.5,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
    delay: 3
  });
}, []);


  return (
    <section
      id="home"
      style={{ fontFamily: "Sora Variable" }}
      className="font-sora flex flex-col items-center relative min-h-screen"
    >
      {/* Background */}
      <div style={{ width: "100%", height: "600px" }} className="absolute top-0">
        <DarkVeil />
      </div>

      {/* Konten */}
      <div className="relative z-10 mt-[100px] lg:mt-[155px] text-center lg:text-left px-6">
        <h1 className="text-2xl sm:text-3xl hero-subtitle bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">
          Hi, I'm
        </h1>
        <h2
          id="nama"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-white font-bold leading-tight"
        >
          Rafaditya Syahputra
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl hero-description bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent mt-4">
          I'm Front-end Dev, UI/UX Designer, Artist <br className="hidden sm:block" /> and
          Photographer. Enjoy my Portfolio 🙌.
        </p>
      </div>

      {/* Tombol GitHub */}
      <div className="w-16 sm:w-15 flex items-center justify-center relative z-25 mt-8 lg:mt-15">
        <a
          href="https://github.com/raditt10"
          className="hover:scale-110 transition"
          target="_blank"
        >
          <img src="/img/github.png" alt="github" className="w-full h-auto" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16 lg:mt-[155px] flex flex-col items-center gap-6 lg:gap-10 relative z-10">
        <h1 className="scroll-text text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-extralight">
          Scroll Down
        </h1>
        <div className="scroll-arrow animate-bounce">
          <img src="/img/Arrow 1.png" alt="arrow" className="w-6 sm:w-8 lg:w-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
