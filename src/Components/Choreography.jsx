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
    <div className={style.choreobody}>
      <h1 className={style.titlechoreo}>Choreography</h1>
      <div className={style.flexbox}>
        <img
          className={style.heartclose}
          src="/frogphotos/heartclose.jpg"
          data-aos="flip-left"
        />
        <img
          className={style.camheart}
          src="/frogphotos/camheartmed.jpg"
          data-aos="flip-up"
          data-aos-delay="500"
        />
        <img
          className={style.camclose}
          src="/frogphotos/camclose.jpg"
          data-aos="flip-right"
          data-aos-delay="1000"
        />
      </div>
      <div className={style.biogdiv}>
        <img
          className={style.frogparty}
          src="/frogphotos/camgroup.jpg"
          data-aos="zoom-in-right"
          data-aos-duration="700"
          data-aos-delay="700"
        />
        <h2
          className={style.titlefrog}
          data-aos="zoom-in-left"
          data-aos-duration="700"
          data-aos-delay="700"
        >
          Frogtography
        </h2>
        <p
          className={style.frogbiog}
          data-aos="zoom-in-left"
          data-aos-duration="700"
          data-aos-delay="700"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          egestas mauris risus, viverra sodales leo facilisis ultrices. Nullam
          dui sapien, porta a volutpat sit amet, cursus sed nibh. Proin ac velit
          a nunc finibus vehicula. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Nullam interdum
          pretium maximus. Nullam consequat hendrerit velit, sit amet mollis
          enim vestibulum id. In at venenatis libero.
        </p>
      </div>
      <div className={style.gallerydiv}>
        <img
          className={style.posefrog}
          src="/frogphotos/posingfrog.jpg"
          data-aos="fade-up-left"
          data-aos-duration="900"
          data-aos-delay="700"
        />
        <img
          className={style.partyfrog}
          src="/frogphotos/partyfrogs.jpg"
          data-aos="fade-up-right"
          data-aos-duration="900"
          data-aos-delay="700"
        />
      </div>
      <div className={style.enquirediv}>
        <img className={style.prayfrog} src="/frogphotos/prayingfrog.jpg" />
        <div className={style.overlaytxt}>
          <p
            className={style.text2}
            data-aos="flip-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            Proin eget magna maximus leo euismod ornare quis quis arcu. Nam mi
            nisi, malesuada vel pulvinar in, viverra convallis urna. Morbi metus
            dolor, eleifend ac scelerisque sit amet, ullamcorper eget tellus.
            Cras sodales sodales eros nec aliquam. Integer nec lorem pulvinar,
            sodales felis at, varius nisi.
          </p>
          <button
            className={style.frogbutton}
            data-aos="flip-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
