// passenger counter app

// let countEl = document.getElementById("count-el")
// let incrementBtn = document.getElementById("increment-btn")
// let count = 0
// let saveBtn = document.getElementById("save-btn")
// let saveEl = document.getElementById("save-el")

// incrementBtn.addEventListener("click", function(){
//     console.log("clicked")
//     count += 1
//     countEl.textContent = count
// })
// saveBtn.addEventListener("click", function(){
//     let countStr = count + " "
//     console.log("clicked")
//     saveEl.textContent += " " + countStr
//     countEl.textContent = 0
//     count = 0

// })


// calculator

// let num1 = 20
// let num2 = 5
// document.getElementById("num1-el").textContent = "num1: " + num1
// document.getElementById("num2-el").textContent = "num2: " + num2
// let sumEl = document.getElementById("sum-el")
// addBtn = document.getElementById("add-btn")
// subtractBtn = document.getElementById("subtract-btn")
// divideBtn = document.getElementById("divide-btn")
// multiplyBtn = document.getElementById("multiply-btn")

// addBtn.addEventListener("click", function(){
//     let result = num1 + num2
//     sumEl.textContent = "sum: " + result
    
// })
// subtractBtn.addEventListener("click", function(){
//     let result = num1 - num2
//     sumEl.textContent = "sum: " + result
    
// })
// divideBtn.addEventListener("click", function(){
//     let result = num1 / num2
//     sumEl.textContent = "sum: " + result
    
// })
// multiplyBtn.addEventListener("click", function(){
//     let result = num1 * num2
//     sumEl.textContent = "sum: " + result
    
// })


// blackjack game

// let firstCard = 10
// let secondCard = 22
// let sum = firstCard + secondCard
// let hasBlacjack = false



// if (sum <= 20){
//     console.log("Do you want to draw a new card")
// } else if (sum === 21){
//     console.log("You have got Blackjack")
//     hasBlacjack = ture
// } else{
//     console.log("You are out of the game")
// }



// javascript basics

var ourArr = [18,30,22]
ourArr[1] = 45
ourArr[2] = 10
console.log(ourArr)

var  myArr = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]]
var myData = myArr[3][1]
console.log(myData)

var ourArray = ["Stimpson", "J", "cat"]
ourArray.push(["happy", "joy"])
ourArray.push("hello")
console.log(ourArray)

var myArray = [["john", 23], ["cat", 2]]
// myArray.push(["dog", 3])
myArray.push("hello")
myArray.unshift("hi")
console.log(myArray)  

var arrayPop = [1, 2, 3,4 ,5]
//  arrayPop.pop()
//  arrayPop.shift()
 arrayPop.splice(3,1,20)
 arrayPop.splice(1,0,30)
 console.log(arrayPop)

 function myFunction(){
    console.log("hello world")
 }
 myFunction()

 function functionWithArgs(a, b){
    console.log(a - b)
 }
 functionWithArgs(10,8)

 function myScope(){
    var myVar = 5
    console.log(myVar)
 }
 myScope()
//  console.log(myVar)   

 function minusSeven(num){
    return num -7
 }
 console.log(minusSeven(89))

function eightTimes(num){
    return num * 8
}
console.log(eightTimes(4))

// var sum = 0
// function add(){
//     sum += 4
//     return sum
// }
// console.log(add)

var changed = 0
function change(num){
    return (num + 5) / 3
}
changed = change(100)
console.log(changed)

var processed = 0
function process(num){
    return (num + 4) / 6
}
processed = process(20)
console.log(processed)

function nextLine(arr, item){
    arr.push(item)
    return arr.shift()
}
var testArr = [1,2,3,4,5,6]
console.log("Before: " + JSON.stringify(testArr))
console.log(nextLine(testArr, 6))
console.log("After : " + JSON.stringify(testArr))


function trueOrFalse(isTrue){
    if (isTrue){
        return "yes, it's true"
    }
    return "No, it's false"
}
console.log(trueOrFalse(true))

function falseorTrue(wasTrue){
    if (wasTrue){
        return "yes, that was true"
    }
    return "No, that was false"
}
console.log(falseorTrue(false))


function testEqual(val){
    if(val == '10'){
        return "Equal"
    }
    return "not equal"
}
console.log(testEqual(10))

function testStrict(val){
    if(val === '10'){
        return "equal"
    }
    return "not equal"
}
console.log(testStrict(10))

function compareEquality(a, b){
    if(a == b){
        return "Equal"
    }
    return "not equal"
}
console.log(compareEquality(10, "10"))

function compareEquality(a, b){
    if(a === b){
        return "Equal"
    }
    return "not equal"
}
console.log(compareEquality(4, "4"))

function testGreaterThan(val){
    if(val > 100){
        return "Over 100"
    }
    if(val > 10){
        return "Over 10"
    }
    return "10 0r under"
}
console.log(testGreaterThan(101))

// function logicalAnd(val){
//     if(val <= 50){
//         if (val >= 25){
//             return "yes"
//         }
//     }
//     return "no"

// }
// console.log(logicalAnd(34))

function logicalAnd(val){
    if (val >= 25 && val <= 50){

        return "yes"
    }
    return "no"
}
console.log(logicalAnd(77))


function testSize(num){
    if(num < 5){
        return "tiny"
    } else if(num < 10){
        return "small"
    } else if (num < 15){
        return "medium"
    } else if  (num < 20){
        return "large"
    } else {
        return "huge"
    } 
}
console.log(testSize(100))


var names = ["hole-in-one", "eagle", "birdie", "par", "bogey", "double-bogey", "go-home"]
function golfScore(par, strokes){

    if(strokes == 1){
        return names[0]
    } else if (strokes <= par - 2){
        return names[1]
    } else if (strokes == par - 1){
        return names[2]
    } else if (strokes == par){
        return names[3]
    } else if (strokes == par + 1){
        return names[4]
    } else if (strokes == par + 2){
        return names[5]
    } else if (strokes >= par + 3){
        return names[6]
    }
}
console.log(golfScore(5 ,2))


function caseInswitch(val){
    var answer = ""
    switch(val){
        case 1:
            answer = "alpha"
            break
        case 2:
            answer = "beta"
            break
        case 3:
            answer = "gamma"
            break
        case 4:
            answer = "delta"
            break 
        default:
            answer = "none"     
    }

    return answer
}
console.log(caseInswitch(8))

function isLess (a, b){
    return a < b
}
console.log(isLess(9,6))

function abTest(a, b){
    if(a < 0 || b < 0){
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}
console.log(abTest(2,2))

// card count
var count = 0
function cardCount(card){

    switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++
        break
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        count--
        break

    }
    var holdbet = 'Hold'
    if (count > 0){
        holdbet = 'Bet'
    }
    return count + " " + holdbet
}

console.log(cardCount("J"))

var testObj = { 
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
    "cap": {
        "capone" : "cap1",
        "captwo" : "cap2"
    }
}
var hatValue = testObj.hat
console.log(hatValue) 
var shirtValue = testObj["shirt"]
console.log(shirtValue)
testObj.shoes = "aaa"
console.log(testObj.shoes)


var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "bo Jovi",
        "tracks": [
            "Let it Rock",
            "You give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist":"prince",
        "tracks": [
            "1999",
            "Little red corvette"
        ]
    },
    "5439": {
        "album":"ABBA Gold"
    }
}
// keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection))
function updateRecords(id , prop, value){
    if (value === ""){
        delete collection[id][prop]
    } else if (prop === "tracks"){
        collection[id][prop]
    }
    return collection
}
console.log(updateRecords(5439, "artist", "ABBA"))

// while loop

var array = []
var i = 0
while(i < 5){
    array.push(i)
    i++
}
console.log(array)

var forLoop = []
for (let i = 0; i <=10; i++){
    forLoop.push(i)
}
console.log(forLoop)
for (let i = 0; i < 6;i++){
    forLoop.pop(i)
}
console.log(forLoop)
for (let i = 20; i > 0; i -= 2){
    forLoop.push(i)
}
console.log(forLoop)

var arrayOne = [9, 10, 11, 12]
var arrayTotal = 0
for (let i = 0; i < arrayOne.length; i++){
    arrayTotal += arrayOne[i] 
}
console.log(arrayTotal)

// nexted for loop

function multiplyAll(arr){
    var product = 1

    for(var i = 0;i < arr.length; i++){

        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    } 
    return product
}
var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]])
console.log(product)

// do while loop

var whileArr = []
var i = 10 

do {
    whileArr.push(i)
    i++
} while(i < 5)
console.log(i, whileArr)

function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
var random = randomRange(5, 15)
console.log(random)

// convert to integer
// function convert(str){
//     return parseInt(str)
// }
// console.log(convert("55"))

function convert(str){
    return parseInt(str,2)
}
console.log(convert("11"))

function checkSign(num){
    if (num > 0){
        return "positive"
    } else if (num < 0){
    return "negative"
    } else{
        return "zero"
    }
}
console.log(checkSign(0))

const s = [5, 7, 12]
function edit(){
    s[0] = 1
    s[1] = 2
    s[2] = 3
}
console.log(s)

var concat = function(arr1, arr2){
    return arr1.concat(arr2)
}
console.log(concat([1,2], [3,4]))

const sum = (function(){
    return function sum(...args){
        // const args = [x, y, z]
        return args.reduce((a, b) => a + b, 0)
    }
}) ()
console.log(sum(1,2,3))

const [z, x, , y] = [1,2,3,4,5,6]
console.log(z, x, y)

// let a = 8
// let b = 6
// (() => {
//     "use strict"
//     [a, b] = [b, a]
// }) ()
// console.log(a)
// console.log(b)

// import subtract from "math_functiions"
// subtract(7,4)