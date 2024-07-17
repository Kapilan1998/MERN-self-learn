//normal function
// function displayAge(){
//     console.log("normal function is called");
// }
// displayAge();

// anonimous function
// let ageDisplay = function(){
//     console.log("anonimous function is called");
// }
// ageDisplay();

// arrow function
// let showAge=()=>console.log("arrow function is called");
// showAge();


// normal function
// function add(x,y){
//         return x+y;
// }
// console.log(add(4.25,92.156));

// anonimous function
// let v1=function(x, y) {
//         return x + y;
// }
// console.log(v1(524.25, -92.156));

// arrow function (   here if we put{} then we need to put return  )
// let v2 = (x, y) => {
//         return x + y;
// }
// console.log(v2(-24.25, 292.16));

//or else we can use like this also for this arrow function

// let v2 = (x, y) => x + y;
// console.log(v2(-24.25, 102.16));


// normal function
// function printFullName(fname,lname) {
//         let fullName=`My name is ${fname} ${lname}`;
//         console.log(fullName);
//   }
//   printFullName('Sriranjan',"Kapilan");


// anonimus function
// let f1=function(fname,lname) {
//         let fullName=`My name is ${fname} ${lname}`;
//         console.log(fullName);
//   }
//   f1('Sriranjan',"Kapilan");

// anonimus function
// let f2=(fname,lname)=> {
//         let fullName=`My name is ${fname} ${lname}`;
//         console.log(fullName);
//   }
//   f2('Sriranjan',"Kapilan");

//normal function
// function hello(name){
//         console.log(`I'm ${name}`);
// };
// hello('Edwin');

//anonimuous function
// let hello1= function(name){
//         console.log(`I'm ${name}`);
// }
// hello1('Edwin');

// arrow function
// let hello2=(name)=>{                            // here we are having only 1 parametr as input, so no need to put  like {name}, directly we can put like name
//         console.log(`I'm ${name}`);
// }
// hello2('Edwin Mose');

// let hello2=name=>{                            // here we are having only 1 parametr as input, so directly we can put like name
//         console.log(`I'm ${name}`);
// }
// hello2('Edwin Mose');


//IIFE function as normal function
// (function (){
//         console.log("Here IIFE function is executed");
// })();

//IIFE function as anonimous function
// (function(name){
//         console.log(`I'm ${name}`);
// })('Vetti Maran');

//IIFE function as arrow function
// (name=> {
//         console.log(`I'm ${name}`);
// })('Vetti Maran');


// setting default parameter value if initial value is not given
// function sayHi(name){
//         console.log(typeof name);
//         name=typeof name !== 'undefined'? name:"Maran";
//         console.log(name);
// }
// sayHi();
// sayHi("Amuku Dumuku"); 


// function sayHi(name="Kapilan"){
//         console.log(name);
// }
// sayHi();
// sayHi("Kajan"); 

let f3=(name="Kapilan")=>{
        console.log(name);
}
f3();
f3("Kajan"); 






