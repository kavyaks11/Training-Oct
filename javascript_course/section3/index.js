'use strict';

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

function calcTip(bill){
    if(bill >= 50 && bill <= 300){
        const tip = bill * (15 / 100);
        return tip;
        
    } else {
        const tip = bill * (20 / 100);
        return tip;
        
    }
}
calcTip(100);

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]
console.log(tips);

const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[bills.length - 1] + calcTip(bills[bills.length - 1])];
console.log(total);

