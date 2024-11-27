// Coding task 1 - Write a function expression called reverseString() that return reversed string of the name

// let name = "John";
// let name2 = "James";

// Used split to transform string into an array
// Used reverse to reverse the array
// Used join to transfor array back to string

let reverseString = (name) => console.log(name.split("").reverse().join(""));
reverseString("Jonh");
reverseString("James");

// Coding task 2 - Write a function expression called reverseArray() that return reversed array

// let numbers = [1, 2, 3, 4, 5];
// let text = ["I", "like", "JavaScript"];

//Used the reverse function to reverse the element in the array
let reverseArray = (array) => {
  console.log(array.reverse());
};

reverseArray([1, 2, 3, 4, 5]);
reverseArray(["I", "like", "JavaScript"]);

// Coding task 3 - Write a function expression called mostExpensiveItem() that returns the item that has the most cost tied up, calculated by
// the amount in stock * price.

function mostExpensiveItem() {
  // Create an array of the items
  let items = [
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.4, stock: 38 },
    { item: "7up", price: 3.99, stock: 42 },
  ];

  // Compare with an if condition the the result of price*stock for each item
  // First condition displays the first item if its price*stock figure is higher than the other three

  if (
    items[0].price * items[0].stock > items[1].price * items[1].stock ||
    items[0].price * items[0].stock > items[2].price * items[2].stock ||
    items[0].price * items[0].stock > items[3].price * items[3].stock
  ) {
    console.log(items[0]);
  } // If 1st condition is not met, it does the same to the second item
  else if (
    items[1].price * items[1].stock > items[0].price * items[0].stock ||
    items[1].price * items[1].stock > items[2].price * items[2].stock ||
    items[1].price * items[1].stock > items[3].price * items[3].stock
  ) {
    console.log(items[1]);
  } // And the third item
  else if (
    items[2].price * items[2].stock > items[0].price * items[0].stock ||
    items[2].price * items[2].stock > items[1].price * items[1].stock ||
    items[2].price * items[2].stock > items[3].price * items[3].stock
  ) {
    console.log(items[2]);
  } //if none of the above are true, it displays the 4th item
  else {
    console.log(items[3]);
  }
}

mostExpensiveItem();
