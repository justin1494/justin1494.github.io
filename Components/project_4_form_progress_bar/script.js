const formPages = document.querySelectorAll(".page");
const steps = document.querySelectorAll(".step");
const progressBar = document.querySelector(".progress-bar");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

let currentStep = 1;
console.log(currentStep);

const handleNextBtn = () => {
  currentStep++;
  if (currentStep > steps.length) {
    currentStep = steps.length;
  }
  handleProgressBar();
  handleButtons();
  handleFormSteps();
};

const handlePrevBtn = () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }

  handleProgressBar();
  handleButtons();
  handleFormSteps();
};

const handleProgressBar = () => {
  steps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add("active-step");
    } else {
      step.classList.remove("active-step");
    }
  });

  const activeSteps = document.querySelectorAll(".active-step");
  const progressBarPercent =
    ((activeSteps.length - 1) / (steps.length - 1)) * 100;

  progressBar.style.width = `${progressBarPercent}%`;
};

const handleButtons = () => {
  if (currentStep === 1) {
    prevBtn.disabled = true;
  } else if (currentStep === steps.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};

const handleFormSteps = () => {
  formPages.forEach((element) => {
    if (currentStep == element.dataset.number) {
      element.classList.add("active-page");
    } else {
      element.classList.remove("active-page");
    }
  });
};

nextBtn.addEventListener("click", handleNextBtn);
prevBtn.addEventListener("click", handlePrevBtn);
