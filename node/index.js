console.log("hello checking node here");

/*
//to see global items in node (like window in js)
let obj = global;
console.log(obj);
*/

function showName(name="Raja"){
    console.log(`Hi i am ${name}`);
}
// showName('kapilan');

let city = "Moratuwa";
// console.log(city);

let offfice={
    name:"Codelantic",
    place:"wellawata"
}

module.exports={showName,city,offfice};