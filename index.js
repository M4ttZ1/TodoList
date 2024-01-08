const list = document.querySelector(".list");
const input = document.querySelector("input");

let todoList = [];
let todoInputValue = "";
let counter = 0;
let contrastToggle = false;

function onInputChange(event) {
  todoInputValue = event.target.value;
}

function addTodo() {
  if (!todoInputValue) {
    return;
  }
  todoList.push({
    id: counter++,
    task: todoInputValue,
    completed: false,
  });
  renderTodos();
  input.value = "";
  todoInputValue = "";
}

function deleteTodo(removeId) {
  todoList = todoList.filter((todo) => todo.id !== removeId);
  counter--;
  renderTodos();
}

function completeTodo(completeId) {
  const complete = document.querySelectorAll(".todo__complete");
  if(todoList[completeId].completed === true){
    todoList[completeId].completed = false;
    complete[completeId].innerHTML = " ";
    return;
  }
  todoList[completeId].completed = true;
  complete[completeId].innerHTML = "✔"
}

function renderTodos() {
 list.innerHTML = todoList
    .map(
      (element) =>
        `<li class="todo__wrapper">
          ${element.task}
          <button class="todo__complete" onclick="completeTodo(${element.id})"></button>
          <button class="todo__delete" onclick="deleteTodo(${element.id})">
            x
          </button>
        </li>`
    )
    .join("");
}

function toggleContrast(){
  contrastToggle = !contrastToggle
  if(contrastToggle){
  document.body.classList += " dark-theme"
  return;
  }
  document.body.classList.remove("dark-theme")
}