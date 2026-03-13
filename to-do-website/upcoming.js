const todayInput = document.getElementById("todayInput")
const tomorrowInput = document.getElementById("tomorrowInput")
const weekInput = document.getElementById("weekInput")

const todayList = document.getElementById("todayList")
const tomorrowList = document.getElementById("tomorrowList")
const weekList = document.getElementById("weekList")

const totalCount = document.getElementById("totalCount")
const upcomingCount = document.getElementById("upcomingCount")

let tasks = {
today: [],
tomorrow: [],
week: []
}

todayInput.addEventListener("keypress", e=>{
if(e.key==="Enter") addTask("today", todayInput)
})

tomorrowInput.addEventListener("keypress", e=>{
if(e.key==="Enter") addTask("tomorrow", tomorrowInput)
})

weekInput.addEventListener("keypress", e=>{
if(e.key==="Enter") addTask("week", weekInput)
})


function addTask(type,input){

let text = input.value.trim()

if(text==="") return

tasks[type].push({
id:Date.now(),
text:text,
completed:false
})

input.value=""

renderTasks()

}


function renderTasks(){

renderSection(tasks.today,todayList)
renderSection(tasks.tomorrow,tomorrowList)
renderSection(tasks.week,weekList)

updateCount()

}


function renderSection(array,container){

container.innerHTML=""

array.forEach(task=>{

const li=document.createElement("li")

li.className="flex justify-between bg-gray-50 p-2 rounded"

li.innerHTML=`

<div class="flex gap-2 items-center">

<input type="checkbox"
onclick="toggleTask(${task.id})">

<span>${task.text}</span>

</div>

<span class="text-gray-400">›</span>

`

container.appendChild(li)

})

}


function toggleTask(id){

for(let key in tasks){

tasks[key].forEach(task=>{

if(task.id===id){
task.completed=!task.completed
}

})

}

renderTasks()

}


function updateCount(){

let total =
tasks.today.length+
tasks.tomorrow.length+
tasks.week.length

totalCount.textContent = total
upcomingCount.textContent = total

}