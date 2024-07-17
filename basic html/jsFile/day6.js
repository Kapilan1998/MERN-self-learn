// function printName(){
//     console.log('Hi i am kapilan');
// }
// printName();

// function printFullName( fname, lname){
//     console.log(`Welcome ${fname} ${lname}`);
// }
// printFullName("Sriranjan","Kapilan");

// function addNumbers(num1,num2,num3){
//     return num1+num2+num3;
// }

// let result = addNumbers(9,23.25,-1.025);
// console.log(result);



function mergeName(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;

    document.getElementById('show').innerHTML=`Your full name is ${fname} ${lname}`;
}