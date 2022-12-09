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