// using arrow function
let add = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    document.getElementById('result').value = num1 + num2;
}

// using anonimous function
let subtract = function () {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    document.getElementById('result').value = num1 - num2;
}

//using IIFE function
let multiply= (function() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    document.getElementById('result').value = num1 * num2;
});

//using IIFE arrow function
let divide= (()=>{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    document.getElementById('result').value= num1/num2;
});