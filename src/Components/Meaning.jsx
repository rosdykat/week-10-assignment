"use client";
import "animate.css";
import style from "@/Components/meaning.module.css";

// const animateCSS = (element, animation, prefix = "animate__") =>
//   new Promise((resolve, reject) => {
//     const animationName = `${prefix}${animation}`;
//     const node = document.querySelector(element);

//     animateCSS(".meaningtitle", "shakeX");
//     animateCSS(".meaningtitle", "shakeY");
//     animateCSS(".funbutton", "tada");
//     animateCSS(".attbutton", "zoomInUp");
//     animateCSS(".simplebutton", "pulse");

//     node.classList.add(`${prefix}animated`, animationName);

//     function handleAnimationEnd(event) {
//       event.stopPropagation();
//       node.classList.remove(`${prefix}animated`, animationName);
//       resolve("Animation ended");
//     }

//     node.addEventListener("animationend", handleAnimationEnd, { once: true });
//   });

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
            <p>Explain here</p>
          </div>
          <div
            className={`${style.attentionExplain} ${style.hidden} animate__animated`}
          >
            <h1>Attention</h1>
            <p>Explain here</p>
          </div>
          <div
            className={`${style.simpleExplain} ${style.hidden} animate__animated`}
          >
            <h1>Simple</h1>
            <p>Explain here</p>
          </div>
        </div>
      </div>
    </>
  );
}
