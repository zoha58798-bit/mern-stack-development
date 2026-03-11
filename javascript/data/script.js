const btn=document.getElementById("toggleTheme")

btn.addEventListener("click", () => {
  console.log(document.body.classList.contains("dark-theme"))

  if(document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme")
    document.body.classList.add("light-theme")
  } else {
    document.body.classList.remove("light-theme")
    document.body.classList.add("dark-theme")
  }

})
