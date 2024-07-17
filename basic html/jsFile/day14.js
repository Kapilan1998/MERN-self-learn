//without inheritence (common things are in both class)
/*
class Student{
    id=100;
    name="Raja";

    setMarks(mark1,mark2){
this.mark1 = mark1;
this.mark2=mark2;
    }

    display(){
console.log(`student name ${this.name}`);
    }
}

class Employee{
    id= 250;
    name="Vimal";

    setBasicSalary(){
        this.basicSalary= this.basicSalary;
    }
display(){
    console.log(`employee name ${this.name}`);
}
}


let emp1 = new Employee();
emp1.display();

let stu1= new Student();
stu1.display();
*/


// using inheritence  (put id which is common to both child class , so id is put inside parent class)
/* 
class Person{
    id=300;
}

class Student extends Person{
    name="Raja";

    setMarks(mark1,mark2){
this.mark1 = mark1;
this.mark2=mark2;
    }

    display(){
console.log(`student name ${this.name}`);
    }
}

class Employee extends Person{
    name="Vimal";

    setBasicSalary(){
        this.basicSalary= this.basicSalary;
    }
display(){
    console.log(`employee name ${this.name}`);
}
}


let emp1 = new Employee();
console.log(`Employee id = ${emp1.id}`);

let stu1= new Student();
console.log(` student id = ${stu1.id} `);
*/


// setting value to id, name which is common in both child 
/*
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Student extends Person {
    constructor(id, name) {
        super(id, name);
    }
    setMarks(mark1, mark2) {
        this.mark1 = mark1;
        this.mark2 = mark2;
    }

    display() {
        console.log(`Here student name is ${this.name}`);
    }
}

class Employee extends Person {

    constructor(id, name) {
        super(id, name);
    }
    setBasicSalary() {
        this.basicSalary = this.basicSalary;
    }
    display() {
        console.log(`employee name ${this.name}`);
    }
}


let emp1 = new Employee();
emp1.id = 501;
emp1.name = "Priya"
console.log(`Employee id = ${emp1.id}`);
console.log(`Employee name = ${emp1.name}`);

let stu1 = new Student();
stu1.id = 502;
stu1.name = "Vaishnavy";
console.log(` student id = ${stu1.id} `);
console.log(` student name = ${stu1.name} `);
stu1.display();
*/

        // putting commong function display() inside child
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    display(msg) {
        console.log(`${msg} name ${this.name}`);
    }
}

class Student extends Person {
    constructor(id, name) {
        super(id, name);
        this.age=14;
    }
    setMarks(mark1, mark2) {
        this.mark1 = mark1;
        this.mark2 = mark2;
    }

    displayAll(){
        console.log(` Hi ${this.name} of ${this.id} , your age is ${this.age}`);
    }

}

class Employee extends Person {

    constructor(id, name) {
        super(id, name);
    }
    setBasicSalary() {
        this.basicSalary = this.basicSalary;
    }
   
}


let emp1 = new Employee();
emp1.id = 501;
emp1.name = "Priya"
console.log(`Employee id = ${emp1.id}`);
console.log(`Employee name = ${emp1.name}`);

let stu1 = new Student();
stu1.id = 502;
stu1.name = "Vaishnavy";
console.log(` student id = ${stu1.id} `);
console.log(` student name = ${stu1.name} `);
stu1.display("student");
stu1.displayAll();
