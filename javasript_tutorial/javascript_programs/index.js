let dateBtn = document.getElementById("date-btn")
let showDate = document.getElementById("show-date")
dateBtn.addEventListener("click", function(){
    showDate.innerHTML = Date()
})

let onBtn = document.getElementById("on-btn")
let offBtn = document.getElementById("off-btn")
let myImage = document.getElementById("my-image")

const imgs = [
    "img/on.webp",
    "img/off.png"
]

onBtn.addEventListener("click", function(){
    myImage.innerHTML = `<img id="my-image" src="${imgs[0]}">`
    console.log("clicked")
})
offBtn.addEventListener("click", function(){
    myImage.innerHTML = `<img id="my-image" src="${imgs[1]}">`
})


let styleBtn = document.getElementById("style-btn")

styleBtn.addEventListener("click", function(){
    styleBtn.style.fontSize='30px'
    styleBtn.style.color='red'
    styleBtn.style.display='none'
})

// let docBtn = document.getElementById("doc-btn")

// docBtn.addEventListener("click", function(){
//     docBtn.write(5 + 7)
// })


console.log(1 + 2 + "bfe")
console.log("asbf" + 2 + 4)

function multiply(n1, n2){
    return n1 * n2
}
console.log(multiply(2,5))

function toCelsius(farenheit){
    return(5 / 9) * (farenheit-32)
}
console.log(toCelsius(20))


let obj = document.getElementById("obj")

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 40,
    eyeColor: "black"
}
obj.innerHTML = person.firstName + " is " + person.age + " years old."
obj.innerHTML = person["firstName"] + " has " + person["eyeColor"] + " eye"

let escapeSeq = document.getElementById("escape")
escapeSeq.innerHTML =` "The six escape 
       </br>characters above were
 <br/> originally designed to control"`

console.log("The six escape \n charact\bers above \n were original\tly designed \f to control")

let strLength = document.getElementById("length")
let text = "The length property returns the length of the string"
strLength.innerHTML = "length of the string is " + text.length

let strextract = document.getElementById("extract")
let text1 = "Apple, Banana, Kiwi"
// let part = text1.slice(7, 13)
// let part = text1.slice(7)
let part = text1.slice(-12)
strextract.innerHTML = part

// String replace
let replaceBtn = document.getElementById("replace-btn")

replaceBtn.addEventListener("click", function(){
    let text2 = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text2.replace("microsoft", "W3Schools")

   console.log("clicked")
})

let replBtn = document.getElementById("repl-btn")
replBtn.addEventListener("click", function(){
    let text3 = document.getElementById("replace").innerHTML
    document.getElementById("replace").innerHTML = text3.replace(/Microsoft/g, "W3Schools")
})


let text4 = "I love cats. Cats are very easy to love. Cats are very popular."
text4 = text4.replaceAll("Cats","Dogs")
text4 = text4.replaceAll("cats","dogs")
document.getElementById("replace-all").innerHTML = text4