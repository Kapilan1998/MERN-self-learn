// import readFile from 'fs';
import axios from 'axios';
import { error } from 'console';
import fs from 'fs';

const url = "https://jsonplaceholder.typicode.com/users/";

// normal way of reading data from file
// readFile('./src/my-file/number.txt',(error,data)=>{
//     if(error){
//         throw error;
//     }
//     console.log(data.toString());
// });

//here promise is used but less readable code
/*
fs.promises.readFile('./src/my-file/number.txt','utf8').then((data)=>{
    console.log(data);
    axios.get(url+data).then((response)=>{
        console.log(response);
    }).catch((error)=>{
    console.log(error);
    });
}).catch((error)=>{
    console.log(error);
})
*/

// using async ,it is readable
/*
const getUser = async () => {
    try {
        let userId = await fs.promises.readFile('./src/my-file/number.txt', 'utf8');
        console.log(`userId is ${userId}`);

        let userInfo =await axios.get(url+userId);
        console.log(userInfo);

    } catch (error) {
        console.log(error);
    }
};
getUser();
*/
function multiply(num1, num2) {
    console.log(`Production is ${num1 * num2}`);
}
async function getName() {
    console.log(`my name`);
    return Promise.resolve("Success...");
    // return Promise.reject(new Error());
}

// getName();      // it will display only my name as output. if i need to return promise,i need to use 'then' 
// getName().then((data)=>{
//     console.log(data);
// });

async function Display() {
    try{

    let result = await getName();
    console.log(`result is ${result}`);
    let userId = await fs.promises.readFile('./src/my-file/number.txt', 'utf8');
    console.log(userId); //7
    return Promise.resolve(userId);
    
    }catch(error){
        return Promise.reject('this is error');
    }
};


// Display().then((value) => {
//     // console.log(value); //7
//     multiply(8.026, -4.85);
// }).catch((error)=>{
//     console.log('1 '+error.name);
//     console.log('2 '+error.message);
//     console.log('3 '+error);
// });  

console.log('=======');

async function printAll(){
let f1 = await Display();
let f2 = await multiply(8.026, -4.85);
}
printAll();

// export {readFile};
export { fs };