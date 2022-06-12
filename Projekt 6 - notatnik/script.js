const body = document.querySelector("body");
/* MODAL */
const modal = document.querySelector(".modal");
const modalSaveBtn = document.querySelector(".modal-save");
const modalExitBtn = document.querySelector(".modal-exit");
const modalInput = document.querySelector("textarea");
const modalCategory = document.querySelector("#category");
const modalWarning = document.querySelector(".modal-warning");
/* UI */
const addBtn = document.querySelector(".add-note");
const deleteAllBtn = document.querySelector(".delete-all");
const notesDiv = document.querySelector(".notes");
const allNotes = document.querySelectorAll(".note");
const deleteOneNoteXmark = document.querySelectorAll(".fa-xmark");

let r = document.querySelector(":root");
let rs = getComputedStyle(r);

//  GETTING NOTES FROM LOCALSTORAGE -------

let lowestToHighest = Object.keys(window.localStorage).sort((a, b) => a - b);

if (lowestToHighest !== undefined) {
  for (let i = 0; i < lowestToHighest.length; i++) {
    const el = lowestToHighest[i];
    storageNote = window.localStorage.getItem(el);
    notesDiv.innerHTML = notesDiv.innerHTML + storageNote;
  }
}
// -----------------------------------------

const showModal = () => {
  modal.classList.remove("hidden");
};

const hideModal = () => {
  modal.classList.add("hidden");
  modalWarning.classList.add("hidden");
  modalInput.value = "";
  modalCategory.options[0].selected = true;
};

const deleteNotes = () => {
  const allNotesArr = Array.from(notesDiv.children);
  allNotesArr.forEach((el) => {
    el.remove();
  });
  window.localStorage.clear();
  notesDiv.innerHTML = "";
};

const deleteOneNote = () => {
  const allNotesArr = Array.from(notesDiv.children);
  for (let i = 0; i < allNotesArr.length; i++) {
    const element = allNotesArr[i];
    const xMark = element.children[0].children[1];
    const el = lowestToHighest[i];
    xMark.addEventListener("click", () => {
      allNotesArr[i].closest(".note").remove();
      window.localStorage.removeItem(el);
    });
  }
};
deleteOneNote();

const addNote = () => {
  const categoryOptionIndex =
    modalCategory.options[modalCategory.selectedIndex];
  const notesBackgoundColor = `--${categoryOptionIndex.value}-color`;
  const notesTitleBackgoundColor = `--${categoryOptionIndex.value}-title-color`;

  const NewNoteTitle = categoryOptionIndex.text;
  const NewNoteContent = `${modalInput.value}`;

  if (categoryOptionIndex.value == 0) {
    modalWarning.textContent = "Musisz wybrać kategorię notatki!";
    modalWarning.classList.remove("hidden");
  } else if (modalInput.value === "") {
    modalWarning.textContent = "Musisz dodać treść do notatki!";
    modalWarning.classList.remove("hidden");
  } else {
    const newNote = `<div class="note" style="background-color:${rs.getPropertyValue(
      notesBackgoundColor
    )}">
        <div class="note-title" style="background-color:${rs.getPropertyValue(
          notesTitleBackgoundColor
        )}">
            <p>${NewNoteTitle}</p>
            <i class="fa-solid fa-xmark"></i>
        </div>
        <p class ='note-content'>${NewNoteContent}</p>
      </div>`;
    notesDiv.innerHTML = notesDiv.innerHTML + newNote;
    modalWarning.classList.add("hidden");
    window.localStorage.setItem(`${Date.now()}`, `${newNote}`);
    lowestToHighest = Object.keys(window.localStorage).sort((a, b) => a - b);
    hideModal();
    deleteOneNote();
  }
};

addBtn.addEventListener("click", showModal);
modalExitBtn.addEventListener("click", hideModal);
deleteAllBtn.addEventListener("click", deleteNotes);
modalSaveBtn.addEventListener("click", addNote);
modalInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    modalSaveBtn.click();
  }
});

// HIDDING MODAL IF CLICKED OUTSIDE
body.addEventListener("click", (e) => {
  if (!e.target.closest(".add-note") && !e.target.closest(".modal")) {
    hideModal();
  }
});
