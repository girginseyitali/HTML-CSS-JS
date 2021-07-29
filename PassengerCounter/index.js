
let count = 0
let countText = document.getElementById("count-text")
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    countText.innerText = count
}

function save(){
    let seperator = count + " - "
    saveEl.textContent += seperator
    count = 0
}