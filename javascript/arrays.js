// CREATING ARRAYS

let numbers = [10, 20, 30, 40, 50]
console.log(numbers)

// String array

let fruits = ["apple", "banana", "orange", "peach"]
console.log(fruits)

// Mixed array

let data = ["ali", 21, true]
console.log(data)

// Array Index

let fruit = ["apple", "banana", "orange", "peach"]

console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);

// Length of Array

let animals = ["monkey", "cat", "dog"]
console.log(animals.length)

// How to change array's element

let animal = ["monkey", "cat", "dog"]
animal[1] = "orange"
console.log(animal)

// Array Methods

// push()

let names = ["zoha", "asma", "laiba"]
names.push("areeba")
console.log(names)

// pop()

names.pop()
console.log(names)

// shift()

names.shift()
console.log(names)

// unshift()

names.unshift("usman")
console.log(names)

// map()

let numb = [1, 2, 3, 4, 5]
let result = numb.map( (num) => {
    return num *2
})

console.log(result)

// filter

let num = [1, 2, 3, 4, 5]
let resul = numb.filter( (num) => {
    return num % 2 == 0
})

console.log(resul)

// reduce

let number = [1, 2, 3, 4, 5]
let sum = numb.reduce( (num) => {
    return num + num
})

console.log(sum)

// Array Destructuring

/*let no = [10, 20, 30 , 40]

let [a, b, c, d] = no

console.log(a)
console.log(b)
console.log(c)
console.log(d)*/

// skip values

let f = ["mango", "orange", "banana"]
let [a, ,c] = f

console.log(a)
console.log(c)

// defualt value

let nu = [10];

let [h , i  = 50] = nu;

console.log(h);
console.log(i);

// Swap Variable

let j = 5;
let k = 10;

[j, k] = [k, j];

console.log(j);
console.log(k);

// Rest Operator

let numbe = [1,2,3,4,5];

let [x, y, ...rest] = numbe;

console.log(x);
console.log(y);
console.log(rest);
