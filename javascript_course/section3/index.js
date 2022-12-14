"use strict";

// functions

// function logger() {
//     console.log('My name is Kavya');
// }
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// const num = Number('23');
// console.log(num)

// function declaration vs expressions

// function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1999);
// // console.log(age1);

// // function expression

// const calcAge2 = function(birthYear) {
//     return 2037 -  birthYear;
// }
// const age2 = calcAge2(1999);
// console.log(age1, age2)

// Arrow functions

// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// functions calling other functions

// function cutafruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applepieces = cutafruitPieces(apples);
//     const orangePieces = cutafruitPieces(oranges);

//     const juice = `Juice with ${applepieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1970, 'Mike'));

// coding challenge

// const calcAverage = (s1, s2, s3)=>{
//     const avg = (s1 + s2 + s3) / 3;
//     return avg;
// }

// let avgDolphins = console.log(calcAverage(23, 44,71));
// let avgKoalas = console.log(calcAverage(65, 54, 49));

// function checkWinner(avgDolphins, avgKoalas){
//     if(avgDolphins >= 2 * avgKoalas){
//         console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);

//     } else if(avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);

//     } else {
//         console.log("no one win");
//     }
// }
// checkWinner(avgDolphins, avgKoalas);

// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);

// checkWinner(avgDolphins, avgKoalas);

// arrays

//  const friends = ['Michael', 'Steven', 'Peter'];
//  console.log(friends);

//  const years = new Array (1991, 1984, 2008, 2020);
//  console.log(years);

//  const flowers = new Array('jasmine', 'lilly', 'rose');
//  console.log(flowers);

//  console.log(friends[0]);
//  console.log(friends.length);

//  console.log(friends[friends.length - 1]);
//  friends[2] = 'jay';
//  console.log(friends);

//  const firstName = 'Jonas';
//  const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
//  console.log(jonas);
//  console.log(jonas.length);

//  const calcAge = function (birthYear) {
//     return 2037 - birthYear;
//  }
//  const year = [1990, 1967, 2002, 2010, 2018];

// //  console.log(calcAge(year));

//  const age1 = calcAge(year[0]);
//  const age2 = calcAge(year[1]);
//  const age3 = calcAge(year[year.length - 1]);
//  console.log(age1, age2, age3);

//  const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
//  console.log(ages);

// array methods

// const friends = ['Michael', 'Steven', 'Peter'];
// // friends.push('jay');
// const newLength = friends.push('jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped)
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('23'));

// coding challenge

// function calcTip(bill){
//     if(bill >= 50 && bill <= 300){
//         const tip = bill * (15 / 100);
//         return tip;

//     } else {
//         const tip = bill * (20 / 100);
//         return tip;

//     }
// }
// calcTip(100);

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]
// console.log(tips);

// const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[bills.length - 1] + calcTip(bills[bills.length - 1])];
// console.log(total);

// objects

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interstedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if(jonas[interstedIn]){
//     console.log(jonas[interstedIn]);
// } else {
//     console.log('Wrong request');
// }

// jonas.location = 'aportugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// // challenge
// // Jonas has 3 friends , and his best friend is called Michael
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

/*const jonas = {
   firstName: 'Jonas',
   lastName: 'Schmedtmann',
   birthYear: 1991,
   job: 'teacher',
   friends: ['Michael', 'Peter', 'Steven'],
   hasDriversLicense: false,

   // calcAge: function(birthYear){
   //     return 2037 - birthYear;
   // }
   // calcAge: function(){
   //     return 2037 - this.birthYear
   // }
   // creating new property (age: 46)
   calcAge: function(){
       this.age = 2037 - this.birthYear;
       return this.age;
   },

   getSummary: function(){
       return `${this.firstName} is a ${this.calcAge()}-year od ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
   }
};
console.log(jonas)
console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));


// challenge : Jonas is a 46-year old teacher, and he has a driver's license.


// console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and`);
console.log(jonas.getSummary()); */

// coding challenge 3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }
// }
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }
// }
// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// if (mark.BMI > john.BMI) {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than
//     ${john.fullName}'s (${john.calcBMI()}).`);
// } else if (john.BMI > mark.BMI) {
//     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than
//     ${mark.fullName}'s (${mark.calcBMI()}).`);
// }

// for loop

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

// const jonas = [
//     'Jonas',
//     'Schmedmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true

// ];
// const types = []
// for(let i = 0; i < jonas.length; i++){
//     console.log(jonas[i], typeof jonas[i]);

//     // filling types arra
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for(let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log('--- only strings ---')
// for (let i = 0; i < jonas.length; i++){
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- break with  number---')

// for(let i = 0; i < jonas.length; i++){
//     if(typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

// backward printing
// const jonas = [
//     'Jonas',
//     'Schmedmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for(let i = jonas.length - 1 ; i >= 0; i--){
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++){
//     console.log(`----------Starting exercise ${exercise}`);

//     for( let rep = 1; rep < 6; rep++){

//         console.log(`Exrcise ${exercise} Lifting weight repetition ${rep}`);
//     }
// }

// while loop

// let rep = 1;
// while( rep <= 10){
//     console.log(`Lifting weights repetition ${rep} `);
//     rep++;
// };

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...')

// }

// coding challenge

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
let tip;

for (let i = 0; i < bills.length; i++) {
  if (bills[i] >= 50 && bills[i] <= 300) {
    tips[i] = bills[i] * 0.15;

    //  tip = bills[i] * .15;
  } else {
    tips[i] = bills[i] * 0.2;

    //  tip = bills[i] * 0.2;
  }
  // tips.push(tip);
  tips.push(tips[i]);
  totals.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(totals);

// avg of any array
let sum = 0,
  avg;
function calcAverage(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  avg = sum / arr.length;
}
calcAverage(totals);
console.log(sum);
console.log(avg);

/* const calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * .15:
    bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length
}
console.log(calcAverage(totals)); */
