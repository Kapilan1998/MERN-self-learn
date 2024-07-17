 /*
 // in constructors this should be used and new key word used to convert as object
function Student(fname,lname){
this.fname= fname;
this.lname= lname;

this.displayfullName = function(){
    console.log(`my name is ${this.fname} ${lname}`);
    // return "fcfc";
}
}

let student1=new Student('David','Warner');
console.log(student1);
console.log("calling key  = "+student1.displayfullName);
console.log("calling function  = "+student1.displayfullName());     // in case not returning anything
student1.displayfullName();

*/

    // check to arrow function
    /*
function Student(fname, lname) {
    this.fname = fname;
    this.lname = lname;

    this.displayfullName = () =>{
        console.log(`my name is ${this.fname} ${lname}`);   // inside constructor function only, 'this' is working inside arrow function otherwise won't work inside arrow function
    }
}

let student1 = new Student('David', 'Warner');
console.log(student1);
// console.log("calling key  = " + student1.displayfullName);
// console.log("calling function  = " + student1.displayfullName());
student1.displayfullName();

student1.display1 = function (){
    console.log(` display1 = my name is ${this.fname} ${this.lname}`);
}
student1.display2 =  () =>{
    console.log(`display2 = my name is ${this.fname} ${this.lname}`);
}

student1.display1();
student1.display2();

*/


        //check new is put or nor to create object
// function Student(fname, lname) {

//     if(!new.target){
//         return new Student(fname,lname);
//     }

//     this.fname = fname;
//     this.lname = lname;

//     this.displayfullName = () =>{
//         console.log(`my name is ${this.fname} ${lname}`);   // inside constructor function only, 'this' is working inside arrow function otherwise won't work inside arrow function
//     }
// }
// let student1 = Student('Steve', 'Smith');       // here new is not used like (new Student('Steve', 'Smith'))
// console.log(student1);
