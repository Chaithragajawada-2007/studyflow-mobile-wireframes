
const screens = document.querySelectorAll(".screen");
const navButtons = document.querySelectorAll(".nav-btn");

function showScreen(screenId) {
    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
    }

    navButtons.forEach(function(button) {
        button.classList.remove("active");

        if (button.dataset.screen === screenId) {
            button.classList.add("active");
        }
    });
}

navButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        showScreen(button.dataset.screen);
    });
});

document.querySelectorAll("[data-go]").forEach(function(button) {
    button.addEventListener("click", function() {
        showScreen(button.dataset.go);
    });
});

const addTaskButton = document.getElementById("add-task");
const newTaskInput = document.getElementById("new-task");

addTaskButton.addEventListener("click", function() {
    const taskName = newTaskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task first!");
        return;
    }

    const taskList = document.createElement("div");
    taskList.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = taskName;

    taskList.appendChild(checkbox);
    taskList.appendChild(label);

    const addTaskArea = document.getElementById("new-task");
    addTaskArea.parentNode.insertBefore(taskList, addTaskButton);

    newTaskInput.value = "";
});
