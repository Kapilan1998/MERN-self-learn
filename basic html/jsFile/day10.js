let obj = {
    fname: "Sriranjan",
    lname: "Kapilan",
    age: 25
};


// console.log(obj);
// console.log(obj.fname);     // accesing function
// obj.gender="male";      // add new property to function
// console.log(obj);
// console.log(obj.gender); 

// delete obj.age;     // delete proprty
// console.log(obj);

// obj.lname="hello";  // update property
// console.log(obj);



// let student = {
//     "first name": "amuku",
//     lname: "dumuku",
//     age: 25
// };
// console.log(student["first name"]);


// let key = prompt("Enter name","fname");
// let customer= {
// [key]: "janani"
// };
// console.log(customer[key]);


// let key = prompt("please enter your name");
// let value=prompt("Enter age");
// let student1={};
// student1[key] = value;
// console.log(student1);
// console.log(student1[key]);


// function createStudent(){

//     return {
//         firstName:"Kapilan",
//         lastName:"Sriranjan",
//         district:"Jaffna"
//     }
// }
// console.log(createStudent());


// function createStudent1(firstName,lastName,district){

//     return {
//         firstName:firstName,
//         lastName:lastName,
//         district:district
//     }
// }
// console.log(createStudent1("Amuku","dumuku","university"));



// function createStudent2(firstName,lastName,district){

//     return {
//         firstName,
//         lastName,
//        district
//     }
// }
// console.log(createStudent2("praveena","vicky","galle"));
// console.log(createStudent2("mathu","dinusan","badulla"));



// destructing object method 1
const movie ={
    actor:"Vijay",
    actress:"Trisha",
    director:"Lokesh",
    name:"Leo"
}

const {actor,actress}= movie;
console.log(actor, "  ",actress);
const {director :myDirector, name:myName}= movie;
console.log(myDirector, "  ", myName);

// destructing object method 2

function displayMovieName({name}){
    return name;
}
console.log(displayMovieName(movie));