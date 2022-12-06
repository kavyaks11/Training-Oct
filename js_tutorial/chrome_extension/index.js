// function  saveLead(){
//     console.log("Button clicked!")
// }
let myLeads = []
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")
console.log(ulEl)

inputBtn.addEventListener("click", function() {
    
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})


function renderLeads(){
    let listItems = ""
    for( let i = 0; i < myLeads.length; i++){
        // listItems += "<li> <a href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems +=
        <li>
             <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]}</a>
        </li>

    }
    ulEl.innerHTML = listItems
}

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

const basePrice = 520
const discount = 120
let ShippingCost = 12
let shippingTime = "5-12 days"

ShippingCost = 15
shippingTime = "7-14 days"

const fullPrice = basePrice - discount + ShippingCost

console.log("Total cost: " + fullPrice + " It will arrive in " + shippingTime)


// INNERHTML TASK

// buyBtn = document.getElementById("container")

// buyBtn.innerHTML = "<button onclick='buy()'> Buy! </button>"
 
// function buy(){
//     buyBtn.innerHTML += "<p>Thank you for buying! </p>"
// }

