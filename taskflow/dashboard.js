const TASKS_KEY='taskflow_tasks';
function getTasks(){try{return JSON.parse(localStorage.getItem(TASKS_KEY)||'[]');}catch{return [];}}
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

function getGreeting(){
  const h=new Date().getHours();
  if(h<12)return'Good morning! 👋';
  if(h<18)return'Good afternoon! 👋';
  return'Good evening! 👋';
}

function formatDate(d){
  return new Date(d).toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
}

function initPage(){
  document.getElementById('greetingText').textContent=getGreeting();
  document.getElementById('dateText').textContent=formatDate(new Date());
  renderAll();
}

const PRIORITY_COLORS={high:'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',medium:'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400',low:'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'};
const PRIORITY_DOT={high:'bg-red-500',medium:'bg-yellow-400',low:'bg-green-500'};

function taskHTML(task){
  const today=new Date().toISOString().slice(0,10);
  const overdue=task.dueDate&&task.dueDate<today&&!task.completed;
  return`<div class="flex items-start gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors ${task.completed?'opacity-60':''}">
    <button onclick="toggleTask('${task.id}')" class="mt-0.5 w-5 h-5 rounded-full border-2 ${task.completed?'border-emerald-500 bg-emerald-500':'border-gray-300 dark:border-gray-600'} flex items-center justify-center flex-shrink-0 transition-colors">
      ${task.completed?'<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>':''}
    </button>
    <div class="flex-1 min-w-0">
      <p class="font-medium text-sm ${task.completed?'line-through text-gray-400':''}">${task.title}</p>
      ${task.description?`<p class="text-xs text-gray-400 mt-0.5 truncate">${task.description}</p>`:''}
      <div class="flex items-center gap-2 mt-1.5 flex-wrap">
        <span class="w-2 h-2 rounded-full inline-block ${PRIORITY_DOT[task.priority]}"></span>
        <span class="text-xs font-medium capitalize text-gray-500 dark:text-gray-400">${task.priority}</span>
        ${task.dueDate?`<span class="text-xs ${overdue?'text-red-500 font-semibold':'text-gray-400'}">📅 ${task.dueDate}</span>`:''}
        <span class="text-xs text-gray-400 capitalize">${task.category}</span>
      </div>
    </div>
  </div>`;
}

function renderAll(){
  const tasks=getTasks();
  const today=new Date().toISOString().slice(0,10);
  const todayTasks=tasks.filter(t=>!t.completed&&t.dueDate===today);
  const upcoming=tasks.filter(t=>!t.completed&&(!t.dueDate||t.dueDate>today)).slice(0,5);
  const completed=tasks.filter(t=>t.completed).slice(0,5);
  const total=tasks.length, done=tasks.filter(t=>t.completed).length, pct=total?Math.round(done/total*100):0;

  document.getElementById('statTotal').textContent=total;
  document.getElementById('statDone').textContent=done;
  document.getElementById('statPending').textContent=total-done;
  document.getElementById('statPct').textContent=pct+'%';
  document.getElementById('pctLabel').textContent=pct+'%';
  document.getElementById('progressBar').style.width=pct+'%';

  const tEl=document.getElementById('todayList');
  tEl.innerHTML=todayTasks.length?todayTasks.map(taskHTML).join(''):'<div class="p-8 text-center text-gray-400 text-sm">No tasks for today 🎉</div>';
  const uEl=document.getElementById('upcomingList');
  uEl.innerHTML=upcoming.length?upcoming.map(taskHTML).join(''):'<div class="p-8 text-center text-gray-400 text-sm">No upcoming tasks</div>';
  const cEl=document.getElementById('completedList');
  cEl.innerHTML=completed.length?completed.map(taskHTML).join(''):'<div class="p-8 text-center text-gray-400 text-sm">Nothing completed yet</div>';
}

function toggleTask(id){
  const tasks=getTasks();
  const t=tasks.find(x=>x.id===id);
  if(t){t.completed=!t.completed;saveTasks(tasks);renderAll();}
}

function openAddModal(){document.getElementById('addModal').classList.remove('hidden');}
function closeModal(){document.getElementById('addModal').classList.add('hidden');}
function closeOnBack(e){if(e.target.id==='addModal')closeModal();}

function addTask(){
  const title=document.getElementById('taskTitle').value.trim();
  if(!title)return alert('Please enter a task title!');
  const task={id:uid(),title,description:document.getElementById('taskDesc').value.trim(),priority:document.getElementById('taskPriority').value,category:document.getElementById('taskCategory').value,dueDate:document.getElementById('taskDate').value,completed:false,createdAt:new Date().toISOString()};
  const tasks=getTasks();tasks.unshift(task);saveTasks(tasks);
  document.getElementById('taskTitle').value='';
  document.getElementById('taskDesc').value='';
  document.getElementById('taskDate').value='';
  closeModal();renderAll();
}

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
initPage();