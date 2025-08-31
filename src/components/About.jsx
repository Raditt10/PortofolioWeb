import React from "react";
import Marquee from "react-fast-marquee";
import ProfileCard from "./assets/ProfileCard";

const About = () => {
  return (
    <section id="about" className="mt-64 relative">
    <div className="flex justify-center items-center scale-130 relative z-20">
        <ProfileCard
        name="Rafaditya Syahputra"
        title="Front End Developer"
        handle="rafaa_ndl"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/img/radit2.jpg"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log("Contact clicked")}
      />
    </div>
    <div>
      <div className="flex flex-col gap-10 absolute top-0 rotate-6">
      <Marquee>
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
         
         
      </Marquee>

      <Marquee direction="right">
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
      </Marquee>

      <Marquee >
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
      </Marquee>

      <Marquee direction="right" >
         <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
      </Marquee>
     
      <Marquee>
         <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
      </Marquee>

       <Marquee>
         <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
        <img className="mx-6" src="/img/logo_RS.png" alt="RS" />
      </Marquee>
      </div>
    </div>
    </section>
  );
};

export default About;
