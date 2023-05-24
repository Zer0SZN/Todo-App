// Function to add a new task to the list
const addTask = (event) => {
  event.preventDefault();
  const todoInput = document.getElementById("todoInput");
  const taskName = todoInput.value.trim();
  if (taskName === "") return;

  const taskItem = document.createElement("li");
  taskItem.classList.add("list-group-item");

  const taskNameElement = document.createElement("span");
  taskNameElement.textContent = taskName;

  const removeButton = document.createElement("button");
  removeButton.classList.add(
    "btn",
    "btn-danger",
    "btn-sm",
    "float-right",
    "ml-2"
  );
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", removeTask);

  const editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-primary", "btn-sm", "float-right");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", editTask);

  taskItem.appendChild(taskNameElement);
  taskItem.appendChild(removeButton);
  taskItem.appendChild(editButton);

  const todoList = document.getElementById("todoList");
  todoList.appendChild(taskItem);

  todoInput.value = "";
};

// Function to remove a task from the list
function removeTask() {
  const taskItem = this.parentNode;
  const todoList = document.getElementById("todoList");
  todoList.removeChild(taskItem);
}

// Function to edit a task in the list
function editTask() {
  const taskItem = this.parentNode;
  const taskNameElement = taskItem.querySelector("span");
  if (!taskNameElement) return;

  const taskName = taskNameElement.textContent.trim();
  const todoInput = document.getElementById("todoInput");
  todoInput.value = taskName;

  // Remove the task item from the list
  const todoList = document.getElementById("todoList");
  todoList.removeChild(taskItem);
}

// Add event listener to the form
const todoForm = document.getElementById("todoForm");
todoForm.addEventListener("submit", addTask);
