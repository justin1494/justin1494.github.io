const startBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const exitBtn = document.querySelector(".exit");
const archiveBtn = document.querySelector(".archive");
const archiveData = document.querySelector(".archive-data");
const secondsInput = document.querySelector(".seconds");
const minutesInput = document.querySelector(".minutes");

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
  stoperInterval = setInterval(incrementStoper, 10);
  startBtn.disabled = true;
};

const pauseTimers = () => {
  clearInterval(stoperInterval);
  startBtn.disabled = false;
};

const stopTimer = () => {
  if (secondsInput.textContent !== "00" && minutesInput.textContent !== "0") {
    clearInterval(stoperInterval);
    let time = document.createElement("p");
    let measureCount = archiveData.children.length + 1;

    time.textContent = `Pomiar nr ${measureCount}: ${minutes - 1}:${String(
      seconds
    ).padStart(2, "0")}`;
    archiveData.append(time);
    seconds = 0;
    minutes = 1;
    secondsInput.textContent = "00";
    minutesInput.textContent = "0";
    startBtn.disabled = false;
    archiveData.classList.remove("hidden");
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

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimers);

stopBtn.addEventListener("click", stopTimer);

archiveBtn.addEventListener("click", showArchive);

exitBtn.addEventListener("click", deleteArchiveData);

// const tenis = setInterval(incrementSeconds, 1000);
// tenis();
