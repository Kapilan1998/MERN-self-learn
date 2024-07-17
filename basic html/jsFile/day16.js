/*
try{
    console.log(x);
}catch(error){
    console.log(error.message);     // x is not defined
    console.log(error.name);     // ReferenceError
    console.log(error.stack);   // ReferenceError: x is not defined at day16.js:2:17 
} finally{
    console.log("How ever it will execute whether try or catch execute or not");
}

console.log("test2");
*/

/*
try{
    let x= 5/0;
    if(x == Infinity){
        throw new Error("Divide by 0 is error")
    }  
    console.log(x);
}catch(error){
    console.log(error.message);
    
} 
*/


// here error came but below line did not execute
/*
function sum(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        throw new Error('Not a valid number, please insert mumber only')
    }
    return num1+num2;
}

console.log(sum(-56,48));
console.log(sum("45",48));
console.log(sum("45abc",48));
console.log("ended");
*/


// here error came and below line executed
/*
function sum(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        throw new Error('Not a valid number, please insert mumber only');
        // console.log("insert number only");
    }
    if(num1 == 0 || num2 == 0){
        throw new Error("0 can't accept, so enter another number");
    }
    return num1*num2;
}

try{
console.log(sum(-576,4158));
console.log(sum("45abc",48));
console.log(sum(0,45));
}catch(e){
console.log(e.message);
}
console.log("ended");
*/



function sum(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        let e1 = new Error('Not a valid number, please insert mumber only');
        e1.name = "NotNumberError";
        throw e1;
    }
    if (num1 == 0 || num2 == 0) {
        let e1 = new Error("0 can't accept, so enter another number");
        e1.name = "ZeroError";
        throw e1;
    }
    return num1 * num2;
}

try {
    // console.log(sum(-576, 4158));
    console.log(sum("45abc", 48));
    console.log(sum(0, 45));
} catch (e) {
    console.log(e.message);
    console.log(e.name);
    if(e.name == "NotNumberError"){
        console.log("Error message 1 is here !!!");
    }else if(e.name == "ZeroError"){
        console.log("Error message 2 is here !!!");
    }

}
console.log("ended");