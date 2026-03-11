// STRING METHODS

// length

let text = "hello world";
console.log(text.length)

// toUpperCase()

console.log(text.toUpperCase())

// toLowerCase()

console.log(text.toLowerCase())

// includes()

console.log(text.includes("Zoha"))

// indexOf()

console.log(text.indexOf("world"))

// slice()

let msg = "JavaScript";
console.log(msg.slice(0,4))

// replace()

console.log(msg.replace("Script", "Stack"))

// trim()

let message = "      Hello      ";
console.log(message.trim())

// split()

let textt = "apple,banana,mango";
console.log(textt.split(","))

// TEMPLATE LITERALS

let name = "Zoha";
console.log(`Hello ${name}`);

// how to use variables in strings

let intro = "Zoha";
let age = 20;

console.log(`Hello! I am ${intro} and I am ${age} years old.`)

// how to use expressions

let a = 5;
let b = 10;

console.log(`Sum is ${a+b}`)

// multiple strings in Template literals

let introduction = `Hello
How are you?
I am learning JavaScript`;

console.log(introduction)