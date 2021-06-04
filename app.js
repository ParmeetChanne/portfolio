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
