//const products = ["product1","product2","product3"];
const products = [
  { id: 1, name: "Product 1", description: "Desc 1", price: 100 },
  { id: 2, name: "Product 2", description: "Desc 2", price: 200 },
  { id: 3, name: "Product 3", description: "Desc 3", price: 300 }
];

let cart = [];

products.forEach((product) => {
  const obj = {
    ...product,
    quantity: 1,
    totalPrice: product.price * 1
  };

  cart.push(obj);
});

console.log(cart);
