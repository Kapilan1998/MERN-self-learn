
// old method ( before ES6)
// function Student(){
//     this.fname="Kumar";
//     this.lname="Sangakkara";
// }

/*
// new methidod (after ES6)
//here if i create object and without constructors , the final result to all object is same eventhogh multiple objects exist
class Student{
    fname="Kumar";
    lname="Sangakkara";

}
let stu1 = new Student();
let stu2 = new Student();
console.log(stu1);
console.log(stu2);
*/

// here constructor is used and multiple objects is initialized with different arguments
/*

class Student{
constructor(fname,lname){
    this.firstName=fname;        // if this is not used value will not assign
    this.lastName=lname;
}

getFullName1(){
    console.log(`Normal function = I am ${this.firstName} ${this.lastName}`);   // in this.firstName if this not used before firstName ,it will show error as firstName is not defined
}
getFullName2=()=>{
    console.log(`arrow function = I am ${this.firstName} ${this.lastName}`);        // in this.firstName if this not used before firstName ,it will show error as firstName is not defined
}
}
let stu1 = new Student("Jos","Buttler");
let stu2 = new Student("Wanindu","Hasaranga");
// console.log(stu1);      // Student {firstName: 'Jos', lastName: 'Buttler'}
// console.log(stu2);
stu1.getFullName1();
stu2.getFullName2();

stu1.showDetail= function(){
    console.log(`Normal function outside class = I am ${this.firstName} ${this.lastName}`);
}
stu1.showDetail();

stu2.showDetailArrowFunction= ()=>{
    console.log(`arrow function outside class = I am ${this.firstName} ${this.lastName}`);     // arrow function outside class , so can't assign values
}
stu2.showDetailArrowFunction();

*/

// introduction of static variable
class Student{
   static noOfStudents = 0;
    constructor(fname,lname){
        this.firstName=fname;        // if this is not used value will not assign
        this.lastName=lname;
        Student.noOfStudents +=1;
    }
    
    getFullName1(){
        console.log(`Normal function = I am ${this.firstName} ${this.lastName}`);   // in this.firstName if this not used before firstName ,it will show error as firstName is not defined
    }
    getFullName2=()=>{
        console.log(`arrow function = I am ${this.firstName} ${this.lastName}`);        // in this.firstName if this not used before firstName ,it will show error as firstName is not defined
    }

    static displayStaticMethod(){
        console.log(`here static method is accessed`);
    }
    }

    let stu1 = new Student("Jos","Buttler");
    let stu2 = new Student("Wanindu","Hasaranga");
    let stu3 = new Student("Kane","Williamson");
    let stu4 = new Student("Sachin","Tendulkar");

    console.log(Student.noOfStudents + " objects created");
    Student.displayStaticMethod();