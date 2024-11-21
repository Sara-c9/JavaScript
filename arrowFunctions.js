//Q1 Write an arrow function

// function greet(name) {
//     return "hello, my name is " + name
//  }

let greet = (name) => "Hi " + name + "!";

console.log(greet("Sara"));

//Q2 Convert function below into arrow function

// function isEven(num) {
//     return num % 2 === 0;
//   }

let isEven = (num) => num % 2 === 0;
console.log(isEven(3));

//Q3 onvert function below into arrow function

// function counterFunc(counter) {
//     if (counter > 100) {
//       counter = 0;
//     } else {
//       counter++;
//     }

//     return counter;
//   }

let counterFunc = (counter) => {
  if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }

  return counter;
};

console.log(counterFunc(101));

//Q4 Convert function below into arrow function

// function nameAge(name, age) {
//     console.log("Hello " + name);
//     console.log("You are " + age + " years old");
//   }

let nameAge = (name, age) => {
  console.log("Hello " + name);
  console.log("You are " + age + " years old");
};

console.log(nameAge("Sara", "30"));

//Q5 Convert function below into arrow function

// function printOnly() {
//     console.log("printing");
//   }

let printOnly = () => console.log("printing");

console.log(printOnly());

//Q6 Convert function below into arrow function

// function sum(num1, num2) {
//     return num1 + num2
// }

let sum = (num1, num2) => num1 + num2;
console.log(sum(5, 10));
