// "use strict";

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
const span = document.querySelector("span");

let counter = 0;
next.addEventListener("click", function () {
  counter++;
  if (counter > 0) prev.removeAttribute("disabled");
  circles[counter].classList.add("active");
  if (counter == 4) this.setAttribute("disabled", true);

  span.style.width = `${25 * counter}%`;
});

prev.addEventListener("click", function () {
  if (next.getAttribute("disabled") === "true") {
    next.removeAttribute("disabled");
  }
  circles[counter].classList.remove("active");
  counter--;
  span.style.width = `${25 * counter}%`;
  if (counter == 0) {
    this.setAttribute("disabled", true);
  }
});
