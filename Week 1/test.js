const items = [
  { item: "irn bru", price: 3.25, stock: 50 },
  { item: "fanta", price: 3.98, stock: 45 },
  { item: "diet coke", price: 4.4, stock: 38 },
  { item: "7up", price: 3.99, stock: 42 },
];

const mostExpensiveItem = (array) => {
  let mostExpensiveItemObj = {};
  let mostExpensiveItemCost = 0;

  for (let i = 0; i < array.length; i++) {
    const costTiedUpSingleItem = array[i].price * array[i].stock;

    if (costTiedUpSingleItem > mostExpensiveItemCost) {
      mostExpensiveItemCost = costTiedUpSingleItem;
      mostExpensiveItemObj = array[i];
    }
  }

  return mostExpensiveItemObj;
};

console.log(mostExpensiveItem(items));
