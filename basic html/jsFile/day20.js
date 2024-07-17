// objects inside array
let student =[
    {name:"Malinga",city:"galle",age:42},
    {name:"Bumrah",city:"mumbai",age:34},
    {name:"Buttler",city:"london",age:39}
];


// gives first index data only
/*
let [{name,city,age}] = student;
console.log(name);  // Malinga
console.log(city);  //galle
console.log(age);   //42
*/

//takes any value
/*
let [name,city,age] =student;
console.log(name);          // {name: 'Malinga', city: 'galle', age: 42}
console.log(name.name);     // Malinga
console.log(city);          // {name: 'Bumrah', city: 'mumbai', age: 34}
console.log(age);           //{name: 'Buttler', city: 'london', age: 39}
console.log(age.city);      // london
*/

// takes any value ( here i used alias because without alias it will give error as same variable declarartion )
/*
let [{name:f1,city:f2,age:f3},{name:f4,city:f5,age:f6},{name:f7,city:f8,age:f9}] = student;
console.log(f1);        //Malinga
console.log(f2);        //galle
console.log(f3);        //42
console.log(f4);        //Bumrah
console.log(f5);        //mumbai
console.log(f6);        //34
console.log(f7);        //buttler
console.log(f8);        //london
console.log(f9);        //39
*/


// array inside object
let office= {
    codelantic:["jaffna",80000,"shassevan"],
    acentura:["colombo",120000,"Haritha",false],
    bcs:[undefined,150000,"Faiz"],
    applexues:["chennai",175000,"Anojan"]
};

/*
let {codelantic,acentura} = office;
console.log(codelantic);        // (3) ['jaffna', 80000, 'shassevan']
console.log(acentura);          //(4) ['colombo', 120000, 'Haritha', false]
*/
/*
let {codelantic:[place,salary,owner], acentura:[city,basicSalary,ownerName,hasWFH]} = office
console.log(place);
console.log(salary);
console.log(owner);
console.log(city);
console.log(basicSalary);
console.log(ownerName);
console.log(hasWFH);
*/

let {bcs:[placesituated="australia",money,director,givingLaptop=true],applexues,acentura:[value1,,,value4,value5="Amuku Dumuku"],codelantic:[...all]} = office;
console.log(placesituated);     // australia ( because i put  undefined above so default name is showing)
console.log(money);             // 150000
console.log(director);          // Faiz
console.log(givingLaptop);      // true
console.log(applexues);            // (3) ['chennai', 175000, 'Anojan']
console.log(applexues[0]);         // chennai
console.log(applexues[3]);          // undefined (because no index called 3)
console.log(value1);                //colombo
console.log(value4);                //false
console.log(value5);                // Amuku Dumuku
console.log(all);                   // (3) ['jaffna', 80000, 'shassevan']
console.log(typeof all);            // object
console.log(Array.isArray(all));        // true