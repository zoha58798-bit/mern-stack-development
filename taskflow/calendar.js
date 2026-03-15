const TASKS_KEY='taskflow_tasks';
function getTasks(){try{return JSON.parse(localStorage.getItem(TASKS_KEY)||'[]');}catch{return[];}}

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

let current=new Date();
const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
const PRIORITY_DOT={high:'bg-red-400',medium:'bg-yellow-400',low:'bg-green-400'};

function prevMonth(){current=new Date(current.getFullYear(),current.getMonth()-1,1);renderCalendar();}
function nextMonth(){current=new Date(current.getFullYear(),current.getMonth()+1,1);renderCalendar();}

function renderCalendar(){
  const tasks=getTasks();
  const year=current.getFullYear(),month=current.getMonth();
  document.getElementById('monthTitle').textContent=MONTHS[month]+' '+year;

  // Build task map: date string -> tasks[]
  const taskMap={};
  tasks.forEach(t=>{if(t.dueDate){if(!taskMap[t.dueDate])taskMap[t.dueDate]=[];taskMap[t.dueDate].push(t);}});

  const firstDay=new Date(year,month,1).getDay();
  const daysInMonth=new Date(year,month+1,0).getDate();
  const today=new Date().toISOString().slice(0,10);

  let html='';
  for(let i=0;i<firstDay;i++)html+=`<div class="p-2 border-r border-b border-gray-50 dark:border-gray-700/50 bg-gray-25 dark:bg-gray-800/40"></div>`;

  for(let d=1;d<=daysInMonth;d++){
    const dateStr=`${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dayTasks=taskMap[dateStr]||[];
    const isToday=dateStr===today;
    const dayOfWeek=(firstDay+d-1)%7;
    const isSun=dayOfWeek===0,isSat=dayOfWeek===6;
    const col=isSun?'border-r border-b border-gray-50 dark:border-gray-700/50':isSat?'border-b border-gray-50 dark:border-gray-700/50':'border-r border-b border-gray-50 dark:border-gray-700/50';

    html+=`<div class="cal-day p-2 ${col} ${isToday?'bg-violet-50 dark:bg-violet-900/20':''}" onclick="showDay('${dateStr}','${MONTHS[month]} ${d}, ${year}')">
      <div class="flex items-center justify-between mb-1">
        <span class="text-sm font-semibold ${isToday?'w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center text-xs':isSun?'text-red-500':isSat?'text-blue-500':'text-gray-700 dark:text-gray-300'}">${d}</span>
      </div>
      <div class="flex flex-wrap gap-0.5">
        ${dayTasks.slice(0,3).map(t=>`<span class="w-2 h-2 rounded-full ${PRIORITY_DOT[t.priority]||'bg-gray-400'} flex-shrink-0" title="${t.title}"></span>`).join('')}
        ${dayTasks.length>3?`<span class="text-[9px] text-gray-400 leading-none mt-0.5">+${dayTasks.length-3}</span>`:''}
      </div>
      <div class="hidden sm:block mt-1 space-y-0.5">
        ${dayTasks.slice(0,2).map(t=>`<div class="text-[10px] truncate ${t.completed?'line-through text-gray-400':'text-gray-600 dark:text-gray-300'} leading-tight">${t.title}</div>`).join('')}
      </div>
    </div>`;
  }
  document.getElementById('calGrid').innerHTML=html;
}

function showDay(dateStr,label){
  const tasks=getTasks().filter(t=>t.dueDate===dateStr);
  const panel=document.getElementById('dayPanel');
  document.getElementById('dayPanelTitle').textContent='📅 '+label;
  const list=document.getElementById('dayTaskList');
  if(!tasks.length){
    list.innerHTML='<div class="p-8 text-center text-gray-400 text-sm">No tasks on this day</div>';
  }else{
    list.innerHTML=tasks.map(t=>`
      <div class="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors ${t.completed?'opacity-60':''}">
        <div class="w-3 h-3 rounded-full flex-shrink-0 ${t.priority==='high'?'bg-red-500':t.priority==='medium'?'bg-yellow-400':'bg-green-400'}"></div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium ${t.completed?'line-through text-gray-400':''}">${t.title}</p>
          <p class="text-xs text-gray-400 capitalize">${t.category}</p>
        </div>
        ${t.completed?'<span class="text-emerald-500 text-xs font-medium">✓ Done</span>':'<span class="text-xs text-gray-400">Pending</span>'}
      </div>`).join('');
  }
  panel.classList.remove('hidden');
  panel.scrollIntoView({behavior:'smooth',block:'nearest'});
}

renderCalendar();