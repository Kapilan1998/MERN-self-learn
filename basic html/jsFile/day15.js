// without getter setters , i used normal function as usual to display
/*
class Student{

    setName(name){
this.name=name;
    }

    getName(){
        console.log(this.name);
    }
}

let stu1= new Student();
stu1.setName("Amuku dumuku");
stu1.getName();
*/

/*
class Student {

    set setName(name1) {      // this is setter so atleast 1 parameter need to pass
        this.name ="Hi "+ name1;
    }

    get getName() {
        return "my name is "+this.name;
    }
}

let stu1 = new Student();
stu1.setName = "Amaal Dumaal";
console.log(stu1.getName);
stu1.name="kapilan";        // here directly accessing from outside, but it is not good
console.log(stu1.getName);
*/


// private variable declaration
/*
class Student {

    #name="abc";       // private variable (#name="")
    set setName(name1) {      // this is setter so atleast 1 parameter need to pass
        this.#name ="Hi "+ name1;
    }

    get getName() {
        return "my name is "+this.#name;
    }
}

let stu1 = new Student();
stu1.setName = "Amaal Dumaal";  // here if i didn't set any name it will take default name 'abc'
console.log(stu1.getName);
// stu1.name="kapilan";        // private , so can't access
// console.log(stu1.getName);
*/

//private method
/*
class Student {

#name="abc";       // private variable (#name="") 
#mySalary ='';
set setName(name1) {      // this is setter so atleast 1 parameter need to pass
this.#name ="Hi "+ name1;
}

get getName() {
return "my name is "+this.#name;
}

set salary(salaryAmount){
this.#mySalary=salaryAmount;
}
get salary(){
return this.#mySalary;
}

#displaySalary(){
return `my salary = ${this.#mySalary}`;
}

print(){
console.log("1 "+this.#displaySalary());
console.log("2 "+this.#name);
}
}

let stu1 = new Student();
stu1.setName = "Ajmal";  // here if i didn't set any name it will take default name 'abc'
console.log(stu1.getName);
// stu1.name="kapilan";        // private , so can't access
// console.log(stu1.getName);
stu1.salary=4500;
stu1.print();
*/

        // static private
class Human {

    static #name="abc";       // private variable (#name="") 
    static #mySalary ='';
    set setName(name1) {      // this is setter so atleast 1 parameter need to pass
    Human.#name ="Hi "+ name1;
    }
    
    get getName() {
    return "my name is "+Human.#name;
    }
    
    set salary(salaryAmount){
        Human.#mySalary=salaryAmount;
    }
    get salary(){
    // return `${Human.#mySalary}` ;
    console.log(Human.#mySalary);
    }
    
    static #displaySalary(){
    return `my salary = ${Human.#mySalary}`;
    }
    
    static print(){                             // if static method, then must include only static variable and static methods
    console.log("1 "+Human.#displaySalary());
    console.log("2 "+Human.#name);
    }

    }
    
    let stu1 = new Human();
    stu1.setName = "Ajmal";  // here if i didn't set any name it will take default name 'abc'
    console.log(stu1.getName);
    // stu1.name="kapilan";        // private , so can't access
    // console.log(stu1.getName);
    stu1.salary=4500;
    stu1.salary;
    Human.print;
    // console.log(`hhhhh   ${stu1.#name}`);       // can't access private 


