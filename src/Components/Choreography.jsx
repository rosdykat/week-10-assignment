"use client";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Choreography() {
  AOS.init();
  return (
    <>
      <script src="bower_components/aos/dist/aos.js"></script>
      <h1 data-aos="fade-up">Choreography</h1>
    </>
  );
}
