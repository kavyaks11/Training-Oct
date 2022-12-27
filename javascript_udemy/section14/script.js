"use strict";

/*
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

//211)prototypal inheritance on Built-in objects

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); //object.prototype( top of prototype chain)
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector("h1");
*/

//212)coding challenge

/*
const car = function (make, speed) {
  this.speed = speed;
};

car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};
car.prototype.brake = function () {
  console.log(this.speed - 5);
};
const car1 = new car("BMW", 120);
const car2 = new car("Mercedes", 95);
console.log(car1, car2);

car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
*/

/*const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mersedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
*/

/*
//213) ES6 classes

//class expression
// const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //static method

  static hey() {
    console.log("hey there");
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();
const walter = new PersonCl("Walter White", 1965);

PersonCl.hey();
*/

/*
//214) setters and getters

const account = {
  owner: "jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
*/
/*
//216) object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();*/

//217) coding challenge2
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    console.log(this.speed + 10);
  }
  brake() {
    console.log(this.speed - 5);
  }
  get speedUS() {
    return `speed in mi/h is ${this.speed / 1.6} mi/h`;
  }

  set speedUS(speed) {
    return `speed in km/h is ${this.speed * 1.6} km/h`;
  }
}

const bmw = new Car("BMW", 120);
console.log(bmw);
const mercedes = new Car("Mercedes", 95);
console.log(mercedes);

const ford = new Car("Ford", 120);

console.log(bmw.speedUS);
// console.log(bmw.speedUS(75));
*/
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50; //set
console.log(ford);
*/

/*
//218)inheritance between classes : constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}; // constructor function
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  Person.call(this, firstName, birthYear); // calling parent class
  this.course = course;
};

// Student.prototype = Object.create(Person.prototype);
Student.prototype = Person.prototype;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I
    study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
// console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

//219)coding challenge3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.EV = function(make, speed,charge){
// this.make = make;
//  this.speed = speed;
//  this.charge = charge
// }

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/
/*
//220) inheritance between classes: ES6 classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hey there");
  }
}
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study 
    ${this.course}`);
  }
  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha  Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();*/

/*
//221)inheritance between classes: object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study 
    ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();
*/

//222)Another class example,
// 223)Encapsulatioon: protected properties and methods,
// 224)encapsulation :private class fields and methods

class Account {
  //1.public  fields(instances)
  locale = navigator.language;

  //2.private fields(not accessible form outside)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //3. public methods

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  static helper() {
    console.log("helper");
  }

  ///4.private methods
  //#approveLoan(val){
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
}
const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);

// console.log(acc1.#movements)

Account.helper();

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

//227 coding challenge

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
