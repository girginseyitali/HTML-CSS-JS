
let cards = []
let sum = 0
let hasWon = false
let isAlive = false
let message = ""

// Elements
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


// Player Object to store the player name and player points
let player = {
    name:"Seyit Ali",
    points: 0
}

//Initialize the players name and points text
playerEl.textContent = player.name + "'s Points: " + player.points


function startGame(){
    isAlive = true
    hasWon = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    player.points = 0
    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

function renderGame(){
    if (sum <= 29) {
        message = "Do you want to draw a new card?"
    }else if(sum === 30){
        message = "Wohooo! You've WON!"
        hasWon = true
        player.points += 10
    }else {
        message = "You're out of the game!"
        isAlive = false
        player.points -= 10
    }
    messageEl.innerText = message
    sumEl.innerText = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for (let i =0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    playerEl.textContent = player.name + "'s Points: " + player.points
}

function newCard(){
    if(isAlive === true && hasWon === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}