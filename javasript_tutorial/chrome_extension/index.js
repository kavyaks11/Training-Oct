// function  saveLead(){
//     console.log("Button clicked!")
// }
let myLeads = []
// let oldLeads = []


// storing array in local storage

// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)
// console.log(typeof myLeads)

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.lead2.com")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")




// localStorage.setItem("myLeads", "www.examplelead.com")

// console.log( localStorage.getItem("myLeads") )



// console.log(ulEl)

const deleteBtn = document.getElementById("delete-btn") 
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
// console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

tabBtn.addEventListener("click", function(){
    // console.log(tabs[0].url)
    // myLeads.push(tabs[0].url)
    // localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // render(myLeads)

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    })

  
})

function render(leads){
    let listItems = ""
    for( let i = 0; i < leads.length; i++){
        // listItems += "<li > <a href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
      

        // (TEMPLATE STRING)
        listItems += `
        <li>
             <a target='_blank' href='${leads[i]}'>
                 ${leads[i]}
             </a>
        </li> 
      `

    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)

    // console.log(localStorage.getItem("myLeads"))
})



//  let listItems = ""
// for( let i = 0; i < myLeads.length; i++){
//     // console.log(myLeads[i])
//     // ulEl.textContent += myLeads[i] + " "
//     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li"

//     // const li = document.createElement("li")
//     // li.textContent = myLeads[i]
//     // ulEl.append(li)
//     listItems += "<li>" + myLeads[i] + "</li>"
// }
// ulEl.innerHTML = listItems




// ADDEVENTLISTENER TASK

// let openBox = document.getElementById("box")
// openBox.addEventListener("click", function(){
//     console.log("I want to open the box!")
// })


// CONST TASK

// const basePrice = 520
// const discount = 120
// let ShippingCost = 12
// let shippingTime = "5-12 days"

// ShippingCost = 15
// shippingTime = "7-14 days"

// const fullPrice = basePrice - discount + ShippingCost

// console.log("Total cost: " + fullPrice + " It will arrive in " + shippingTime)


// INNERHTML TASK

// buyBtn = document.getElementById("container")

// buyBtn.innerHTML = "<button onclick='buy()'> Buy! </button>"
 
// function buy(){
//     buyBtn.innerHTML += "<p>Thank you for buying! </p>"
// }



// TEMPLATE STRINGS

// const recipient = "James"
// const sender = "Kavya"
// // const email = "Hey " + recipient + "! How is going? Cheers Per"
// const email = `
//      Hey ${recipient}!
//      How is going? 
//      Cheers ${sender}
//      `
// console.log(email)


// // LOCAL STORAGE

// // localStorage.setItem("mySite", "www.google.com")
// console.log(localStorage.getItem("mySite"))
// localStorage.clear()

// falsy value

// null

// let currentViewers = null
// currentViewers = ["jane","nick"]
// currentViewers = null

// if(currentViewers){
//     console.log("we have viewers")
// }
// undefine

// let currentViewers = {}
// console.log(currentViewers.randomKey)

// CHECK TRUE OR FALSE
// let trueOrFalse = Boolean("abc")
// console.log(trueOrFalse)

// console.log( Boolean(""))   //false
// console.log( Boolean("0"))  //true
// console.log( Boolean(100))  //true
// console.log( Boolean(null)) //false
// console.log( Boolean([0]))  //true
// console.log( Boolean(-0))   //false


// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(name){
//     welcomeEl.textContent = "welcome back, " + name 
// }
// greetUser("kavya")

// function greetUser(greeting){
//     welcomeEl.textContent = greeting + " kavya" + 👋
// }
// greetUser("hello")

// function greetUser(greeting, name, emoji){
//         //  welcomeEl.textContent = greeting + " " + name
//         welcomeEl.textContent = `
//         ${greeting}, ${name},${emoji} 
//         `
//     }
//      greetUser("Hello","Kavya", "👋")



// function add(num1, num2) {
//      return num1 + num2
// }   
// console.log(add(3, 5))
// console.log(add(12, 34))  


// function getFirst(arr){
//     return arr[0]
// }
// let firstCard = getFirst([9, 4, 7])
// console.log(firstCard)


// Practice tasks
// task1
// const player = "Per"
// const opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// points += 100
// hasWon = true
// if(hasWon) {
//     console.log(`${player} got ${points} points and won the ${game}`)
// } else{
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// }

// // task2
// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// function logItems(arr){
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// }
// logItems(myCourses)

// // task3

// // localStorage.setItem("myCredit", "100")
// let myCredits = localStorage.getItem("myCredit")
// console.log(myCredits)

// // task4

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//          player: "Mark",
//          score:41
//     }
// ]

// const scoreBtn = document.getElementById("score")
// scoreBtn.addEventListener("click", function(){
//     console.log(data[0])
// })

// // task5

// function generateSentence(desc, arr) {
//     let baseString = `The ${arr.length} ${desc} are `
//     const lastIndex = arr.length - 1
//     for(let i = 0; i < arr.length; i++){
//         if (i === lastIndex){
//             baseString += arr[i] 
//         } else {
//         baseString += arr[i] + ", "
//     }
// }
//     return baseString
// }
// const sentence = generateSentence("highest mountains", ["Mount Everest", "k2"])
// console.log(sentence)

// // task6
const imgs = [
    "img/img1.jpg",
    "img/img2.jpeg",
    "img/img3.jpeg"
]
const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++){
        // container.innerHTML += `<img class="team-img" src="${imgs[i]}">`
        imgsDOM +=`<img class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}
renderImages()


// FIND GREATEST OF THREE NUMBERS
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")

let number1 = 22
let number2 = 55
let number3 = 100
num1.textContent = "num1 : " + number1
num2.textContent = "num1 : " + number2
num3.textContent = "num1 : " + number3

let greatestNum = document.getElementById("greatest-num")
if (number1 > number2 && number1 > number3){

     greatestNum.textContent = number1 + " is greatest number"
} else if (number2 > number1 && number2 > number3){

     greatestNum.textContent = number2 + " is greatest number"
} else{
    console.log("num3 is greatest number")
     greatestNum.textContent = number3 + " is greatest number"
}



// PRIME NUMBERS

let num = document.getElementById("num")
let number = 21
num.textContent = "Number : " + number
let result = document.getElementById("result")

let a = 0
if(number <= 1){
    
    result.textContent = number + " is not a prime number"
} else{


   for(let i = 1; i <= number; i++){
        
        if (number % i === 0){
            a++      
    } 
}
// console.log(a)  

if(a < 3){
   
    result.textContent = number + " is  a prime number"
} else {

    result.textContent = number + " is not a prime number"
}
}



