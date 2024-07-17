/*

let student={
    fname:"Sriranjan",
    lname:"Kapilan",
    age:25
}
console.log(student);

function messageDisplay(){
    console.log(`this is my messageDisplay function`);
}
student.messageDisplayNewKey=messageDisplay;    // messageDisplay function not returning anything so don't call like messageDisplay()
console.log(student);

// function messageDisplayReturn(){
//     console.log(`this is my messageDisplayReturn function`);
// }
// student.messageDisplayNewKey=messageDisplayReturn(); // messageDisplayReturn not returnining any
// console.log(student);

// function messageDisplayReturnSome(){
//     console.log(`this is my messageDisplayReturnSome function`);
//     return 502;
// }
// student.messageDisplayNewKey=messageDisplayReturnSome(); // messageDisplayReturn returnining value
// console.log(student);

student.messageDisplayNewKey();

*/

/*

let student={
    fname:"Sriranjan",
    lname:"Kapilan",
    age:25
}
student.fullName=function(){
    console.log(`this is new function`);
}
student.fullName();
console.log(student);  

*/

/*

let student={
    fname:"Sriranjan",
    lname:"Kapilan",
    age:25,
    fullName:function(){
        console.log(`this is new function`);
    }
}

student.fullName();
console.log(student);  

*/

/*

let student={
    fname:"Sriranjan",
    lname:"Kapilan",
    age:25,
    fullName:()=>{
        console.log(`this is new function`);
    }
}

student.fullName();
console.log(student);

*/

/*

let student={
    fname:"Sriranjan",
    lname:"Kapilan",
    age:25,
    fullName:()=> console.log(`this is new function`)
}

student.fullName();
console.log(student);

*/

/*

let student={
    fname:"Sriranjan",
    lname:"Kapilan",
    age:25,
    fullName(){
        console.log(`this is new function`);
    }
}

student.fullName();
console.log(student);

*/

/*

let student={
    fname:"Sriranjan",
    lname:"Kapilan",
    age:25,
    fullName:function(){
        console.log(`my full name is ${this.fname} ${this.lname}`);     // this used to aceess variable inside function
    }
}

student.fullName();
console.log(student);

*/

        // inside arrow function this don't work
// let student={
//     fname:"Sriranjan",
//     lname:"Kapilan",
//     age:25,
//     fullName:()=>{
//         console.log(`my full name is ${this.fname} ${this.lname}`);     // inside arrow function this don't work
//     }
// }

// student.fullName();
// console.log(student);

/*

        // if i need to access global variable inside function , i need to use arrow function and var declaration variable
var fname="Edwin";
var lname="Lewis";
console.log(this);

let student={
    fname:"Lasith",
    lname:"Malinga",
    age:25,
    fullName:()=>{
        console.log(`my full name is ${fname} ${this.lname}`);     // in this arrow function ,eventhough this is used or not here global variable is accessed not local variable(variable inside function)
    },
    fullName2:function(){
        console.log(`normal function = my full name is ${fname} ${this.lname}`);     // in this normal function ,if this is used local variable(variable inside function) is access and if this is not used global variable is accessed
    }
}

student.fullName();
student.fullName2();
console.log(student);
*/


        // here let variable decalaration and checking this inside arrow function
let fname="Edwin";
let lname="Lewis";
console.log(this);

let student={
    fname:"Vetti",
    lname:"Maran",
    age:25,
    fullName1:()=>{
// in this arrow function if 'this' is used local variable(variable inside function) is acces and not display anything (display undefined)
// if this is not used inside arrow function global variable is accessed
        console.log(`arrow function 1 => my full name is ${fname} ${this.lname}`);     
        console.log(`arrow function 2 = my full name is ${window.fname} ${this.lname}`);     // in this normal function ,if this is used local variable(variable inside function) is access and if this is not used global variable is accessed and window.fname = fname
    },
    fullName2:function(){
        console.log(`normal function 1 = my full name is ${fname} ${this.lname}`);     // in this normal function ,if this is used local variable(variable inside function) is access and if this is not used global variable is accessed
        console.log(`normal function 2 = my full name is ${window.fname} ${this.lname}`);     // in this normal function ,if this is used local variable(variable inside function) is access and if this is not used global variable is accessed and window.fname = fname
    }

}

student.fullName1();
student.fullName2();
console.log(student);




// window.alert("tgetg");
// alert("tgetg");




