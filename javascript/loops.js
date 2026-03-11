// LOOPS

// for loop

for(i=0; i<10; i++) {
  console.log(i)
}

// while loop

let j=1;
while(j<10) {
  console.log(j);
  j++
}

// do-while loop

let k=1;

do {
  console.log(k);
  k++;
} while(k<100)

// practice
//1

for(l=5; l>=1; l--) {
  console.log(l)
}

//2

let m=5;
while(i>=1) {
  console.log(m);
  i--;
}

//3

let i=1;
do {
  console.log(i);
  i++;
} while (i<=4)

//4

for (let i=1; i<=10; i=i*5) {
  if(i%2!=0) {
    console.log(i)
  }
}

//5

let num=5;

for(let i=1; i<=10; i++) {
  console.log(num*i)
}

//6

let sum=0;
for (let i=1; i<=5; i++) {
  sum=sum+i;

}
console.log(sum)

//7

for (let i=10; i>=1; i--) {
  console.log(i)
}

//8

for (let i=1; i<=5; i++) {
  let star="";

  for (let j=1; j<=i; j++) {
    star=star+"*"
  }
  console.log(star)
}

//9

let student = {
  name:  "ali",
  age: 12,
  city: "lahore"
};

// for-in loop

for (let x in student) {
  console.log(x, x[stydent])
}

// for-of loop

let numbers = [10, 20, 30];

for (let n of numbers) {
  console.log(n*2);
}
