var x = 0;
console.log(typeof x);
console.log(x, " is ", typeof x);

let boolean = true;
console.log(typeof boolean);
console.log(boolean, " is ", typeof boolean);

// string to number
let a = "75.125";
console.log(a, typeof a);
// a = Number(a);
// a= +a;
a = parseFloat(a);
console.log(a, typeof a);


// number to string
let b = -34.12548;
console.log(b, typeof b);
// b= String(b);
b = b.toString();
console.log(b, typeof b);

// number to boolean
let c = -62;
console.log(c, " is ", typeof c);
c = Boolean(c);
console.log(c, " is ", typeof c);

let d = 0;
console.log(d, " is ", typeof d);
d = Boolean(d);
console.log(d, " is ", typeof d);

let array1 = [45, 89.25, -96.25, 0, "dgxcgfc", "56.27"];
console.log(array1, "is ", typeof array1);


console.log(Array.isArray(array1));
console.log(Array.isArray(d));
console.log(typeof array1[2], array1[2]);
console.log(array1[0] + array1[2] + " " + array1[4] + " " + array1[5]);
array1.forEach(function (element) {
    console.log(element);
});


let b1 = null;
console.log(b1, " is ", typeof b1);

let object1 ={
    name:"kapilan",
    age:25
}
console.log(object1, "is a ", typeof object1);

let function1 = function(){
    console.log("Welcome to jaffna");
    let msg= "Welcome to Colombo"
}
console.log("Hi ",object1.name, " you are ",function1);