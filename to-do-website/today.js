const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keydown", function(e) {

    if(e.key === "Enter") {
        addTask();
    }

});

function addTask() {

    const taskText = taskInput.value.trim();

    if(taskText === "") return;

    const li = document.createElement("li");

    li.className = "flex justify-between items-center bg-white p-3 rounded shadow";

    li.innerHTML = `
        <span class="task-text">${taskText}</span>

        <div class="flex gap-2">
            <button onclick="editTask(this)" class="bg-blue-500 text-white px-3 py-1 rounded">
                Edit
            </button>

            <button onclick="deleteTask(this)" class="bg-red-500 text-white px-3 py-1 rounded">
                Delete
            </button>
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
}

function deleteTask(button) {

    button.parentElement.parentElement.remove();

}

function editTask(button) {

    const taskSpan = button.parentElement.parentElement.querySelector(".task-text");

    const newTask = prompt("Edit your task", taskSpan.innerText);

    if(newTask !== null && newTask.trim() !== "") {
        taskSpan.innerText = newTask;
    }

}