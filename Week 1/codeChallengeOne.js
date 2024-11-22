// Coding task 1 - Write a function expression called reverseString() that return reversed string of the name

// reverseString("John");
// reverseString("James");

function reverseString() {
  let name = "Sara";
  let empty = "";
  for (let i = name.length - 1; i >= 0; i--) {
    empty += name[i];
  }
  console.log(empty);
}

reverseString();

// Coding task 2 - Write a function expression called reverseArray() that return reversed array

// reverseArray([1, 2, 3, 4, 5]);
// reverseArray(["I", "like", "JavaScript"]);

// let numbers = [1, 2, 3, 4, 5];
// let test = ["I", "like", "JavaScript"];

let numbers = [1, 2, 3, 4, 5];
let text = ["I", "like", "JavaScript"];

function reverseArray() {
  console.log(numbers.reverse());
  console.log(text.reverse());
}

reverseArray();

// function reverseArray() {
//   numbers.reverse;
// }

// Coding task 3 - Write a function expression called mostExpensiveItem() that returns the item that has the most cost tied up, calculated by the amount in stock * price.

// [
// { item: "irn bru", price: 3.25, stock: 50 },
// { item: "fanta", price: 3.98, stock: 45 },
// { item: "diet coke", price: 4.40, stock: 38 },
// { item: "7up", price: 3.99, stock: 42 },
//  ]

// let items = [
//   { item: "irn bru", price: 3.25, stock: 50 },
//   { item: "fanta", price: 3.98, stock: 45 },
//   { item: "diet coke", price: 4.4, stock: 38 },
//   { item: "7up", price: 3.99, stock: 42 },
// ];
