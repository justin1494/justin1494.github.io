const options = document.querySelectorAll(".option");
const optionsContent = document.querySelectorAll(".option-content");
const body = document.querySelector("body");

const toggleContent = (option) => {
  const optionContent = option.nextElementSibling;
  if (!optionContent.classList.contains("hidden")) {
    optionContent.classList.add("hidden");
  } else {
    hideAllContent();
    optionContent.classList.remove("hidden");
  }
};

const hideAllContent = () => {
  optionsContent.forEach((element) => {
    element.classList.add("hidden");
  });
};

options.forEach((element) => {
  element.addEventListener("click", () => toggleContent(element));
});

body.addEventListener("click", (e) => {
  if (e.target.localName == "body") {
    hideAllContent();
  }
});
