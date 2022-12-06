let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard 
let hasBlackJack = false

let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEL = document.getElementById("cards-el")

let player = {
    name: "Kavya",
    chips : 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){

    return Math.floor( Math.random()*13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
// let sumEl = document.querySelector("#sum-el")
// console.log(messageEl)

function renderGame(){
    // cardsEL.textContent = "Cards: " + firstCard + " " + secondCard
    // cardsEL.textContent = "Cards: " + cards[0] + " " + cards[1]
    cardsEL.textContent = "Cards: "
    for( let i = 0; i < cards.length; i++){
        cardsEL.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want ot draw a new card?"
    }  else if (sum === 21){
        message = "You have got Blackjack!"
        hasBlackJack = true
    }  else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

}
function newCard(){
    // console.log("Drawing  new card from the deck!")

    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}




// ARRAYS AND LOOP

// let sentence = ["Hello", "my", "name", "is", "Kavya"]
// let greetingEl = document.getElementById("greeting-el")

// for(let i= 0 ; i < sentence.length ; i++){
//     greetingEl.textContent += sentence[i] + " "
    
// }


// if (sum < 21){
//     console.log("Do you want to draw a new card?")
// } else if (sum === 21) {
//     console.log("Wohoo! You have got Blackjack!")
// }  else {
//     console.log("You are out of the game!")
// }


// console.log(hasBlackJack)
// console.log(isAlive)






// let age = 23

// if (age < 21){
//     console.log("you can not enter the club!")
// }  else {
//     console.log("Welcome!")
// }


// let age = 99

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100){
//     console.log("Here is your birthday card from the King!")
// }  else {
//     console.log("Not elegible, you have already gotten one")
// }


// ARRAYS DECLARATION

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]
// // console.log( featuredPosts[1] )
// console.log( featuredPosts.length )

// let experience = ["CEO at Scrimba","Frontend developer at Xeneta", "People counter for Norsat"]

// console.log( experience[1] )
// console.log( experience[2] )
// console.log( experience[0] )


// let kavya = ["Kavya",35, true ]
 
// // adding element to an array
// let card = [7, 4]
// card.push(2)
// console.log(card)

// let messages = [
//     "Hey, how's it going?",
//     "I'am great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]
// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages)


// messages.pop()
// console.log(messages)


// COUNTING IN JAVASCRIPT

// for ( let count = 1; count < 11; count += 1){
//     console.log(count)
// }

// for (let i = 0; i <6; i +=1){
//     console.log(i)
// }

// for (i = 10; i < 101; i += 10){
//     console.log(i)
// }

// let card = [7, 3, 9]

// for( i = 0; i < card.length; i ++ ){
//     console.log(card[i])
// }



// RETURNING VALUE FUNCTIONS//

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time){
//         return player1Time
//     } else if (player2Time < player1Time){
//         return player2Time
//     } else {
//         return player1Time
//     }
// }
// let getFastestRace = getFastestRaceTime()
// // console.log(getFastestRace)

// function getTotalRaceTime (){
//      return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()
// console.log(totalTime)


// GENERATING RANDOM NUMBER

// let randomNumber = Math.random() * 6
// console.log(randomNumber) 



// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)


// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 6) + 1
//     return randomNumber
// }
// console.log(rollDice())


// LOGICAL OPERATORS

let hasCompletedCourse = true
let givesCertificate = true

if(hasCompletedCourse === true && givesCertificate === true){
    generateCertificate()
}
function generateCertificate(){
    console.log("Generating certificate...")
}


let hasSolvrdChallenge = false
let hasHintsLeft = false

if(hasSolvrdChallenge === false && hasHintsLeft === false){
    showSolution()
}

function showSolution(){
    console.log("Showing the solution...")
}


let likesDocumentaries = false
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true){
      recommendMovie()
}

function recommendMovie(){
    console.log("Hey, checkout this new movie")
}

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course.length)

let castle = {
    title: "Live like a king in my Castle",
    price: 190,
    isSuperHost: true,
    
}
console.log(castle.title)
console.log(castle.price)  


// PRACTICE
// task1
let person = {
    name: "kavya",
    age: 23,
    country: "India"
}

function logData(){
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country) 
}
logData()

// task2

let age = 49

if (age < 6){
     console.log("free")
} else if (age < 18){
    console.log("child discount")
} else if (age < 27){
    console.log("student discount")
} else if (age < 67){
    console.log("full price")
} else{
    console.log("senior citizen discount")
}

// task3

// let largeCountries = ["China", "India","USA", "Indonesia","Pakistan"]

// console.log("The 5 largest countries in the world:")
// for( i = 0; i < largeCountries.length; i++){
//     console.log("-" + largeCountries[i])
// }

// task4

let largeCountries = ["Tuvalu", "India","USA", "Indonesia","Monaco"]



console.log("The 5 largest countries in the world:")
largeCountries.pop()

largeCountries.push("Pakistan")
// largeCountries.push("China")

largeCountries.shift("Tuvalu")
largeCountries.unshift("China")

console.log(largeCountries)

// task5

let dayOfMonth = 31
let weekday = "Friday"

if( dayOfMonth === 31 &&  weekday === "Friday"){
    console.log("😱")
}

// task6
 
let hands = ["rock", "paper", "scissor"]

function getHand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}
console.log( getHand()  )