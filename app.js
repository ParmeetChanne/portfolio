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

anime
  .timeline({ loop: true })
  .add({
    targets: ".header .header_1",
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".header",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
