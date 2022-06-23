const presents = document.querySelectorAll(".present");
const boxes = document.querySelectorAll(".box");
const presentBox = document.querySelector(".present-box");
const chosenBox = document.querySelector(".chosen-box");
const sendBtn = document.querySelector(".send-btn");

presents.forEach((present) => {
  present.addEventListener("dragstart", () => {
    present.classList.add("is-dragged");
  });
  present.addEventListener("dragend", () => {
    present.classList.remove("is-dragged");
  });
});

boxes.forEach((box) => {
  box.addEventListener("dragover", (event) => {
    event.preventDefault();
    const isDragged = document.querySelector(".is-dragged");

    box.appendChild(isDragged);

    handlePresents();
  });
});

const handlePresents = () => {
  const leftPresents = presentBox.querySelectorAll(".present");
  if (chosenBox.childElementCount > 2) {
    leftPresents.forEach((present) => {
      present.setAttribute("draggable", "false");
      present.classList.add("present-disabled");
    });

    sendBtn.disabled = false;
  } else {
    leftPresents.forEach((present) => {
      present.setAttribute("draggable", "true");
      present.classList.remove("present-disabled");
    });

    sendBtn.disabled = true;
  }
};
