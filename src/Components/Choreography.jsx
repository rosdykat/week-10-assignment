"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Choreography() {
  // useEffect(() => {
  //   async function aoswork() {
  //     const aos = await AOS.init();
  //   }
  // }, []);
  return (
    <>
      <h1 data-aos="fade-up">Choreography</h1>
      <img
        className="heartclose"
        src="/frogphotos/heartclose.jpg"
        data-aos="flip-left"
      />
      <img
        className="camheart"
        src="/frogphotos/camheartmed.jpg"
        data-aos="flip-up"
      />
      <img
        className="camclose"
        src="/frogphotos/camclose.jpg"
        data-aos="flip-right"
      />
      <img src="/frogphotos/camgroup.jpg" />
      <h3>Frogtography</h3>
      <p>Lorem50</p>
      <img src="/frogphotos/posingfrog.jpg" />
      <img src="/frogphotos/partyfrogs.jpg" />
      <p>Lorem 50</p>
      <img src="/frogphotos/prayingfrog.jpg" />
      <button>Buy Now/Gallery</button>
    </>
  );
}
