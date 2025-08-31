import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CertificationCard from './assets/CertificationCard'
import { dataCerti } from '../../constant'
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CompetitionCard from './assets/competitionCard';


// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const competitionTitleRef = useRef(null);
  const competitionCardRef = useRef(null);
  const certificationTitleRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mainTitle = mainTitleRef.current;
    const competitionTitle = competitionTitleRef.current;
    const competitionCard = competitionCardRef.current;
    const certificationTitle = certificationTitleRef.current;
    const swiper = swiperRef.current;

    // Set initial states
    gsap.set(mainTitle, { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    });
    
    gsap.set(competitionTitle, { 
      opacity: 0, 
      x: -50 
    });

    gsap.set(competitionCard, { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    });

    gsap.set(certificationTitle, { 
      opacity: 0, 
      x: -50 
    });

    gsap.set(swiper, { 
      opacity: 0, 
      y: 50 
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate main title
    tl.to(mainTitle, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    })
    // Animate competition section
    .to(competitionTitle, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")
    .to(competitionCard, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.2)"
    }, "-=0.4")
    // Animate certification section
    .to(certificationTitle, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.2")
    .to(swiper, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section  id='achievements'
      ref={sectionRef}
      className="mt-32 sm:mt-40 md:mt-48 lg:mt-56 xl:mt-64 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28 max-w-7xl mx-auto" 
      style={{ fontFamily: "Sora Variable" }}
    >
      <h1 
        ref={mainTitleRef}
        className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-semibold text-center relative z-30 overflow-hidden mb-12 sm:mb-16 md:mb-20'
      >
        Achievements
      </h1>
      
      {/* Competition Section */}
      <div className="mb-16 sm:mb-20 md:mb-24">
        <h2 
          ref={competitionTitleRef}
          className='text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 md:mb-10'
        >
          Competition
        </h2>
        <div 
          ref={competitionCardRef}
          className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10'
        >
          <article>
        <h1>Competition</h1>
        <CompetitionCard />
      </article>
        </div>
      </div>
      
      {/* Certification Section with Swiper */}
      <div>
        <h2 
          ref={certificationTitleRef}
          className='text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 md:mb-10'
        >
          Certification
        </h2>
        
        <div 
          ref={swiperRef}
          className="flex justify-center items-center"
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: false,
              }
            }}
            className='my-6 sm:my-8 md:my-10 w-full max-w-6xl'
            style={{
              '--swiper-navigation-color': '#ffffff',
              '--swiper-pagination-color': '#ffffff',
            }}
          >
            {dataCerti.map((d, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center pb-12">
                <div className="flex justify-center items-center w-full h-full">
                  <CertificationCard 
                    gambar={d.gambar} 
                    judul={d.judul} 
                    link={d.link} 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(255, 255, 255, 0.1) !important;
          border-radius: 50% !important;
          width: 40px !important;
          height: 40px !important;
          margin-top: -20px !important;
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: scale(1.1);
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 0.7 !important;
        }
        
        .swiper-pagination-bullet-active {
          background: white !important;
          opacity: 1 !important;
        }
        
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 35px !important;
            height: 35px !important;
            margin-top: -17.5px !important;
          }
        }
        
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Achievements