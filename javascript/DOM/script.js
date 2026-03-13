// DOM SELECTORS

// getElementById

let heading = document.getElementById("title");
console.log(heading)

heading.innerText = "Hello Zoha"

// getElementsByClassName()

let para = document.getElementsByClassName("text");
console.log(para)

para[0].innerText = "Changed"

// getElementsByTagName()

let p = document.getElementsByTagName("h2");
console.log(p);

p[1].innerText = "Updated";

// querySelector()

let element = document.querySelector(".text");

let element1 = document.querySelector("#title");

// querySelectorAll()

let elements = document.querySelectorAll(".text")
elements[1].innerText = "zoii"

// Changing HTML content

// inner HTML

let head = document.getElementById("title");
head.innerHTML = "<i>Hello Zoha</i>";

// Changing CSS with JavaScript

let paragraph = document.getElementById("text");
paragraph.style.color = "red";
paragraph.style.backgroundColor = "black";
paragraph.style.fontSize = "30px"

// Change Class

element.classList.add("dark");
element.classList.remove("light")

// CREATING ELEMENTS

let newPara = document.createElement("p");

// Add Text

newPara.innerText = "This is a new paragraph";

// Add element to page

let container = document.getElementById("container");
container.appendChild(newPara);

// append() method

container.append(newPara);

// REMOVING ELEMENTS

let paragra = document.getElementById("container")
paragra.remove()

// remove from parent

container.removeChild(newPara)