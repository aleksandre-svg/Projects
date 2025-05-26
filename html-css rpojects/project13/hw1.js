let dice1ball1 = document.getElementById("dice1-ball1")
let dice1ball2 = document.getElementById("dice1-ball2")
let dice1ball3 = document.getElementById("dice1-ball3")
let dice1ball4 = document.getElementById("dice1-ball4")
let dice1ball5 = document.getElementById("dice1-ball5")
let dice1ball6 = document.getElementById("dice1-ball6")

let dice2ball1 = document.getElementById("dice2-ball1")
let dice2ball2 = document.getElementById("dice2-ball2")
let dice2ball3 = document.getElementById("dice2-ball3")
let dice2ball4 = document.getElementById("dice2-ball4")
let dice2ball5 = document.getElementById("dice2-ball5")
let dice2ball6 = document.getElementById("dice2-ball6")

let start = document.getElementById("start")

let score1 = document.getElementById("pl1score")
let score2 = document.getElementById("pl2score")

let won = document.getElementById("won")

let count1 = 0
let count2 = 0

start.addEventListener("click", function(e){
    let random1 = Math.floor(Math.random() * 6)+1
    let random2 = Math.floor(Math.random() * 6)+1
    switch(random1){
        case 1:
            dice1ball1.style.display = "flex"
            dice1ball2.style.display = "none"
            dice1ball3.style.display = "none"
            dice1ball4.style.display = "none"
            dice1ball5.style.display = "none"
            dice1ball6.style.display = "none"
            break
        case 2:
            dice1ball1.style.display = "flex"
            dice1ball2.style.display = "flex"
            dice1ball3.style.display = "none"
            dice1ball4.style.display = "none"
            dice1ball5.style.display = "none"
            dice1ball6.style.display = "none"
            break
        case 3:
            dice1ball1.style.display = "flex"
            dice1ball2.style.display = "flex"
            dice1ball3.style.display = "flex"
            dice1ball4.style.display = "none"
            dice1ball5.style.display = "none"
            dice1ball6.style.display = "none"
            break
        case 4:
            dice1ball1.style.display = "flex"
            dice1ball2.style.display = "flex"
            dice1ball3.style.display = "flex"
            dice1ball4.style.display = "flex"
            dice1ball5.style.display = "none"
            dice1ball6.style.display = "none"
            break
        case 5:
            dice1ball1.style.display = "flex"
            dice1ball2.style.display = "flex"
            dice1ball3.style.display = "flex"
            dice1ball4.style.display = "flex"
            dice1ball5.style.display = "flex"
            dice1ball6.style.display = "none"
            break
        case 6:
            dice1ball1.style.display = "flex"
            dice1ball2.style.display = "flex"
            dice1ball3.style.display = "flex"
            dice1ball4.style.display = "flex"
            dice1ball5.style.display = "flex"
            dice1ball6.style.display = "flex"
            break
        }
    switch(random2){
        case 1:
            dice2ball1.style.display = "flex"
            dice2ball2.style.display = "none"
            dice2ball3.style.display = "none"
            dice2ball4.style.display = "none"
            dice2ball5.style.display = "none"
            dice2ball6.style.display = "none"
            break
        case 2:
            dice2ball1.style.display = "flex"
            dice2ball2.style.display = "flex"
            dice2ball3.style.display = "none"
            dice2ball4.style.display = "none"
            dice2ball5.style.display = "none"
            dice2ball6.style.display = "none"
            break
        case 3:
            dice2ball1.style.display = "flex"
            dice2ball2.style.display = "flex"
            dice2ball3.style.display = "flex"
            dice2ball4.style.display = "none"
            dice2ball5.style.display = "none"
            dice2ball6.style.display = "none"
            break
        case 4:
            dice2ball1.style.display = "flex"
            dice2ball2.style.display = "flex"
            dice2ball3.style.display = "flex"
            dice2ball4.style.display = "flex"
            dice2ball5.style.display = "none"
            dice2ball6.style.display = "none"
            break
        case 5:
            dice2ball1.style.display = "flex"
            dice2ball2.style.display = "flex"
            dice2ball3.style.display = "flex"
            dice2ball4.style.display = "flex"
            dice2ball5.style.display = "flex"
            dice2ball6.style.display = "none"
            break
        case 6:
            dice2ball1.style.display = "flex"
            dice2ball2.style.display = "flex"
            dice2ball3.style.display = "flex"
            dice2ball4.style.display = "flex"
            dice2ball5.style.display = "flex"
            dice2ball6.style.display = "flex"
            break
    }
    if (random1 > random2){
        count1+=1
        score1.textContent = `Player 1 Scores ${count1}`
        won.textContent = "Player 1 Won"
    }else if (random2 > random1){
        count2+=1
        score2.textContent = `Player 1 Scores ${count2}`
        won.textContent = "Player 2 Won"
    }else {
        won.textContent = "draw"
    }
})