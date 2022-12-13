let changeContent = document.getElementById("change-content")
let changeBtn = document.getElementById("change-btn")
changeBtn.addEventListener("click", function(){
    changeContent.innerHTML = "Hello JavaScript"
})

let changeStyle = document.getElementById("change-style")
let styleBtn = document.getElementById("style-btn")
styleBtn.addEventListener("click", function(){
    changeStyle.style.fontSize='35px'
    changeStyle.style.color='blue'
})

let hideEl = document.getElementById("hide-element")
let showBtn = document.getElementById("show-btn")
showBtn.addEventListener("click", function(){
    hideEl.style.display='block'
})

document.getElementById("body-demo").innerHTML = "My first JavaScript"

document.getElementById("inner-demo").innerHTML = 5 + 6;

document.getElementById("write-btn").addEventListener("click", function(){
    document.write(3 + 5)
})

let x, y, z;
x = 5;
y = 6;
z = x + y;
document.getElementById("statement-demo").innerHTML = "The value of z is " + z + "."

document.getElementById("execution-demo").innerHTML = "Hello Dolly"


let a = 5 + 2 + 3;
console.log(a)
let b = "John" + " " + "Doe";
console.log(b)
let  c = "5" + 2 + 3;
console.log(c)
let d = 2 + 3 + "5"
console.log(d)


// $ treated as a letter
let $$$ = 2;
let $money = 5;
console.log($$$ + $money)

let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
console.log(_x + _100)

// let cannot redeclare
// let x = 10;

var m = 10;
var m = 100;


// allowed
carName = "volvo";
var carName;
console.log(carName)

// not allowed
// carname = "saab"
// let carname;
// console.log(carname)

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
document.getElementById("const-array").innerHTML = cars;

try {
    const car = ["Saab", "Volvo", "BMW"];
    car = ["Toyota", "Volvo", "Audi"]
}
catch (err) {
    document.getElementById("reassign").innerHTML = err;
}

const Car = {
    type: "Fiat",
    model: "500",
    color: "white"
}
Car.color = "red";
Car.owner = "john"
document.getElementById("const-obj").innerHTML = "Car owner is " + Car.owner;

// operators

let p = 12;
let q = 3;
console.log(p + q)
console.log(p - q)
console.log(p * q)
console.log(p / q)
console.log(p % q)

let text1 = "John ";
let text2 = "Doe";
console.log(text1 + text2)

let text3 = "What a very";
console.log(text3 += "nice day")

// assignment operators

let e = -100;
e <<= 5;
document.getElementById("left-assgn").innerHTML = "value of e is: " + e;

let f = -100
f >>= 5;
document.getElementById("right-assgn").innerHTML = "value of e is: " + f;

let andAssgn = 100;
andAssgn &= 5;
document.getElementById("and-assgn").innerHTML = "value is: " + andAssgn

let orAssgn = 100;
orAssgn |= 5;
document.getElementById("or-assgn").innerHTML = "value is: " + orAssgn

// strings

let ans1 = "It's alright";
let ans2 = "He is called 'Johnny'";
let ans3 = 'He is called "Johnny"';
document.getElementById("string").innerHTML = ans1 + "<br>" + ans2 + "<br>" + ans3;

// functions

function myFunction(p1, p2){
    return p1 * p2;
}
document.getElementById("function-demo1").innerHTML = myFunction(4, 5);

var variable1 = myFunction1(4,3);
document.getElementById("function-demo2").innerHTML = "product is " + variable1;
function myFunction1(a ,b){
    return a * b;
}

document.getElementById("temperature").innerHTML = "The temperature is " + toCelsius(77) + "Celsius";
function toCelsius(fahrenheit){
    return(5 / 9) * (fahrenheit - 32);
}