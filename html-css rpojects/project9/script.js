let answer = '0'
let added_answer = ''
function one() {
    if (answer==0 && answer!='0.') {
        answer='1'
    }
    else {
        answer+='1'
    }
    console.log(answer)
    document.getElementById('ans').innerHTML = String(answer)
}
function two() {
    if (answer==0 && answer!='0.') {
        answer='2'
    }
    else {
        answer+='2'
    }
    console.log(answer)
    document.getElementById('ans').innerHTML = String(answer)
}
function three() {
    if (answer==0 && answer!='0.') {
        answer='3'
    }
    else {
        answer+='3'
    }
    console.log(answer)
    document.getElementById('ans').innerHTML = String(answer)
}
function four() {
    if (answer==0 && answer!='0.') {
        answer='4'
    }
    else {
        answer+='4'
    }
    console.log(answer)
    document.getElementById('ans').innerHTML = String(answer)
}
function five() {
    if (answer==0 && answer!='0.') {
        answer='5'
    }
    else {
        answer+='5'
    }
    console.log(answer)
    document.getElementById('ans').innerHTML = String(answer)
}
function six() {
    if (answer==0 && answer!='0.') {
        answer='6'
    }
    else {
        answer+='6'
    }
    console.log(answer)
    document.getElementById('ans').innerHTML = String(answer)
}
function seven() {
    if (answer==0 && answer!='0.') {
        answer='7'
    }
    else {
        answer+='7'
    }
    console.log(answer)
    document.getElementById('ans').innerHTML = String(answer)
}
function eight() {
    if (answer==0 && answer!='0.') {
        answer='8'
    }
    else {
        answer+='8'
    }
    console.log(answer)
    document.getElementById('ans').innerHTML = String(answer)
}
function nine() {
    if (answer==0 && answer!='0.') {
        answer='9'
    }
    else {
        answer+='9'
    }
    console.log(answer)
    document.getElementById('ans').innerHTML = String(answer)
}
function zero() {
    if (answer==0 && answer!='0.') {
        answer='0'
    }
    else {
        answer+='0'
    }
    console.log(answer)
    document.getElementById('ans').innerHTML = String(answer)
}
function cleared() {
    answer='0'
    console.log(answer)
    document.getElementById('ans').innerHTML = String(answer)
}
function plus(){
    if (answer[answer.length-1]!='+' && answer[answer.length-1]!='-' && answer[answer.length-1]!='%' && answer[answer.length-1]!='/'&& answer[answer.length-1]!='X'&& answer[answer.length-1]!='%'&& answer[answer.length-1]!='^'&& answer[answer.length-1]!='.') {
        answer+='+'
        document.getElementById('ans').innerHTML = String(answer)
    }
}
function mult(){
    if (answer[answer.length-1]!='+' && answer[answer.length-1]!='-' && answer[answer.length-1]!='%' && answer[answer.length-1]!='/'&& answer[answer.length-1]!='X'&& answer[answer.length-1]!='%'&& answer[answer.length-1]!='^'&& answer[answer.length-1]!='.') {
        answer+='X'
        document.getElementById('ans').innerHTML = String(answer)
    }
}
function minus(){
    if (answer[answer.length-1]!='+' && answer[answer.length-1]!='-' && answer[answer.length-1]!='%' && answer[answer.length-1]!='/'&& answer[answer.length-1]!='X'&& answer[answer.length-1]!='%'&& answer[answer.length-1]!='^'&& answer[answer.length-1]!='.') {
        answer+='-'
        document.getElementById('ans').innerHTML = String(answer)
    }
}
function divide(){
    if (answer[answer.length-1]!='+' && answer[answer.length-1]!='-' && answer[answer.length-1]!='%' && answer[answer.length-1]!='/'&& answer[answer.length-1]!='X'&& answer[answer.length-1]!='%'&& answer[answer.length-1]!='^'&& answer[answer.length-1]!='.') {
        answer+='/'
        document.getElementById('ans').innerHTML = String(answer)
    }
}
function prec(){
    if (answer[answer.length-1]!='+' && answer[answer.length-1]!='-' && answer[answer.length-1]!='%' && answer[answer.length-1]!='/'&& answer[answer.length-1]!='X'&& answer[answer.length-1]!='%'&& answer[answer.length-1]!='^'&& answer[answer.length-1]!='.') {
        answer+='%'
        document.getElementById('ans').innerHTML = String(answer)
    }
}
function squ(){
    if (answer[answer.length-1]!='+' && answer[answer.length-1]!='-' && answer[answer.length-1]!='%' && answer[answer.length-1]!='/'&& answer[answer.length-1]!='X'&& answer[answer.length-1]!='%'&& answer[answer.length-1]!='^'&& answer[answer.length-1]!='.') {
        answer+='^'
        document.getElementById('ans').innerHTML = String(answer)
    }
}
function point(){
    let varia = false
    for (let element of answer){
        if (element==='.'){
            varia=true
        }
    }
    if (answer[answer.length-1]!='+' && answer[answer.length-1]!='-' && answer[answer.length-1]!='%' && answer[answer.length-1]!='/'&& answer[answer.length-1]!='X'&& answer[answer.length-1]!='%'&& answer[answer.length-1]!='^'&& answer[answer.length-1]!='.'&&varia===false) {
        answer+='.'
        document.getElementById('ans').innerHTML = String(answer)
    }
}
function opp(){
    if (answer!='0' && answer[0]!='-'){
        answer='-'+answer
        document.getElementById('ans').innerHTML = String(answer)
    }
    else if (answer!='0' && answer[0]=='-'){
        answer = answer.replace('-', '')
        document.getElementById('ans').innerHTML = String(answer)
    }
}
function calculateExpression() {
    const tokens = answer.split(/(\+|\-|\%|\/|X|\^)/);

    if (tokens.length === 0) document.getElementById('ans').innerHTML = String(answer); 

    let result = Number(tokens[0]); 

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNumber = Number(tokens[i + 1]);

        if (operator === '+') {
            result += nextNumber;
            result = Math.round(result * 1e10) / 1e10;
            answer=String(result)
            document.getElementById('ans').innerHTML = String(answer); 
        } else if (operator === '-') {
            result -= nextNumber;
            result = Math.round(result * 1e10) / 1e10;
            answer=String(result)
            document.getElementById('ans').innerHTML = String(answer); 
        } else if (operator === '%') {
            result = (result / 100) * nextNumber;
            result = Math.round(result * 1e10) / 1e10;
            answer = String(result);
            document.getElementById('ans').innerHTML = String(answer);
        } else if (operator === '/') {
            result /= nextNumber;
            result = Math.round(result * 1e10) / 1e10;
            answer=String(result)
            document.getElementById('ans').innerHTML = String(answer); 
        } else if (operator === 'X') {
            result *= nextNumber;
            result = Math.round(result * 1e10) / 1e10;
            answer=String(result)
            document.getElementById('ans').innerHTML = String(answer);
        } else if (operator === '^') {
            result **= nextNumber;
            result = Math.round(result * 1e10) / 1e10;
            answer=String(result)
            document.getElementById('ans').innerHTML = String(answer);
        } else {
            console.error(`Unknown operator: ${operator}`);document.getElementById('ans').innerHTML = String(answer);
        }
    };document.getElementById('ans').innerHTML = String(answer)
}