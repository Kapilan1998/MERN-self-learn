
// export all items one by one (case 1)
/*
export let name="Kapilan";

export function displayage(){
   console.log('function is calling');
}

export class Student{
constructor(id,name){
   this.id = id;
   this.name=name;
}

show(){
   console.log(`I am ${this.name} and my id is ${this.id}`);
}
}
*/

// export all items in sigle export ( case 2)
/*
let name="Kapilan";

 function displayage(){
   console.log('function is calling');
}

 class Student{
constructor(id,name){
   this.id = id;
   this.name=name;
}

show(){
   console.log(`I am ${this.name} and my id is ${this.id}`);
}
}

export {name,displayage,Student};
*/

// export with 1 default (case 3)
/*
export let name="Kapilan";

export  default function displayage(){
    console.log('function is calling');
 }

 export class Student{
constructor(id,name){
    this.id = id;
    this.name=name;
}

show(){
    console.log(`I am ${this.name} and my id is ${this.id}`);
}
 }
*/

// export all in single export and import * (case 4)
// (case 5) - rename when using
/*
let name = "Kapilan";

function displayage() {
    console.log('age function is calling');
}

function displayDistrict() {
    console.log('district function is calling');
}

class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    show() {
        console.log(`I am ${this.name} and my id is ${this.id}`);
    }
}

export default class Employee{
constructor(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}

displayAllDetails(){
    console.log(` Employee name :- ${this.name} , id :- ${this.id} , salry :- ${this.salary}`);
}
}


export {name,displayage,Student,displayDistrict};
*/


// case 6  (treeExport = import from other file)
import { country } from "./treeExport.js"; // import from treeExport.js and going to export this
let name = "Kapilan";

function displayage() {
    console.log('age function is calling');
}

function displayDistrict() {
    console.log('district function is calling');
}

class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    show() {
        console.log(`I am ${this.name} and my id is ${this.id}`);
    }
}

export default class Employee{
constructor(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}

displayAllDetails(){
    console.log(` Employee name :- ${this.name} , id :- ${this.id} , salry :- ${this.salary}`);
}
}

let showCountry = ()=>console.log(`i am from ${country}`);

export {name,displayage,Student,displayDistrict,country,showCountry};

