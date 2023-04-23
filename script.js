var sec = 00;
var tens = 00;

var getTens = document.querySelector(".min");
var getSecs = document.querySelector(".sec");

var btnStart = document.querySelector(".btn-start");

var btnStop = document.querySelector(".btn-stop");

var btnReset = document.querySelector(".btn-reset");

let interval;

btnStart.addEventListener("click", () => {
  interval = setInterval(startTimer, 10);
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
});

btnReset.addEventListener("click", () => {
  clearInterval(interval);
  tens = 00;
  sec = 00;
  getTens.innerHTML = "00";
  getSecs.innerHTML = "00";
  stop();
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    getTens.innerHTML = tens;
  }
  if (tens > 99) {
    sec++;
    if (sec < 9) {
      getSecs.innerHTML = "0" + sec;
    } else {
      getSecs.innerHTML = sec;
    }
    tens = 00;
  }
}
