// document.getElementById("count-el").innerText = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(saveEl)

let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}
// function decrement() {
//     count = count - 1
//     countEl.textContent = count
// }
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count=0
}
console.log("Let's count people in Subway!!!")