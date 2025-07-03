"use client";
import "animate.css";
import style from "@/Components/meaning.module.css";

function FunClick() {
  const element = document.querySelector(`.${style.fun}`);
  element.classList.remove("animate__flip");
  void element.offsetWidth;
  element.classList.add("animate__flip");

  const hiddenBox = document.querySelector(`.${style.funExplain}`);
  hiddenBox.classList.remove("animate__fadeInUp");
  void element.offsetWidth;
  hiddenBox.classList.add("animate__fadeInUp");

  if (hiddenBox.classList.contains(style.hidden)) {
    hiddenBox.classList.remove(style.hidden);
  } else {
    hiddenBox.classList.add(style.hidden);
  }
}

function AttentionClick() {
  const element = document.querySelector(`.${style.attention}`);
  element.classList.remove("animate__shakeY");
  void element.offsetWidth;
  element.classList.add("animate__shakeY");

  const hiddenBox = document.querySelector(`.${style.attentionExplain}`);
  hiddenBox.classList.remove("animate__fadeInUp");
  void element.offsetWidth;
  hiddenBox.classList.add("animate__fadeInUp");

  if (hiddenBox.classList.contains(style.hidden)) {
    hiddenBox.classList.remove(style.hidden);
  } else {
    hiddenBox.classList.add(style.hidden);
  }
}

function SimpleClick() {
  const element = document.querySelector(`.${style.simple}`);
  element.classList.remove("animate__fadeInLeft");
  void element.offsetWidth;
  element.classList.add("animate__fadeInLeft");

  const hiddenBox = document.querySelector(`.${style.simpleExplain}`);
  hiddenBox.classList.remove("animate__fadeInUp");
  void element.offsetWidth;
  hiddenBox.classList.add("animate__fadeInUp");

  if (hiddenBox.classList.contains(style.hidden)) {
    hiddenBox.classList.remove(style.hidden);
  } else {
    hiddenBox.classList.add(style.hidden);
  }
}

export default function Meaning() {
  return (
    <>
      <h1 className={style.title}>Meaning</h1>
      <div className={style.meaningContainer}>
        <div className={style.shapes}>
          <section
            onClick={FunClick}
            className={`${style.fun} animate__animated`}
          >
            <p>Fun</p>
          </section>
          <section
            onClick={AttentionClick}
            className={`${style.attention} animate__animated`}
          >
            <p>Attention</p>
          </section>
          <section
            onClick={SimpleClick}
            className={`${style.simple} animate__animated`}
          >
            <p>Simple</p>
          </section>
        </div>
        <div className={style.explainBoxes}>
          <div
            className={`${style.funExplain} ${style.hidden} animate__animated`}
          >
            <h1>Fun</h1>
            <img src="/Images/funclick.png" height="300" width="auto" />
          </div>
          <div
            className={`${style.attentionExplain} ${style.hidden} animate__animated`}
          >
            <h1>Attention</h1>
            <img src="/Images/attentionClick.png" height="300" width="auto" />
          </div>
          <div
            className={`${style.simpleExplain} ${style.hidden} animate__animated`}
          >
            <h1>Simple</h1>
            <img src="/Images/simpleclick.png" height="300" width="auto" />
          </div>
        </div>
      </div>
    </>
  );
}
