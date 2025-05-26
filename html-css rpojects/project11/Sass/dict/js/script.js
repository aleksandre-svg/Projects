let container = document.getElementsByClassName("container1")
let but = document.getElementById("arrow2")
let but1 = document.getElementById("arrow1")
let menu = document.getElementById("resp-menu")
let menu1 = document.getElementById("menu")
let close = document.getElementById("close")
let body = document.body
function changeAlign(){
    container[0].scrollBy({ left: 1100, behavior: "smooth" });
    but.style.display = 'none'
    but1.style.display = 'flex'
}

function changeAlign1(){
    container[0].scrollBy({ left: -1100, behavior: "smooth" });
    but1.style.display = 'none'
    but.style.display = 'flex'
}

function menu2(){
    menu.style.display = "block"
    body.style = 'background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))'
}

function close1(){
    menu.style.display = 'none'
    body.style = 'background: white'
}

but.addEventListener("click", changeAlign)
but1.addEventListener('click', changeAlign1)
menu1.addEventListener('click', menu2)
close.addEventListener('click', close1)