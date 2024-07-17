let country ="Sri lanka";
let num1= 13.57;
export  default function display(){
    console.log('function is calling');
 }


// module.exports = {country,num1};     // if type = module is not available inside package.json, then only can use like this
export {country,num1}; 