const startBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const exitBtn = document.querySelector(".exit");
const archiveBtn = document.querySelector(".archive");
const archiveData = document.querySelector(".archive-data");
const infoBtn = document.querySelector(".info");
const colorsBtn = document.querySelector(".color-button");
const colorsPallete = document.querySelector(".colors");
const secondsInput = document.querySelector(".seconds");
const minutesInput = document.querySelector(".minutes");
const modal = document.querySelector(".modal-wrapper");
const closeModalBtn = document.querySelector(".close-modal");
const redBtn = document.querySelector(".red");
const blueBtn = document.querySelector(".blue");
const greenBtn = document.querySelector(".green");

let seconds = 0;
let minutes = 1;

const incrementStoper = () => {
  seconds += 1;
  secondsInput.textContent = `${String(seconds).padStart(2, "0")}`;
  if (seconds === 60) {
    seconds = 0;
    minutesInput.textContent = minutes;
    minutes++;
  }
};

const startTimer = () => {
  stoperInterval = setInterval(incrementStoper, 100);
  startBtn.disabled = true;
};

const pauseTimers = () => {
  clearInterval(stoperInterval);
  startBtn.disabled = false;
};

const stopTimer = () => {
  if (secondsInput.textContent !== "00" || minutesInput.textContent !== "0") {
    clearInterval(stoperInterval);
    let time = document.createElement("p");
    let measureCount = archiveData.children.length + 1;
    let timeCount = `${minutes - 1}:${String(seconds).padStart(2, "0")}`;

    console.log(timeCount);

    time.innerHTML = `<p>Pomiar nr ${measureCount}<span style="margin-left: 50px; font-weight: 600;">${timeCount}</span></p>`;
    archiveData.append(time);

    seconds = 0;
    minutes = 1;
    secondsInput.textContent = "00";
    minutesInput.textContent = "0";
    startBtn.disabled = false;
    // archiveData.classList.remove("hidden");
  }
};

const showArchive = () => {
  archiveData.classList.toggle("hidden");
};

const deleteArchiveData = () => {
  archiveData.innerHTML = "";
  archiveData.classList.add("hidden");
  clearInterval(stoperInterval);
  seconds = 0;
  minutes = 1;
  secondsInput.textContent = "00";
  minutesInput.textContent = "0";
  startBtn.disabled = false;
};

const showInfo = () => {
  modal.classList.remove("hidden");
};

const hideInfo = () => {
  modal.classList.add("hidden");
};

const showColors = () => {
  colorsPallete.classList.toggle("hidden");
};

const colorChange = (color) => {
  document.documentElement.style.setProperty("--main-color", `${color}`);
};

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimers);
stopBtn.addEventListener("click", stopTimer);
archiveBtn.addEventListener("click", showArchive);
exitBtn.addEventListener("click", deleteArchiveData);
infoBtn.addEventListener("click", showInfo);
closeModalBtn.addEventListener("click", hideInfo);
colorsBtn.addEventListener("click", showColors);

redBtn.addEventListener("click", () =>
  document.documentElement.style.setProperty("--main-color", "rgb(195, 74, 61)")
);

blueBtn.addEventListener("click", () =>
  document.documentElement.style.setProperty(
    "--main-color",
    "rgb(122, 137, 188)"
  )
);

greenBtn.addEventListener("click", () =>
  document.documentElement.style.setProperty("--main-color", "rgb(40, 120, 61)")
);
