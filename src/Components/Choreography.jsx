"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Choreography() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <h1 data-aos="fade-up">Choreography</h1>
    </>
  );
}
