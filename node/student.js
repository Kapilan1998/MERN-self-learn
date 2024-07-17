console.log("welcome");

/*
const indexData = require('./index.js');
indexData.showName("Amuku Dumuku");
indexData.showName();
console.log(indexData.city);
*/

// using object destructure knowledge
const {showName,city,offfice:{name,place}} = require('./index.js');
showName("Chatura");
showName();
console.log(city);
console.log(`office name is ${name}`);
console.log(`office situated at ${place}`);

const fileSystem = require('fs');
console.log(fileSystem);