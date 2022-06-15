const doneBtn = document.querySelectorAll(".done");
const editBtn = document.querySelectorAll(".edit");
const removeBtn = document.querySelector(".remove");
const addBtn = document.querySelector(".add-button");
const singleTask = document.querySelector(".single-task");
const taskInput = document.querySelector(".task-input");
const todoList = document.querySelector(".todo-list");
const taskList = document.querySelectorAll(".task");
const taskInputWarning = document.querySelector(".task-input-warning");

// MODAL
const editModal = document.querySelector(".modal-edit");
const inputModal = document.querySelector(".modal-input");
const cancelModalBtn = document.querySelector(".cancel-button");
const acceptModalBtn = document.querySelector(".accept-button");

let editedElement;
taskInput.focus();

const cancelModal = () => {
  editModal.classList.remove("active");
};

const acceptEdit = () => {
  editedElement.textContent = inputModal.value;
  editedElement = "";
  cancelModal();
};

const addTask = () => {
  if (taskInput.value == "") {
    taskInputWarning.classList.remove("hidden");
  } else {
    const newTask = document.createElement("div");
    newTask.innerHTML = `
      
      <p class="single-task">${taskInput.value}</p>
      <div class="task-buttons">
          <button class="done"><i class="fa-solid fa-check"></i></button>
          <button class="edit">EDIT</button>
          <button class="remove"><i class="fa-solid fa-xmark"></i></button>
      </div>
    
      `;
    newTask.classList.add("task");
    todoList.append(newTask);
    taskInput.value = "";
    taskInputWarning.classList.add("hidden");
  }
};

const doneTask = (e) => {
  let target = e.target;
  if (target.classList.contains("fa-check")) {
    const singleTaskText =
      target.parentElement.parentElement.parentElement.children[0];
    singleTaskText.classList.toggle("task-done");
  }
};

const deleteTask = (e) => {
  let target = e.target;
  if (target.classList.contains("fa-xmark")) {
    const singleTask = target.parentElement.parentElement.parentElement;
    singleTask.remove();
  }
};

const editTask = (e) => {
  let target = e.target;
  if (target.classList.contains("edit")) {
    inputModal.focus();
    editModal.classList.add("active");
    editedElement = e.target.parentElement.parentElement.children[0];
    inputModal.value =
      e.target.parentElement.parentElement.children[0].textContent;
  }
};

// adding task on enter
taskInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    addTask();
  }
});
//-----------------------

inputModal.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    acceptEdit();
  }
});

todoList.addEventListener("click", doneTask);
todoList.addEventListener("click", deleteTask);
todoList.addEventListener("click", editTask);
addBtn.addEventListener("click", addTask);

cancelModalBtn.addEventListener("click", cancelModal);
acceptModalBtn.addEventListener("click", acceptEdit);
