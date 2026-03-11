//DATA TYPES

let a = 10;
let b = "20";

// a aur b ka type check karo aur console me print karo
console.log(typeof(a))
console.log(typeof(b))

let isLoggedIn = false;
let hasSubscription = true;

// dono ka type check karo aur console me print karo

console.log(typeof(isLoggedIn))
console.log(typeof(hasSubscription))

let h;
let i = null;

// x aur y ka type check karo aur console me print karo

console.log(typeof(h))
console.log(typeof(i))

let fruits = ["apple", "banana", "mango"];
let person = {name: "Zoha", age: 20};

// fruits aur person ka type check karo
// person ka age print karo

console.log(typeof(fruits))
console.log(typeof(person))
console.log(person.age)

let bigNumber = 123456789012345678901234567890n;
let uniqueId = Symbol("id");

// dono ka type check karo
console.log(typeof(bigNumber))
console.log(typeof(uniqueId))

function greet(name) {
    return "Hello " + name;
}

// greet ka type check karo
// greet("Zoha") ka output print karo
console.log(typeof(greet))
console.log(greet("Zoha"))

// TYPE CONVERSION

//1
let x = "10"
let y = Number(a)

console.log(x)
console.log(y)

console.log(typeof y)
console.log(typeof x)

//2

let z = "7" + 5
console.log(a)
console.log(typeof z)

//3 

let p = "7" - 5
console.log(b)
console.log(typeof p)

//4

let c = 1
let d = Boolean(c)
console.log(c)
console.log(d)
console.log(typeof d)

//5

let e = "5" * 2
console.log(e)
console.log(typeof e)

//6

let f = "20" / 4
console.log(f)
console.log(typeof f)

console.log(Number("50"))

//7

let g = "5" + 2 + 3
console.log(g)
console.log(typeof g)