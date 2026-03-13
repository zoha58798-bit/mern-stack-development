const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keypress", function(e){

if(e.key === "Enter"){
addTask();
}

});

function addTask(){

let taskText = taskInput.value.trim();

if(taskText === ""){
alert("Please enter a task");
return;
}

let li = document.createElement("li");

li.className = "flex justify-between items-center bg-gray-50 p-2 rounded border";

li.innerHTML = `

<span class="task-text">${taskText}</span>

<div class="flex gap-2">

<button onclick="editTask(this)"
class="bg-blue-500 text-white px-3 py-1 rounded">
Edit
</button>

<button onclick="deleteTask(this)"
class="bg-red-500 text-white px-3 py-1 rounded">
Delete
</button>

</div>

`;

taskList.appendChild(li);

taskInput.value = "";

}

function deleteTask(btn){

btn.parentElement.parentElement.remove();

}

function editTask(btn){

let taskText = btn.parentElement.parentElement.querySelector(".task-text");

let newText = prompt("Edit Task", taskText.innerText);

if(newText !== null && newText.trim() !== ""){
taskText.innerText = newText;
}

}
