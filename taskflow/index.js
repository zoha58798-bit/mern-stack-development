const savedTheme = localStorage.getItem("taskflow-theme");

if(savedTheme === "dark"){
  document.documentElement.classList.add("dark");
}
else{
  document.documentElement.classList.remove("dark");
}

function toggleDark() {
  const h = document.documentElement;

  if (h.classList.contains("dark")) {
    h.classList.remove("dark");
    localStorage.setItem("taskflow-theme","light");
  } else {
    h.classList.add("dark");
    localStorage.setItem("taskflow-theme","dark");
  }
}

const obs=new IntersectionObserver(entries=>entries.forEach(e => {
  if(e.isIntersecting)e.target.classList.add('visible');
}),
{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));