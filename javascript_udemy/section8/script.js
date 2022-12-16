"use strict";

// scoping in practice

/*function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `0h, and you are a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    add(2, 3);
  }
  printAge();
  return age;
}
const firstName = "Jonas";
calcAge(1991);
// console.log(age);*/

// Hoisting in practice

// hoisting with variables
/*console.log(me);
// console.log(job);
// console.log(year);
var me = "Jonas";
let job = "teacher";
const year = 1991;

// hoisting with functions

console.log(addDecl(2, 5));
// console.log(addExpr(3, 6));
// console.log(addArrow(3, 4));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return (a = b);
};

const addArrow = (a, b) => a + b;

//
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}
//
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);*/

// console.log(this);

/*const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //   console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  //   console.log(this);
};
calcAgeArrow(1999);

const jonas = {
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();*/

/*const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  //   greet: () => console.log(`Hey ${this.firstName}`),
  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8); */

/*let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Jonas",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me", me);*/

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("before marriage:", jessica);
console.log("After marriage:", marriedJessica);

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["alice", "bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("mary");
jessicaCopy.family.push("john");

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
