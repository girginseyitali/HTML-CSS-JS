
let myUrls = []

// Buttons
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")

//Areas
const inputElement = document.getElementById("input-el")
const ulElement = document.getElementById("ul-el")


let urlFromLocalStorage = JSON.parse(localStorage.getItem("myURL"))

if(urlFromLocalStorage){
    myUrls = urlFromLocalStorage
    renderURLs(myUrls)
}

inputBtn.addEventListener("click", function(){
    myUrls.push(inputElement.value)
    inputElement.value = ""

    localStorage.setItem("myURL", JSON.stringify(myUrls))

    renderURLs(myUrls)
    
})

function renderURLs(urls){
    let listItems = ""
    for (let i = 0; i < urls.length; i++) {
        listItems += `<li>
        <a target='_blank' href='${urls[i]}'>${urls[i]}</a>
        </li>
        `
    }
    ulElement.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myUrls = []
    renderURLs(myUrls)
})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myUrls.push(tabs[0].url)
        localStorage.setItem("myURL", JSON.stringify(myUrls))
        renderURLs(myUrls)
    }) 

    
})

