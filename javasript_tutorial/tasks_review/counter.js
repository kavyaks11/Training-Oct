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

