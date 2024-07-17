function createFunction(fname,lname,age) {
    return {
        firstName: fname,
        lastName: lname,
        age: age
    }
}

function convert(){
let fname = document.getElementById('fname').value;
let lname = document.getElementById('lname').value;
let age = document.getElementById('age').value;

let fun = createFunction(fname,lname,age);

document.getElementById('functionName').value= fun.firstName;
document.getElementById('functionLame').value= fun.lastName;
document.getElementById('functionAge').value= fun.age;
}