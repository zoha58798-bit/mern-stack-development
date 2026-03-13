//FUNCTIONS

// simple function
function add(a,b) {
  console.log(a+b);
}

add(5,10);
add(10,20);

// function with return
function multiply(x,y) {
  return x*y;
}

let resultt = multiply(4,5);
console.log(resultt)

//practice
//1

function greet() {
  console.log("Asslamualikum")
}

greet()

//2

function add(a,b) {
  console.log(a+b);
}

add(7,3);

//3

function multiply(x,y) {
  return x*y;
}
let resul = multiply(2,6);
console.log(resul)

//4

function greeting(name) {
  console.log("hello" + name);
}

greeting("zoha")

//5

check(8)

function check(number) {
  if (number%2==0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

//6

function square(num) {
  return num*num;
}

let res = square(5);
console.log(res)

//FUNCTION EXPRESSSION

const add = function(a,b) {
  return a+b;
};

console.log(add(5,3));

// Anonymous function expression

const greet = function() {
  console.log("hello")
}

greet()

// Named function expression

const greeeting = function sayhello() {
  console.log("hello world");
}

greeeting();

//ARROW FUNCTION

// short arrow function (implicit rteurn)

const multiply = (x,y) => x*y;
console.log(multiply(9,9));

// add

const add = (x,y) => x+y;
console.log(add(2,3))

// one parameter arrow function

const square = x => {
  return x*x
}

console.log(square(4))

// simple arrow function

const greet = () => {
  console.log("hello zoha")
}

greet()

// practice

//1

const check = x => {
  if(x%2==0) {
    console.log("even")
  } else {
    console.log("odd")
  }
}

check(78)

//2

const table = x => {
  for (let i=1; i<=10; i++) {
    console.log(i*x)
  }
}
table(3)

//CALLBACK FUNCTION

function greet(name) {
  console.log("hello " + name)
}

function processUser(callback) {
  let name="zoha";
  callback(name)
}

processUser(greet);

// 1
function add(a,b) {
  console.log(a+b)
}

function calculate(callback) {
  callback(4,3)
}

calculate(add)

// 3

function calculator(a,b, callback) {
  callback(a,b)
}

calculator(5,3, function(x,y) {
  console.log(x+y)
})

// 4
setTimeout(function() {
  console.log("hello after 2 seconds")
}, 2000)

//5

function multiply(a,b) {
  console.log(a*b)
}

function calcu(callback) {
  callback(6,4)
}

calcu(multiply)

//6

function showMessage() {
  console.log("task complete")
}

setTimeout(showMessage , 2000)

//7 

let button = document.getElementById("mybtn")
button.addEventListener("click", function() {
  console.log("button clicked")
})



// HIGHER ORDER FUNCTION

function greet(name) {
  return "hello " + name
}

function sayhello(func, userName) {
  console.log(func(userName))
}

sayhello(greet, "zoha")

function multilyer(x) {
  return function(y) {
    return x*y
  }
}

let multiply= multilyer(5)
console.log(multiply(3))

// map function
let numbers = [1,2,3,4,5]
let squared = numbers.map(function(n) {
  return n*n
})

console.log(squared)

// filter function
let numb = [1,2,3,4,5]

let even = numbers.filter(function(n) {
  return n%2==0
})

console.log(even)

// reduce function
let num = [1,2,3,4,5]

let sum = num.reduce(function(n) {
  return n+n
})

console.log(sum)

// practice set

//1 function as argument

function greetUser(name) {
  return name
}

function welcome(func, userName) {
  console.log(func,userName)
}

welcome(greetUser, "Zoha")

//2 function as return value

function power(exponent) {
  return function(number) {
    return Math.pow(number,exponent)
  }
}

let square = power(2);
console.log(square(5));

let cube = power(3);
console.log(cube(3));

//3 array map

let array = [2,4,6,8];
let sqr = array.map(function(n) {
  return n*n
})

console.log(sqr)

//4 array filter

let arr = [5, 10, 15, 20, 25]
let great = arr.filter(function(n) {
  if (n>10) {
    return n
  }
})

console.log(great)

//5 array reduce

let arr1 = [1, 2, 3, 4, 5]
let summ = arr1.reduce(function(n) {
  return n+n
})

console.log(summ)

//6 custom higher order function

function repeat(func, times) {
  for (let i=0; i<times; i++) {
    func()
  }
}

function sayHi() {
  console.log("HI")
}

repeat(sayHi, 3)

//7 chaining function

function add(a) {
  return function(b) {
    return a+b
  }
}

function multipli(a) {
  return function(b) {
    return a*b
  }
}

let result = multipli(add(5)(3))(2)
console.log(result)

//8 callback function

function checkEven(number, callback) {
  if (number%2==0) {
    callback(number + "is even")
  } else {
    callback(number + "is odd")
  }
}

checkEven(7, function(message) {
  console.log(message)
})

//9 map with arrow function

let arr2 = [1, 3, 5, 7]
let doubled = arr2.map(n => n*2)
console.log(doubled)

//10 filter with arrow function

let arr3 = [10, 15, 20, 25, 30]
let smallNumbers= arr3.filter(n => n<20)
console.log(smallNumbers)

// CLOSURE

function greeting(name) {
  let greet="Hello";
  return function() {
    console.log(greeting + " " + name)
  }
}

let sayhello = greeting("zoha")
sayhello();

// Counter using closure

function counter() {
  let count = 0
  return function() {
    count++;
    console.log(count)
  }
}

let myCounter = counter()
myCounter()
myCounter()