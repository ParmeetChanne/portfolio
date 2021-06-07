let intro = document.querySelector(".intro");
let logo = document.querySelector("logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 4500);
  });
});

var d = new Date();
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

Number.prototype.pad = function (digits) {
  for (var n = this.toString(); n.length < digits; n = 0 + n);
  return n;
};

document.getElementById("datee").innerHTML = months[d.getMonth()];
document.getElementById("month").innerHTML = d.getDate().pad(2);

var textWrapper = document.querySelector(".header .header_1");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

/* smooth scrolling */

/* noise */

/* circle */
const circle = document.querySelector("#circle");
const text = circle.dataset.text;
const characters = text.split("");

const deltaAngle = 360 / characters.length;
const distanceFromCenter = 100; //256

characters.forEach((character, index) => {
  const span = document.createElement("span");
  span.innerText = character;

  const rotateY = `rotateY(${index * deltaAngle}deg)`;
  const translateZ = `translateZ(${distanceFromCenter}px)`;
  span.style.transform = `${rotateY} ${translateZ}`;

  circle.appendChild(span);
});

/* image effect */
