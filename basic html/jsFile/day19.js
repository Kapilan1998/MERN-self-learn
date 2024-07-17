//array destructure

let arr = ['maths', 'history', 'tamil', 'english', 'IT', 'Geography', 'Drama', 'Art'];

/*
    // normal way
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[4]);
*/

// destructure array (method 1) (take all values)
/*
let [sub1,sub2,sub3,sub4,sub5] = arr;
console.log(sub1);
console.log(sub3);
console.log(sub4);
*/

// destructure array (method 2) (take first value)
/*
let [sub1] = arr;
console.log(sub1);
*/

// destructure array (method 3) (take 4th value)
/*
let [,,,sub4] = arr;
console.log(sub4);
*/

// destructure array (method 5) (take any 2 value)
/*
let [,sub2,,sub5] = arr;
console.log(sub2);
console.log(sub5);

let [,mysub2,,mysub4,mysub5] = arr;     //(take any 3 value)
console.log(mysub2); 
console.log(mysub4);
console.log(mysub5);
*/

/*
let [,mysub2,,,...mysub5] = arr;     //(take 2nd value and from 5th value onwards it stores as array ) here mysub5 is act as rest parameter because give value in array format (not spread, spread means individual single value)
console.log(mysub2);        //history
console.log(mysub5);        // (4) ['IT', 'Geography', 'Drama', 'Art'] 
*/

let country = ['srilanka', undefined, 'india', 'nepal'];
/*
let [country1,country2,country3] = country;
console.log(country1);
console.log(country2);  // undefined (because no value)
console.log(country3);
*/

/*
let [country1,country2='China',country3] = country;
console.log(country1);
console.log(country2);  // china (because if no value there default value china will be assigned, but in case if value is exist already then that value will be display not china) 
console.log(country3);
  */


//object destructure
let student = {
    name: "kapilan",
    age: 25,
    isSingle: true
}

/*
//initialize first and declare later
let name,age;
({name,age} = student);
console.log(name);
console.log(age);
*/


//key name = variable name
/*
let {name,age,isSingle} = student; // taking all the key of object and here keyname and varibale given for key must be same
console.log(name);
console.log(age);
console.log(isSingle);
*/

//key name != variable name (then i need to set default name)
/*
let {myName="Malinga",hisAge=48,isSingle} = student;
console.log(myName);
console.log(hisAge);
console.log(isSingle);
*/


let employee= {
    name:{
        firstName:"Sivalingam",
        lastName:"Priya"
    },
    address:"Jaffna"
}

// for nested object
/*
let {name:{firstName,lastName},address} = employee;
console.log(firstName);
console.log(lastName);
console.log(address);
*/

// using alias for key of object (key value name != variable name)
/*
let {name:{firstName:f1,lastName:f2},address:f3} = employee;
console.log(f1);
console.log(f2);
console.log(f3);
*/

//set value to key which is not inside object (salary and province  not exist)
/*
let {address,salary=50000,province:p1="North"} = employee;
console.log(address);
console.log(salary);
console.log(p1);        // can't use as province because it was aliased above
*/

let office={
    name:"Codelantic",
    region:{
        province:"West",
        district:"Colombo",
        city:"Wellawata"
    },
    yearEstablished:2019,
    owner:"Shaseevan",
    director:"prem",
    hr:"isurandi",
    operationManager:"nova",
    pm:"Sanduni",
    devops:"actutan"
}
// using spread operator remanining values are stored inside owner as array format (here i added a key which is not exist (haveBranch) and set default value as true)
/*
let {name,region:{province,district:locatedDistrict},haveBranch=true,yearEstablished,...remaining} = office;
console.log(name);
console.log(province);
console.log(locatedDistrict);
console.log(yearEstablished);
console.log(remaining);     // store remaining thing as object format
console.log(haveBranch);
console.log(remaining.hr);      // access in normal way inside object of remaing things
*/

//using normal way
/*
function displayOfficeDetail(officeObject){
    console.log(`office name ${officeObject.name}`);
    console.log(`office city ${officeObject.region.city}`);
    console.log(`office devops ${officeObject.devops}`);
}
*/

// passing required values only as parameter inside the function in {} format after object destructure
/*
function displayOfficeDetail({name,region:{city},devops}) {
    console.log(name);
    console.log(city);
    console.log(devops);
}
displayOfficeDetail(office);
*/

/*
// function returning object / array
function showResult(num1,num2){
    let sum = num1 + num2;
    let  subtract= num1 - num2;
    let  multiply= num1 * num2;
    let  division= num1 / num2;

    // return [sum,subtract,multiply,division];
    return {sum,subtract,multiply,division};
}

// let [sum,subtract,multiply,division] = showResult(50,35);  
let {sum:total,subtract,multiply,division} = showResult(50,35);  
console.log(total);
console.log(subtract);
console.log(multiply);
console.log(division);
*/


// function inside object
let project = {
    pojectName:"WDS",
    code:"p007",
    display(){
        console.log(`Project name :- ${pojectName}`);
    }
};

let {pojectName,code,display} = project;
console.log(pojectName);
display();