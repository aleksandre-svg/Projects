function rock(){
    let random1 = Math.floor(Math.random() * 3)
    if (random1 === 0){
        document.getElementById('result').innerHTML = "bot choosed rock, it's draw"
    }else if (random1 === 1){
        document.getElementById('result').innerHTML = 'bot choosed scissors, bot lost, you won'
    }else if (random1 === 2){
        document.getElementById('result').innerHTML = 'bot choosed paper, bot won, you lost'
    }
}
function scissors(){
    let random1 = Math.floor(Math.random() * 3)
    if (random1 === 0){
        document.getElementById('result').innerHTML = "bot choosed rock, bot won, you lost"
    }else if (random1 === 1){
        document.getElementById('result').innerHTML = "bot choosed scissors, it's draw"
    }else if (random1 === 2){
        document.getElementById('result').innerHTML = 'bot choosed paper, bot lost, you won'
    }
}

function paper(){
    let random1 = Math.floor(Math.random() * 3)
    if (random1 === 0){
        document.getElementById('result').innerHTML = "bot choosed rock, bot lost, you won"
    }else if (random1 === 1){
        document.getElementById('result').innerHTML = 'bot choosed scissors, bot won, you lost'
    }else if (random1 === 2){
        document.getElementById('result').innerHTML = "bot choosed paper, it's draw"
    }
}