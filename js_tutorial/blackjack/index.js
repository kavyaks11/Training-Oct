let firstCard = 9
let secondCard = 5
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard 
let hasBlackJack = false

let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEL = document.getElementById("cards-el")

function startGame() {
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

    // console.log(message)
    messageEl.textContent = message

}
function newCard(){
    console.log("Drawing  new card from the deck!")
    let card = 7
    sum += card

    cards.push(card)
    console.log(cards)
    renderGame()
}

// arrays and loop

let sentence = ["Hello", "my", "name", "is", "Kavya"]
let greetingEl = document.getElementById("greeting-el")

for(let i= 0 ; i < sentence.length ; i++){
    greetingEl.textContent += sentence[i] + " "
    
}


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


// Arrays -declaration

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


// counting in javascript

// for ( let count = 1; count < 11; count += 1){
//     console.log(count)
// }

// for (let i = 0; i <6; i +=1){
//     console.log(i)
// }

// for (i = 10; i < 101; i += 10){
//     console.log(i)
// }

let card = [7, 3, 9]

for( i = 0; i < card.length; i ++ ){
    console.log(card[i])
}

