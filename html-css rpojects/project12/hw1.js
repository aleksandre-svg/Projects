let shopcard = document.getElementById("shopcart")
let card = []
let count = 0
let totalPrice = 0
document.addEventListener("click", function(e){
    if (e.target.textContent == "Add to Cart"){
        card.push({price: e.target.parentElement.querySelector("span").textContent, name : e.target.parentElement.querySelector("a").textContent, imgSrc : e.target.parentElement.parentElement.parentElement.querySelector(".face1").querySelector(".content").querySelector(".icon").querySelector("img").src})
        shopcard.innerHTML += `<div class="card1"><img src="${card[count].imgSrc}" alt=""><div class="content1"><h1>Name: <span>${card[count].name}</span></h1><h1>Price: $<span id="price1">${card[count].price}</span></h1></div><button>delete</button></div>`
        count++
        let amount = document.getElementById("am")
        let total = document.getElementById("to")
        amount.textContent = `Amount: ${count}`
        totalPrice += Number(e.target.parentElement.querySelector("span").textContent)
        total.textContent = `Total: ${totalPrice}$`
    }else if (e.target.textContent == "delete"){
        let amount = document.getElementById("am")
        let total = document.getElementById("to")
        e.target.parentElement.remove()
        count--
        amount.textContent = `Amount: ${count}`
        totalPrice -= Number(e.target.parentElement.querySelector(".content1").querySelector("#price1").textContent)
        total.textContent = `Total: ${totalPrice}$`
    }else if (e.target.id == "closebut"){
        shopcard.style.transform = "translate(400px)"
        document.querySelector(".container").style = "max-width: 100%;"
    }else if (e.target.id == "cart"){
        shopcard.style.transform = "translate(0%)"
        document.querySelector(".container").style = "max-width: 1320px;"
    }
})