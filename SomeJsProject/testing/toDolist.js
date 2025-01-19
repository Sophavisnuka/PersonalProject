const container = document.querySelector(".container");
const countTask = document.querySelector(".count-task");

document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.querySelector(".add");
    const ul = document.createElement("ul");
    ul.className = "list-container";
    container.insertBefore(ul, countTask);
    addBtn.addEventListener("click", addTask);
    ul.addEventListener("click", handleTask);
    showTaskCount();
    displayData();
});

function addTask(event) {
    event.preventDefault();
    const ul = document.querySelector(".list-container");
    const input = document.querySelector(".input");
    const newTask = input.value.trim();
    if (!newTask) {
    alert("Add task!");
    } else {
    const li = document.createElement("li");
    li.innerHTML = `${input.value}<i class="fa-solid fa-circle-xmark"></i>`;
    ul.appendChild(li);
    }
    input.value = "";
    showTaskCount();
    handleData();
}

function handleTask(event) {
    if (event.target.tagName === "I") {
    event.target.parentElement.remove();
    showTaskCount();
    handleData();
    }
    if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
    handleData();
    }
}

function clearAllTasks() {
    const ul = document.querySelector(".list-container");
    ul.innerHTML = "";
    showTaskCount();
    handleData();
}

function showTaskCount() {
    const taskCounts =
    document.querySelector(".list-container").childElementCount;

    countTask.textContent = `There ${taskCounts > 1 ? "are" : "is"} ${
    taskCounts > 0 ? taskCounts : "no such"
    } task${taskCounts > 1 ? "s" : ""}.`;
}

function handleData() {
    const ul = document.querySelector(".list-container");
    localStorage.setItem("data", ul.innerHTML);
}

function displayData() {
    const ul = document.querySelector(".list-container");
    ul.innerHTML = localStorage.getItem("data");
}