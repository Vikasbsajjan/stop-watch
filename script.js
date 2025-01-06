import Timer from "./timer.js";

const btn_start = document.querySelector(".start");
const btn_stop = document.querySelector(".stop");
const btn_reset = document.querySelector(".reset");
const btns = [btn_start, btn_stop, btn_reset];

const hour = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".sec");
const mili_sec = document.querySelector(".mili-sec");

//declaring a global variable for setInterval Id;
let timer_Interval;

// creating an object of Timer class;
let timer = new Timer();

// creating a variable to check weather timer is started or not;
let timer_started = false;

// a timer function which handles the logic and a callback function for setInterval
function start_Timer() {
  timer.increment_Mili_sec();
  if (timer.milisec > 99) {
    timer.increment_Sec();
    timer.milisec = 0;
  } else if (timer.sec > 59) {
    timer.increment_Minute();
    timer.sec = 0;
  } else if (timer.min > 59) {
    timer.increment_Hour();
    timer.min = 0;
  }
  updateTime();
}

// addding active class btn
function add_active_class(e) {
  const cur_btn = e.target.id;
  // remove active class from btn's
  btns.forEach((btn) => cur_btn != btn.id && btn.classList.remove("active"));

  //adding active class to current btn;
  e.target.classList.toggle("active");
}

// start Timer functionality
btn_start.addEventListener("click", (e) => {
  // check if a timer is started or not. if started remove and start new timer
  add_active_class(e);
  if (timer_started) {
    timer_started = false;
    timer.reset();
    updateTime();
    clearInterval(timer_Interval);
    return;
  } else {
    timer_Interval = setInterval(start_Timer, 9);
    timer_started = true;
  }
});

// stop timer functionality
btn_stop.addEventListener("click", (e) => {
  clearInterval(timer_Interval);
  timer_started = false;
  add_active_class(e);
  btn_stop.classList.add("active");
});

// reset Timer functionality
btn_reset.addEventListener("click", (e) => {
  timer.reset();
  updateTime();
  clearInterval(timer_Interval);
  add_active_class(e);
  btn_reset.classList.remove("active");
});

// function to  update the time;
function updateTime() {
  mili_sec.innerHTML = `${
    timer.milisec <= 9 ? "0" + timer.milisec : timer.milisec
  }`;
  sec.innerHTML = `${timer.sec <= 9 ? "0" + timer.sec : timer.sec}`;
  min.innerHTML = `${timer.min <= 9 ? "0" + timer.min : timer.min}`;
  hour.innerHTML = `${timer.hour > 9 ? timer.hour : "0" + timer.hour}`;
}
