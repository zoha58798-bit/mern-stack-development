// OBJECTS

let person = {
    name: "Zoha",
    age: 22,
    city: "Gujranwala"
}

console.log(person)

// OBJECT PROPERTIES

// OBJECT KO ACCESS KRNA 

// Dot Notation

console.log(person.name)
console.log(person.age)

// Bracket Notation

console.log(person["city"])

// Add new prperty to object

person.gender = "female"
console.log(person)

// updtae value of object

person.age = 23
console.log(person.age)

// delete object property

delete person.city
console.log(person)

// OBJECT METHODS

// function in object

let student = {
    name: "zoha",
    greet: function() {
        console.log("hello")
    }
}

student.greet()

// 1

let employee = {
    firstName: "Zoha",
    lastName: "Virk",
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}

console.log(employee.fullName())

// Built-in object methods

// Object.keys(obj) → object ki sari keys ka array

console.log(Object.keys(employee))

// Object.values(obj) → object ki sari values ka array

console.log(Object.values(employee))

// Object.entries(obj) → object ke [key, value] pairs ka array

console.log(Object.entries(employee))

// OBJECT DESTRUCTURING

let employe = {
  name: "Zoha",
  age: 22,
  city: "Gujranwala"
};

let { name, age, city } = employe;

console.log(age); 
console.log(city); 

// change variables name

let {name: firstName, age: years} = employe

console.log(firstName)
console.log(years)

// default values

let {country = "pakistan"} = employe;

console.log(country)

// nested object destructuring

let student1 = {
    namee: "Zoha",
    marks: {
        math: 50,
        english: 90
    }
}

let {namee, marks: { math, english } } = student1;
console.log(math)
console.log(english)

// function destructuring

function greet({ name, age }) {
  console.log(`Hello ${name}, your age is ${age}`);
}

greet(person); 