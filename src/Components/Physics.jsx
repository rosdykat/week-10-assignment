"use client";

import "animate.css";
import style from "@/Components/physics.module.css";

function PhysicsClick() {
  const element = document.querySelector(`.${style.bigBox}`);
  element.classList.remove("animate__bounce", "animate__slower");
  element.classList.add("animate__bounce", "animate__slower");
}

export default function PhysicsComponent() {
  return (
    <div className={style.boxContainer}>
      <div
        className={`${style.bigBox} animate__animated animate__bounce animate__slower`}
      >
        <button onClick={PhysicsClick}>Click me!</button>
      </div>
      <div
        className={`${style.mediumBox} animate__animated animate__bounce animate__slow`}
      >
        <button>Click me!</button>
      </div>
      <div
        className={`${style.smallBox} animate__animated animate__bounce animate__fast`}
      >
        <button>Click me!</button>
      </div>
    </div>
  );
}
