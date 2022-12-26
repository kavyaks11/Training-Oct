"use strict";

//208)constructor functions and the new operator
const person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //don't do
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
const jonas = new person("Jonas", 1991);
console.log(jonas);

// when using new
//1.new empty object is created
//2.function is called , this = {}
//3.{} linked to prototype
//4.function automatically return {}

const matilda = new person("Matilda", 2010);
const jack = new person("jack", 1980);
console.log(matilda, jack);

const jay = "Jay";

console.log(jonas instanceof person);
console.log(jay instanceof person);

//209)prototypes

console.log(person.prototype);

person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__); //prototype of jonas
console.log(jonas.__proto__ === person.prototype);

console.log(person.prototype.isPrototypeOf(jonas));
console.log(person.prototype.isPrototypeOf(matilda));
console.log(person.prototype.isPrototypeOf(person));

//prototype of linked objects
person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));
