const input = document.getElementById("input");
const list = document.getElementById("list");
const countValue = document.querySelector(".countValue");
let taskCount = 0;

function addItem() {
    if (input.value === '') {
        alert("Please write something!");
    } else {
        // Create task item
        let li = document.createElement("li");
        li.innerHTML = input.value;
        // Create delete button
        let deleteBtn = document.createElement("p");
        deleteBtn.innerHTML = "X";
        deleteBtn.classList.add("delete-btn");
        // Append delete button inside the li
        li.appendChild(deleteBtn);
        list.appendChild(li);
        taskCount++;
        updateCount();
        // Toggle line-through on task when clicked
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });
        // Remove button
        deleteBtn.addEventListener("click", function () {
            li.remove();
            taskCount--;
            updateCount();
        });
        input.value = '';
    }
}
function updateCount() {
    countValue.textContent = taskCount;
}