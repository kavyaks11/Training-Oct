/* let js = 'Amazing';
// if (js === 'Amazing') alert('JavaScript is fun');

console.log(40 + 8 +23 - 10);

console.log('Jonas');
let firstname = 'Jonas';
console.log(firstname);

let myFirstJob = 'programmer';
let myCurrentJob = 'teacher';
console.log(myFirstJob);

true;
console.log(true);
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javaScriptIsFun = 'Yes!';
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1999;
console.log(typeof year);

console.log(typeof null)

let age = 30;
age = 31; 

// const birthYear = 1999;
// birthYear = 2000;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);   */


// const ageKavya = 2037 - 1999;
// const ageSarah = 2037 - 2010;
// console.log(ageKavya, ageSarah);

// math operators
// const now = 2037;
// const ageKavya = now - 1999;
// const ageSarah = now - 2010;
// console.log(ageKavya, ageSarah);

// console.log(ageKavya * 2, ageKavya / 10, 2 ** 3);

// const firstname = "Kavya";
// const lastName = "Satheesan";
// console.log(firstname + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// // comparison operators
// console.log(ageKavya > ageSarah);
// console.log(ageSarah <= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1999 > now - 2010)

// const now = 2037;
// const ageKavya = now - 1999;
// const ageSarah = now - 2018;
// console.log(now - 1999 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;

// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageKavya + ageSarah) / 2
// console.log(ageKavya, ageSarah, averageAge);


// coding challege 1

// const markWeight = 78;
// const markHeight = 1.69;
// const JohnWeight = 92;
// const JohnHeight = 1.95;

// const markWeight = 95;
// const markHeight = 1.88;
// const JohnWeight = 85;
// const JohnHeight = 1.76;

// let BMIm, BMIj;
// BMIm = markWeight / (markHeight * markHeight);
// BMIj = JohnWeight / (JohnHeight * JohnHeight);
// console.log(BMIm, BMIj)

// let markHigherBMI;
// markHigherBMI = BMIm > BMIj;
// console.log(markHigherBMI);

// const firstName = 'jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037; 

// const jonas = "i'm " + firstName + ',a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas)

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log("Just a regular string...");

// console.log('String with \n\ multiple \n\ lines');

// console.log(`String with
//  multiple 
//  lines`);



// const age = 17;
// if(age >= 18) {
//     console.log('Sara can start driving license');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;
// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// coding challenge 2

// const markWeight = 78;
// const markHeight = 1.69;
// const JohnWeight = 92;
// const JohnHeight = 1.95;

// let BMIm, BMIj;
// BMIm = markWeight / (markHeight * markHeight);
// BMIj = JohnWeight / (JohnHeight * JohnHeight);
// console.log(BMIm, BMIj);
// if(BMIm > BMIj){
//     console.log(`Mark's BMI (${BMIm}) is higher than John's (${BMIj})!`)
// } else {
//     console.log(`John's BMI (${BMIj}) is higher than Mark's (${BMIm})!`)
// }

//  type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear ) + 18);

// console.log(Number('jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coercion

// console.log('I am ' + 23 + ' yeras old');
// console.log('I am ' + '23' + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * '2');
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// console.log('10' - '4' - '3' - 2+'5')

// falsy and falsy values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if(money) {
//     console.log("Don't spend it all");
// } else {
//     console.log('You should get a job')
// }

// let height;
// if(height) {
//     console.log('YAY! height is defined')
// } else {
//   console.log('Height is undefined')
// }

// const age = 18;
// if (age === 18) console.log('You just became adult')

// 18 == '18'; //true
// 18 === '18'; //false

// // const age = 18;
// const age = '18';
// if (age === 18) console.log('You just became adult(strict)');
// if (age == 18) console.log('You just became adult (loose)');

// // prompt("what's your favourite number")

// const favourite = Number(prompt("what's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log('Cool! 23 is an amazing number');
// } else if(favourite === 7) {
//     console.log('Cool! 7 is also an amazing number');
// } else {
//     console.log("Number is not 23 or 7");
// }

// if (favourite !== 23) console.log("Why not 23")

// logical operators

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else  {
//     console.log('Someone else should drive...');
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log("Sarah is able to drive")
// } else {
//     console.log("Someone else should drive")
// }

// coding challenge 3

// let avgScoreDolphins, avgScoreKoalas;
// avgScoreDolphins = (96 + 108 + 89) / 3;
// avgScoreKoalas = (88 + 91 + 110) / 3;

// console.log(avgScoreDolphins, avgScoreKoalas);

// if(avgScoreDolphins > avgScoreKoalas) {
//     console.log("Dolphins won");
// } else if(avgScoreDolphins < avgScoreKoalas) {
//     console.log("Koalas won");
// } else if(avgScoreDolphins===avgScoreDolphins) {
//     console.log('Both win the trophy');
// }

// bonus1

// avgScoreDolphins = (97 + 112 + 101) / 3;
// avgScoreKoalas = (109 + 95 +123) / 3;
// console.log(avgScoreDolphins, avgScoreKoalas);

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100){
//     console.log("Dolphins win the trophy");
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100){
//     console.log("Koalas win the trophy");
// } else if (avgScoreDolphins === avgScoreKoalas){
//     console.log("Both win the trophy");
// }

// bonus 2

// avgScoreDolphins = (97 + 112 + 101) / 3;
// avgScoreKoalas = (109 + 95 + 106) / 3;
// console.log(avgScoreDolphins, avgScoreKoalas);

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100){
//     console.log("Dolphins win the trophy");
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100){
//     console.log("Koalas win the trophy");
// } else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100 && avgScoreKoalas >= 100){
//     console.log("Both win the trophy");
// } else{
//     console.log("No one wins the trophy");
// }


// const day = 'sunday';

// switch (day) {
//     case 'monday ':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     dafault:
//         console.log('not a valid day!');    
// }

// if(day === 'monday'){
//     console.log('plan course structure');
//     console.log('Go to coding meetup');
// } else if(day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if(day === 'wednesday' || day === 'thursday'){
//     console.log('write coding examples');
// } else if(day === 'friday'){
//     console.log('Record Videos');
// } else if(day === 'saturday' || day === 'sunday'){
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day');
// }

// const age = 14;
// age >= 18 ? console.log('I like to drink wine'):
// console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18){
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2 );

// coding challen ge 4
let tip, bill;
bill = 275;
bill >= 50 && bill <= 300 ? tip = bill * (15 / 100):
tip = bill * (20 / 100) ;
console.log(tip);

console.log(`bill value is ${bill}, the tip is ${tip}, and the total value is ${bill + tip}`);