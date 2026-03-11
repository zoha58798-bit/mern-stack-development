//CONDITIONAL STATEMENT

// if statement
let age = 20;
if (age >= 18) {
  console.log("you can vote")
}

// if-else statement

let agee = 15;
if (agee >= 16) {
  console.log("you can vote")
} else {
  console.log("you can't vote")
}

// if else-if statement

let marks = 75;

if (marks>=80) {
  console.log("grade A")
} else if (marks>=70)  {
  console.log("grade B")
} else if (marks>=60) {
  console.log("grade C")
} else {
  console.log("Fail")
}

// switch statement

let day = 2;

switch(day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day")
}

//1 

let umar = 20;

let result = age>=18 ? "Adult" : "Minor"
console.log(result)

let number=5;

let check = number % 2 == 0 ? "Even" : "Odd"
console.log(check)

