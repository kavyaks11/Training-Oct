// importing module

// import { addToCart } from "./shoppingCart";

// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// addToCart("bread", 5);
// console.log(price, tq);

// console.log("Importing Module");

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// console.log(price);

// import add, { cart } from "./shoppingCart.js";
// add("pizza", 2);
// add("bread", 5);
// add("apple", 4);

// console.log(cart);

// console.log("start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("something");

/*
const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);

// lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/*
//274)

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

/*
//275 commonjs
//export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  //import
  const { addToCart} = require('./shoppingCart.js')
  */

//277

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

// import cloneDeep from "lodash-es";

// import "core-js/stable";
// import "regenerator-runtime/runtime";

//testing
//testing
