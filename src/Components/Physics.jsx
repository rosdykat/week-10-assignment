"use client";

import "animate.css";
import style from "@/Components/physics.module.css";

function SlowClick() {
  const element = document.querySelector(".bigBox");
  element.classList.remove("animate__bounce", "animate__slower");
  void element.offsetWidth;
  element.classList.add("animate__bounce", "animate__slower");
}

function MediumClick() {
  const element = document.querySelector(".mediumBox");
  element.classList.remove("animate__bounce", "animate__slow");
  void element.offsetWidth;
  element.classList.add("animate__bounce", "animate__slow");
}

function FastClick() {
  const element = document.querySelector(".smallBox");
  element.classList.remove("animate__bounce", "animate__fast");
  void element.offsetWidth;
  element.classList.add("animate__bounce", "animate__fast");
}

export default function PhysicsComponent() {
  return (
    <div className={style.boxContainer}>
      <div className={`${style.bigBox} animate__animated bigBox`}>
        <button onClick={SlowClick}>Click me!</button>
      </div>
      <div className={`${style.mediumBox} animate__animated mediumBox`}>
        <button onClick={MediumClick}>Click me!</button>
      </div>
      <div
        className={`${style.smallBox} animate__animated animate__bounce animate__fast smallBox`}
      >
        <button onClick={FastClick}>Click me!</button>
      </div>
    </div>
  );
}
