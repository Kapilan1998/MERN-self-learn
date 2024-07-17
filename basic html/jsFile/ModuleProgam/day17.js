/*
import {name, displayage,Student} from './app.js'  // case 1 and case 2)

console.log(name);

displayage();

let stu1 = new Student(100,"Sutharsini");
stu1.show();
*/

/*
import displayage,{name,Student} from './app.js'  // (case 3)

console.log(name);

displayage();

let stu1 = new Student(100,"Sutharsini");
stu1.show();
*/

/*
import * as hello from './app.js'  // (case 4)

console.log(hello.name);

hello.displayage();
hello.displayDistrict();    // if this function defined as default then i need to call as hello.default();

let stu1 = new hello.Student(100, "Sutharsini");
stu1.show();

let emp1 = new hello.default(102, "Joseph", 12000);
emp1.displayAllDetails();
*/

// renaming imports using alias 'as' (for default export i can directly rename, can't use alias 'as' keyword)  (case 5)
/*
import RenamedEmployee ,{name as newName, displayage as newDisplayage, Student as newStudent} from "./app.js";

console.log(newName);
newDisplayage()
let stu1 = new newStudent("145","Priya");
stu1.show();

let e1 = new RenamedEmployee(123,"Kannan",78555);
e1.displayAllDetails();
*/

// case 6
import RenamedEmployee ,{name as newName, displayage as newDisplayage, Student as newStudent,country, showCountry} from "./app.js";

console.log(newName);
newDisplayage()
let stu1 = new newStudent("145","Priya");
stu1.show();

let e1 = new RenamedEmployee(123,"Kannan",78555);
e1.displayAllDetails();

console.log("country is :- "+country);
showCountry();