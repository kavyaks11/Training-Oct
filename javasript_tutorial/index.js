
let countEl = document.getElementById("count-el")
// console.log(countEl)

let count = 0
function increment(){

    count=count + 1
    // console.log(count)
    countEl.innerText = count
}

function save(){
    console.log(count)
}

let saveEl = document.getElementById("save-el")
// console.log(saveEl)

function save(){
    let countStr =  count + " - " 
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
    // console.log(count)
    countEl.textContent = 0
    count = 0

}





// document.getElementById("count-el").innerText = 5

// let count = 0

// console.log(count)

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

// function increment() {
//     console.log("the button was clicked")
// }
// function myLogger(){
//     console.log(40)
// }
// myLogger()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapSum(){
//    lapSum = lap1 + lap2 + lap3
//     console.log(lapSum)
// }
// function lapSum(){
//     console.log(lap1 + lap2 + lap3)
// }
// lapSum()



 
// let lapsCompleted = 0

// function lapincrement(){
//     console.log(lapsCompleted = lapsCompleted + 1)
   
// }
// lapincrement()
// lapincrement()
// lapincrement()



// function lapincrement(){
//     lapsCompleted = lapsCompleted + 1
// }
// lapincrement()
// lapincrement()
// lapincrement()

// console.log(lapsCompleted)




// let username = "per"
// let messege = "You have three new notifications"
// // console.log(messege)

// let messegeToUser = messege + ", " + username + "!"

// // console.log(messege + ", " + username)
// console.log(messegeToUser)


// let name = "Kavya"
// let greeting = "Hi, my name is"
// let myGreeting = greeting + " " + name
// console.log(myGreeting)

// let point = "10"
// let bonusPoint = "5"
// let totalPoint = point + bonusPoint
// console.log(totalPoint)

// let point = 10
// let bonusPoint = 5
// let totalPoint = point + bonusPoint
// console.log(totalPoint)

// let point = "10"
// let bonusPoint = "5"
// let totalPoint = 10 + 5
// console.log(totalPoint)

// let point = "10"
// let bonusPoint = "5"
// let totalPoint = "5" + "10"
// console.log(totalPoint)

// console.log(4 + 5)
// console.log("2" + "5")
// console.log("5" + 1)
// console.log(100 + "100")

// welcomeEl = document.getElementById("welcome-el")

// let name = "Kavya"
// let greeting = "Welcome back "
// welcomeEl.innerText = greeting + name

// welcomeEl.innerText = welcomeEl.innerText + "@@"
// welcomeEl.innerText += "@@"


let firstName = "Kavya"
let lastName = "K S"
let fullName = firstName + " " + lastName
console.log(fullName)

let name = "Linda"
let greeting = "Hi there"

function greetingName(){
    greetingName = greeting + ", " + name + "!"
    console.log(greetingName)
}
greetingName()

let myPoints = 3

function add3Points(){
    // console.log(myPoints = myPoints + 3 )
    myPoints = myPoints + 3 
}
function remove1Point(){
    // console.log(myPoints = myPoints - 1)
    myPoints = myPoints - 1
}
remove1Point()
add3Points()
add3Points()
add3Points()
remove1Point()
console.log(myPoints)



// rendering error messege

let errorParagraph = document.getElementById("error")

function purchase(){
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong please try again"
}


// basic calculator

let num1 = 32
let num2 = 4
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
function add(){
    //   sumEl.textContent = num1 + num2
    let result = num1 + num2
    sumEl.textContent = "sum: " + result
}

function subtract(){
    // sumEl.textContent = num1 - num2
    let result = num1 - num2
    sumEl.textContent = "sum: " + result
}

function divide(){
    // sumEl.textContent = num1 / num2
    let result = num1 / num2
    sumEl.textContent = "sum: " + result

}

function multiply(){
    // sumEl.textContent = num1 * num2
    let result = num1 * num2
    sumEl.textContent = "sum: " + result
}