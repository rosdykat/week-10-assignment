"use client";

import "animate.css";

const animateCSS = (element, animation, prefix = "animate__") =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

export default function Meaning() {
  return (
    <>
      <h1 class="meaningtitle">Meaning</h1>
      <button class="funbutton">Fun</button>
      <button onClick={animateCSS} class="attbutton">
        Attention-grabbing
      </button>
      <button class="simplebutton">Simple</button>
      animateCSS('.meaningtitle', 'shakeX');
      animateCSS('.meaningtitle','shakeY'); animateCSS('.funbutton','tada');
      animateCSS('.attbutton','zoomInUp'); animateCSS('.simplebutton','pulse');
    </>
  );
}
