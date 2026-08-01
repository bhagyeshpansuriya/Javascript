const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const emptyMsg = document.getElementById("empty-msg");
const totalTasks = document.getElementById("total");
const completedTasks = document.getElementById("completed");


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    
    checkbox.addEventListener("change", () => {
        span.classList.toggle("completed");
        updateStats();
    });

    
    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateEmptyMessage();
        updateStats();
    });

    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    
    taskInput.value = "";

    updateEmptyMessage();
    updateStats();
}


addBtn.addEventListener("click", addTask);


taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});


function updateEmptyMessage() {
    if (taskList.children.length === 0) {
        emptyMsg.style.display = "block";
    } else {
        emptyMsg.style.display = "none";
    }
}


function updateStats() {
    totalTasks.innerText = taskList.children.length;

    const completed = taskList.querySelectorAll(
        'input[type="checkbox"]:checked'
    ).length;

    completedTasks.innerText = completed;
}


updateEmptyMessage();
updateStats();