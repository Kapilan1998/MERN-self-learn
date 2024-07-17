document.getElementById("add").addEventListener("click",addNumbers);

function addNumbers(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    document.getElementById('result').value= num1+num2;
}


document.getElementById("subtract").addEventListener("click",subtractNumbers);

function subtractNumbers(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    document.getElementById('result').value= num1-num2;
}

document.getElementById("multiply").addEventListener("click",multiplyNumbers);

function multiplyNumbers(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    document.getElementById('result').value= num1*num2;
}


document.getElementById("divide").addEventListener("click",divideNumbers);

function divideNumbers(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    document.getElementById('result').value= num1/num2;
}