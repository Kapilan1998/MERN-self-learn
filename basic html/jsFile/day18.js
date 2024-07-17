/*
// spread operater
let subject1=['maths','tamil'];
let subject2=['english','science'];
console.log(subject1);
console.log(subject2);

let subject = subject1 + subject2;
console.log(subject);       // not giving correct output
console.log(subject1.concat(subject2));     // 2 array is merged

let subjects = [...subject1,...subject2];       // 2 array is merged
console.log(subjects);


console.log(...subject1);       // array to string
console.log(...subject2);
*/

/*
// spread operater
let name= "kapilan";
console.log(...name);       // k a p i l a n
console.log([...name]);     // (7) ['k', 'a', 'p', 'i', 'l', 'a', 'n']


let Student ={
    fname:"Amal",
    lame:"Kasun",
    "age": 28
}

let Marks ={
    maths:89,
    tamil:75
}

let studentMark={           
    ...Student,                 // merge 2 objects
    ...Marks
}

console.log(studentMark);
*/

/*
// normal arrow function
let restOperatorcheck = numbers=>{
let total =0;
for(i=0;i<numbers.length;i++){
    total += numbers[i];
}
console.log(total);
}
let marks = [45,65,24,15,61,-66,0,54,-56];
restOperatorcheck(marks);

*/

// rest parameter (used inside functions)
/*
let restOperatorcheck = (...numbers) =>{
    let total =0;
    for(i=0;i<numbers.length;i++){
        total += numbers[i];
    }
    console.log(total);
    }
    restOperatorcheck(596,515,56,-549,151,-84.8,-75.1);
    */


    //rest parameter
let restOperatorcheck = (...numbers) => {
    let total = 0;
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
} 
let marks = [596, 515, 56, -549, 151, -84.8, -75.1];
//spread operator
restOperatorcheck(...marks);