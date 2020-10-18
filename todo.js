const toDoForm = document.querySelector(".js-todoform"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-todolist");

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const btnparent = btn.parentNode;
  toDoList.removeChild(btnparent);
  const cleanToDos = toDos.filter(function (todo) {
    return todo.id !== parseInt(btnparent.id);
  });
  toDos = cleanToDos;
  console.log(toDos);
  saveToDos();
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  toDoList.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  const toDosObject = {
    text: text,
    id: newId,
  };
  toDos.push(toDosObject);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem("todos");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
