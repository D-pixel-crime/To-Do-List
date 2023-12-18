const inputTask = document.querySelector(".task-input");
const addButton = document.querySelector(".add-button");
const toDoList = document.querySelector(".todo-list");

inputTask.addEventListener("focus", () => {
    addButton.classList.add("focus-button");
});

inputTask.addEventListener("blur", () => {
    addButton.classList.remove("focus-button");
});

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputTask.value !== "") {
        addTask(inputTask.value);
        toDoList.classList.add("list-design");
    }
});

document.addEventListener("keydown", (event) => {
    if (inputTask.value !== "" && event.key == "Enter") {
        addTask(inputTask.value);
        toDoList.classList.add("list-design");
    }
});

function addTask(valueTask) {
    var taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    var completedTaskButton = document.createElement("button");
    var tick = document.createElement("i");
    tick.classList.add("fa-solid");
    tick.classList.add("fa-check");
    completedTaskButton.classList.add("complete-btn");
    completedTaskButton.appendChild(tick);
    taskContainer.appendChild(completedTaskButton);

    var itemTask = document.createElement("p");
    itemTask.classList.add("task-item");
    itemTask.innerText = valueTask;
    taskContainer.appendChild(itemTask);

    var deleteButton = document.createElement("button");
    var trash = document.createElement("i");
    trash.classList.add("fa-solid");
    trash.classList.add("fa-trash-can");
    deleteButton.classList.add("delete-btn");
    deleteButton.appendChild(trash);
    taskContainer.appendChild(deleteButton);

    toDoList.appendChild(taskContainer);

    completedTaskButton.addEventListener("click", () => {
        toggleTaskDecoration(taskContainer);
    });

    deleteButton.addEventListener("click", () => {
        deleteTask(taskContainer);
    });

    inputTask.value = "";
}


function toggleTaskDecoration(taskContainer) {
    if (taskContainer.style.textDecoration === "line-through") {
        taskContainer.style.textDecoration = "none";
    } else {
        taskContainer.style.textDecoration = "line-through";
    }
}

function deleteTask(taskContainer) {
    taskContainer.remove();

    const remainingTasks = toDoList.querySelectorAll(".task-container");
    if (remainingTasks.length === 0) {
        toDoList.classList.remove("list-design");
    }
}
