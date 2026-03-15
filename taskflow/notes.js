const NOTES_KEY='taskflow_notes';
function getNotes(){try{return JSON.parse(localStorage.getItem(NOTES_KEY)||'[]');}catch{return[];}}
function saveNotes(n){localStorage.setItem(NOTES_KEY,JSON.stringify(n));}
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

const COLOR_BG={
  yellow:'bg-yellow-100 border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-700/50',
  pink:'bg-pink-100 border-pink-200 dark:bg-pink-900/30 dark:border-pink-700/50',
  blue:'bg-blue-100 border-blue-200 dark:bg-blue-900/30 dark:border-blue-700/50',
  green:'bg-green-100 border-green-200 dark:bg-green-900/30 dark:border-green-700/50',
  purple:'bg-purple-100 border-purple-200 dark:bg-purple-900/30 dark:border-purple-700/50',
  orange:'bg-orange-100 border-orange-200 dark:bg-orange-900/30 dark:border-orange-700/50',
};
const COLOR_HDR={
  yellow:'bg-yellow-300 dark:bg-yellow-700/50',
  pink:'bg-pink-300 dark:bg-pink-700/50',
  blue:'bg-blue-300 dark:bg-blue-700/50',
  green:'bg-green-300 dark:bg-green-700/50',
  purple:'bg-purple-300 dark:bg-purple-700/50',
  orange:'bg-orange-300 dark:bg-orange-700/50',
};

let currentColor='yellow';
let activeFilter='';

function setFilter(color){
  activeFilter=color;
  renderNotes();
}

function selectColor(c){
  currentColor=c;
  document.querySelectorAll('.color-opt').forEach(b=>{
    b.style.outline=b.dataset.color===c?'3px solid #7c3aed':'none';
    b.style.outlineOffset='2px';
  });
}

function openModal(){
  currentColor='yellow';
  document.getElementById('noteEditId').value='';
  document.getElementById('noteModalTitle').textContent='New Sticky Note 📝';
  document.getElementById('noteSaveBtn').textContent='Add Note';
  document.getElementById('noteTitle').value='';
  document.getElementById('noteContent').value='';
  selectColor('yellow');
  document.getElementById('noteModal').classList.remove('hidden');
}
function openEditModal(id){
  const n=getNotes().find(x=>x.id===id);if(!n)return;
  document.getElementById('noteEditId').value=id;
  document.getElementById('noteModalTitle').textContent='Edit Note ✏️';
  document.getElementById('noteSaveBtn').textContent='Save Changes';
  document.getElementById('noteTitle').value=n.title||'';
  document.getElementById('noteContent').value=n.content||'';
  currentColor=n.color||'yellow';
  selectColor(currentColor);
  document.getElementById('noteModal').classList.remove('hidden');
}
function closeModal(){document.getElementById('noteModal').classList.add('hidden');}
function closeOnBack(e){if(e.target.id==='noteModal')closeModal();}

function saveNote(){
  const content=document.getElementById('noteContent').value.trim();
  if(!content)return alert('Please write something!');
  const notes=getNotes();
  const editId=document.getElementById('noteEditId').value;
  if(editId){
    const n=notes.find(x=>x.id===editId);
    if(n){n.title=document.getElementById('noteTitle').value.trim();n.content=content;n.color=currentColor;}
  }else{
    notes.unshift({id:uid(),title:document.getElementById('noteTitle').value.trim(),content,color:currentColor,createdAt:new Date().toISOString()});
  }
  saveNotes(notes);closeModal();renderNotes();
}

function deleteNote(id){
  if(!confirm('Delete this note?'))return;
  saveNotes(getNotes().filter(n=>n.id!==id));renderNotes();
}

function renderNotes(){
  let notes=getNotes();
  if(activeFilter)notes=notes.filter(n=>n.color===activeFilter);
  const el=document.getElementById('notesGrid');
  if(!notes.length){
    el.innerHTML=`<div class="col-span-full py-20 text-center text-gray-400"><div class="text-6xl mb-4">📋</div><p class="text-lg font-medium">No sticky notes yet!</p><p class="text-sm mt-2">Click "+ New Note" to add your first one</p></div>`;
    return;
  }
  el.innerHTML=notes.map(n=>`
    <div class="note-card break-inside-avoid mb-4 rounded-2xl border overflow-hidden shadow-md ${COLOR_BG[n.color]||COLOR_BG.yellow}">
      <div class="flex items-center justify-between px-4 py-2 ${COLOR_HDR[n.color]||COLOR_HDR.yellow}">
        ${n.title?`<span class="font-bold text-sm text-gray-700 dark:text-gray-200 truncate">${n.title}</span>`:`<span class="text-xs text-gray-500 dark:text-gray-400">${new Date(n.createdAt).toLocaleDateString()}</span>`}
        <div class="flex gap-1 ml-2 flex-shrink-0">
          <button onclick="openEditModal('${n.id}')" class="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-black/10 text-gray-600 dark:text-gray-300 text-sm transition-colors">✏️</button>
          <button onclick="deleteNote('${n.id}')" class="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-black/10 text-gray-600 dark:text-gray-300 text-sm transition-colors">🗑️</button>
        </div>
      </div>
      <div class="p-4">
        <p class="text-sm text-gray-700 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">${n.content}</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-3">${new Date(n.createdAt).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</p>
      </div>
    </div>`).join('');
}

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
renderNotes();