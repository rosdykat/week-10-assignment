"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import style from "@/Components/choreo.module.css";

export default function Choreography() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <h1 {style.titlechoreo} data-aos="fade-up">
        Choreography
      </h1>
      <div {style.flexbox}>
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
      </div>
      <div className="biogdiv">
        <img
          className="frogparty"
          src="/frogphotos/camgroup.jpg"
          data-aos="zoom-in-right"
        />
        <h3 className="titlefrog" data-aos="zoom-in-left">
          Frogtography
        </h3>
        <p className="frogbiog" data-aos="zoom-in-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          egestas mauris risus, viverra sodales leo facilisis ultrices. Nullam
          dui sapien, porta a volutpat sit amet, cursus sed nibh. Proin ac velit
          a nunc finibus vehicula. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Nullam interdum
          pretium maximus. Nullam consequat hendrerit velit, sit amet mollis
          enim vestibulum id. In at venenatis libero.
        </p>
      </div>
      <div className="gallerydiv">
        <img
          className="posefrog"
          src="/frogphotos/posingfrog.jpg"
          data-aos="fade-up-left"
        />
        <img
          className="partyfrog"
          src="/frogphotos/partyfrogs.jpg"
          data-aos="fade-up-right"
        />
      </div>
      <p className="text2">
        Proin eget magna maximus leo euismod ornare quis quis arcu. Nam mi nisi,
        malesuada vel pulvinar in, viverra convallis urna. Morbi metus dolor,
        eleifend ac scelerisque sit amet, ullamcorper eget tellus. Cras sodales
        sodales eros nec aliquam. Integer nec lorem pulvinar, sodales felis at,
        varius nisi.
      </p>
      <div className="enquirediv">
        <img className="prayfrog" src="/frogphotos/prayingfrog.jpg" />
        <button className="frogbutton" data-aos="flip-up">
          Enquire
        </button>
      </div>
    </>
  );
}
