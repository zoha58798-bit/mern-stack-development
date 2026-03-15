const TASKS_KEY='taskflow_tasks';
function getTasks(){try{return JSON.parse(localStorage.getItem(TASKS_KEY)||'[]');}catch{return[];}}
function saveTasks(t){localStorage.setItem(TASKS_KEY,JSON.stringify(t));}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2);}

function toggleDark(){
  const h=document.documentElement;
  h.classList.toggle('dark');
  localStorage.setItem('taskflow-theme',h.classList.contains('dark')?'dark':'light');
  updateDarkBtn();
}
function updateDarkBtn(){
  const d=document.getElementById('darkBtn');
  if(d)d.innerHTML=document.documentElement.classList.contains('dark')?'☀️ Light Mode':'🌙 Dark Mode';
}
updateDarkBtn();

const PRIORITY_BADGE={
  high:'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
  medium:'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400',
  low:'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
};
const CAT_ICON={work:'💼',personal:'🏠',shopping:'🛒',health:'💪',other:'📌'};

let dragSrcId=null;

function renderTasks(){
  let tasks=getTasks();
  const cat=document.getElementById('filterCat').value;
  const pri=document.getElementById('filterPri').value;
  const status=document.getElementById('filterStatus').value;
  const q=document.getElementById('searchInput').value.toLowerCase();
  if(cat)tasks=tasks.filter(t=>t.category===cat);
  if(pri)tasks=tasks.filter(t=>t.priority===pri);
  if(status==='pending')tasks=tasks.filter(t=>!t.completed);
  if(status==='completed')tasks=tasks.filter(t=>t.completed);
  if(q)tasks=tasks.filter(t=>t.title.toLowerCase().includes(q)||t.description.toLowerCase().includes(q));

  const el=document.getElementById('taskList');
  if(!tasks.length){
    el.innerHTML='<div class="p-12 text-center text-gray-400"><div class="text-5xl mb-3">📭</div><p class="text-sm">No tasks found. Add your first task!</p></div>';
    return;
  }
  const today=new Date().toISOString().slice(0,10);
  el.innerHTML=tasks.map(task=>{
    const overdue=task.dueDate&&task.dueDate<today&&!task.completed;
    return`<div class="task-item flex items-start gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors group ${task.completed?'opacity-60':''}"
      draggable="true"
      data-id="${task.id}"
      ondragstart="dragStart(event,'${task.id}')"
      ondragover="dragOver(event)"
      ondrop="drop(event,'${task.id}')"
      ondragleave="dragLeave(event)"
      ondragend="dragEnd(event)">
      <div class="cursor-grab opacity-0 group-hover:opacity-40 mt-1 text-gray-400 select-none flex-shrink-0">⠿</div>
      <button onclick="toggleTask('${task.id}')" class="mt-0.5 w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${task.completed?'border-emerald-500 bg-emerald-500':'border-gray-300 dark:border-gray-600 hover:border-violet-400'}">
        ${task.completed?'<svg class="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>':''}
      </button>
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-sm ${task.completed?'line-through text-gray-400':''}">${task.title}</p>
        ${task.description?`<p class="text-xs text-gray-400 mt-0.5">${task.description}</p>`:''}
        <div class="flex flex-wrap items-center gap-2 mt-2">
          <span class="text-xs px-2 py-0.5 rounded-full font-medium capitalize ${PRIORITY_BADGE[task.priority]}">${task.priority}</span>
          <span class="text-xs text-gray-400">${CAT_ICON[task.category]||'📌'} ${task.category}</span>
          ${task.dueDate?`<span class="text-xs ${overdue?'text-red-500 font-bold':'text-gray-400'}">📅 ${task.dueDate}${overdue?' ⚠️ Overdue':''}</span>`:''}
        </div>
      </div>
      <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
        <button onclick="openEditModal('${task.id}')" class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-violet-100 dark:hover:bg-violet-900/30 text-gray-400 hover:text-violet-600 transition-colors text-sm">✏️</button>
        <button onclick="deleteTask('${task.id}')" class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-400 hover:text-red-500 transition-colors text-sm">🗑️</button>
      </div>
    </div>`;
  }).join('');
}

function dragStart(e,id){dragSrcId=id;e.currentTarget.classList.add('dragging');}
function dragOver(e){e.preventDefault();e.currentTarget.classList.add('drag-over');}
function dragLeave(e){e.currentTarget.classList.remove('drag-over');}
function dragEnd(e){e.currentTarget.classList.remove('dragging','drag-over');}
function drop(e,targetId){
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  if(dragSrcId===targetId)return;
  const tasks=getTasks();
  const from=tasks.findIndex(t=>t.id===dragSrcId);
  const to=tasks.findIndex(t=>t.id===targetId);
  if(from<0||to<0)return;
  const [moved]=tasks.splice(from,1);
  tasks.splice(to,0,moved);
  saveTasks(tasks);renderTasks();
}

function toggleTask(id){
  const tasks=getTasks(),t=tasks.find(x=>x.id===id);
  if(t){t.completed=!t.completed;saveTasks(tasks);renderTasks();}
}
function deleteTask(id){
  if(!confirm('Delete this task?'))return;
  saveTasks(getTasks().filter(t=>t.id!==id));renderTasks();
}

function openAddModal(){
  document.getElementById('editId').value='';
  document.getElementById('modalTitle').textContent='Add New Task ✨';
  document.getElementById('saveBtn').textContent='Add Task';
  document.getElementById('taskTitle').value='';
  document.getElementById('taskDesc').value='';
  document.getElementById('taskPriority').value='medium';
  document.getElementById('taskCategory').value='work';
  document.getElementById('taskDate').value='';
  document.getElementById('addModal').classList.remove('hidden');
}
function openEditModal(id){
  const t=getTasks().find(x=>x.id===id);if(!t)return;
  document.getElementById('editId').value=id;
  document.getElementById('modalTitle').textContent='Edit Task ✏️';
  document.getElementById('saveBtn').textContent='Save Changes';
  document.getElementById('taskTitle').value=t.title;
  document.getElementById('taskDesc').value=t.description||'';
  document.getElementById('taskPriority').value=t.priority;
  document.getElementById('taskCategory').value=t.category;
  document.getElementById('taskDate').value=t.dueDate||'';
  document.getElementById('addModal').classList.remove('hidden');
}
function closeModal(){document.getElementById('addModal').classList.add('hidden');}
function closeOnBack(e){if(e.target.id==='addModal')closeModal();}

function saveTask(){
  const title=document.getElementById('taskTitle').value.trim();
  if(!title)return alert('Please enter a task title!');
  const tasks=getTasks();
  const editId=document.getElementById('editId').value;
  if(editId){
    const t=tasks.find(x=>x.id===editId);
    if(t){t.title=title;t.description=document.getElementById('taskDesc').value.trim();t.priority=document.getElementById('taskPriority').value;t.category=document.getElementById('taskCategory').value;t.dueDate=document.getElementById('taskDate').value;}
  }else{
    tasks.unshift({id:uid(),title,description:document.getElementById('taskDesc').value.trim(),priority:document.getElementById('taskPriority').value,category:document.getElementById('taskCategory').value,dueDate:document.getElementById('taskDate').value,completed:false,createdAt:new Date().toISOString()});
  }
  saveTasks(tasks);closeModal();renderTasks();
}

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
renderTasks();