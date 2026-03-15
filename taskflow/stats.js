const TASKS_KEY='taskflow_tasks';
const NOTES_KEY='taskflow_notes';
function getTasks(){try{return JSON.parse(localStorage.getItem(TASKS_KEY)||'[]');}catch{return[];}}
function getNotes(){try{return JSON.parse(localStorage.getItem(NOTES_KEY)||'[]');}catch{return[];}}

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

const CAT_INFO={work:{icon:'💼',color:'bg-blue-500'},personal:{icon:'🏠',color:'bg-violet-500'},shopping:{icon:'🛒',color:'bg-pink-500'},health:{icon:'💪',color:'bg-emerald-500'},other:{icon:'📌',color:'bg-gray-500'}};

function renderStats(){
  const tasks=getTasks();
  const notes=getNotes();
  const total=tasks.length, done=tasks.filter(t=>t.completed).length, pending=total-done;
  const pct=total?Math.round(done/total*100):0;

  document.getElementById('s-total').textContent=total;
  document.getElementById('s-done').textContent=done;
  document.getElementById('s-pending').textContent=pending;
  document.getElementById('s-pct').textContent=pct+'%';
  document.getElementById('s-notes').textContent=notes.length;

  // Donut
  document.getElementById('l-done').textContent=done;
  document.getElementById('l-pending').textContent=pending;
  document.getElementById('donutPct').textContent=pct+'%';
  const circ=2*Math.PI*55;
  setTimeout(()=>{
    document.getElementById('donutCompleted').style.strokeDashoffset=circ-(circ*pct/100);
  },100);

  // Priority bars
  const high=tasks.filter(t=>t.priority==='high').length;
  const med=tasks.filter(t=>t.priority==='medium').length;
  const low=tasks.filter(t=>t.priority==='low').length;
  document.getElementById('p-high-num').textContent=high;
  document.getElementById('p-med-num').textContent=med;
  document.getElementById('p-low-num').textContent=low;
  setTimeout(()=>{
    document.getElementById('p-high-bar').style.width=(total?high/total*100:0)+'%';
    document.getElementById('p-med-bar').style.width=(total?med/total*100:0)+'%';
    document.getElementById('p-low-bar').style.width=(total?low/total*100:0)+'%';
  },200);

  // Category bars
  const catMap={};
  tasks.forEach(t=>{catMap[t.category]=(catMap[t.category]||0)+1;});
  const maxCat=Math.max(...Object.values(catMap),1);
  const cats=['work','personal','shopping','health','other'];
  document.getElementById('catBars').innerHTML=cats.map(c=>{
    const count=catMap[c]||0;
    const w=Math.round(count/maxCat*100);
    const info=CAT_INFO[c];
    return`<div>
      <div class="flex justify-between items-center mb-1.5">
        <span class="text-sm font-medium">${info.icon} ${c.charAt(0).toUpperCase()+c.slice(1)}</span>
        <span class="text-sm font-bold">${count}</span>
      </div>
      <div class="h-2.5 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <div class="bar-fill h-full rounded-full ${info.color}" style="--target:${w}%"></div>
      </div>
    </div>`;
  }).join('');
  setTimeout(()=>{
    document.querySelectorAll('.bar-fill').forEach(b=>{
      if(b.style.getPropertyValue('--target'))b.style.width=b.style.getPropertyValue('--target');
    });
  },300);
}

renderStats();