let hoursEl = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let am = document.getElementById("Am");

function update() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hoursEl.innerText = h;
  Minutes.innerText = m;
  seconds.innerText = s;
  am.innerText = ampm;
  setTimeout(() => {
    update();
  }, 1000);
}
update();
