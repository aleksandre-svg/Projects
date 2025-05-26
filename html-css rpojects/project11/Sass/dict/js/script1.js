let label1 = document.getElementById("label1")

let label = document.getElementsByClassName("login")

let label0 = document.getElementById("label0")


label[0].addEventListener("click", function(){
    label[0].style = "transform: translateY(-500px);"
})

label1.addEventListener("click", function(){
    label1.style = "transform: scale(1);"
})

label0.addEventListener('click', function(){
    label0.style = "transform: scale(0.6);"
    label[0].style = "margin-top: 5px;"
})