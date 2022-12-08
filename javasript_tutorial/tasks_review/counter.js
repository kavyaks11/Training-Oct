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
//  arrayPop.splice([2])
 arrayPop.slice(3,1)
 console.log(arrayPop)

 function myFunction(){
    console.log("hello world")
 }
 myFunction()

 function functionWithArgs(a, b){
    console.log(a - b)
 }
 functionWithArgs(10,8)