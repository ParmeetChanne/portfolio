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

/* Circle5 */
const degreeToRadian = (angle) => {
  return angle * (Math.PI / 180);
};

const radius = 80;
const diameter = radius * 2;

const circle5 = document.querySelector("#circle5");
circle5.style.width = `${diameter}px`;
circle5.style.height = `${diameter}px`;

const text5 = circle5.dataset.text;
const characters5 = text5.split("");

const deltaAngle5 = 360 / characters.length;
const characterOffsetAngle = 8;
let currentAngle = -90;

characters5.forEach((character, index) => {
  const span = document.createElement("span");
  span.innerText = character;
  const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
  const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

  const transform = `translate(${xPos}px, ${yPos}px)`;
  const rotate = `rotate(${index * deltaAngle5 + characterOffsetAngle}deg)`;
  span.style.transform = `${transform} ${rotate}`;

  currentAngle += deltaAngle;
  circle5.appendChild(span);
});
