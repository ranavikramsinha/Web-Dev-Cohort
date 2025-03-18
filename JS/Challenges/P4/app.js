document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");
  const totalTasksSpan = document.getElementById("totalTasks");
  const completedTasksSpan = document.getElementById("completedTasks");

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const taskElement = createTaskElement(taskText);
      taskList.appendChild(taskElement);
      taskInput.value = "";
      updateTotalAndCompletedTask();
      updateEmptyListMessage();
    }
  }

  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "complete-checkbox";

    checkbox.addEventListener("change", function () {
      li.classList.toggle("completed", checkbox.checked);
      updateTotalAndCompletedTask();
    });

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      li.remove();
      updateTotalAndCompletedTask();
      updateEmptyListMessage();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
  }

  function updateTotalAndCompletedTask() {
    const tasks = taskList.querySelectorAll(".task-item");
    const totalTasks = tasks.length;

    let completedTasks = 0;

    tasks.forEach(function (task) {
      if (task.classList.contains("completed")) {
        completedTasks++;
      }
    });

    totalTasksSpan.textContent = `Total tasks: ${totalTasks}`;
    completedTasksSpan.textContent = `Completed: ${completedTasks}`;
  }

  function updateEmptyListMessage() {
    const tasks = taskList.querySelectorAll(".task-item");
    const emptyMessage = taskList.querySelector(".empty-list");

    if (tasks.length === 0) {
      if (!emptyMessage) {
        const li = document.createElement("li");
        li.className = "empty-list";
        li.textContent = "No tasks yet. Add one above!";
        taskList.appendChild(li);
      }
    } else {
      if (emptyMessage) {
        emptyMessage.remove();
      }
    }
  }

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  updateEmptyListMessage();
});
