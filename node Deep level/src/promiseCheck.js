export let myPromise = new Promise((resolve,reject) => {
    if(true){
        resolve("Status clear");
    }else{
        reject(new Error("no data available"));     // as returning Error class, we can use name, message, stack
    }
});

myPromise.then((resolveData) =>{
    console.log(resolveData);
    return resolveData;
}).then((thatResolvedData)=>{
console.log(`Here final result is : - ${thatResolvedData}`);
}).catch((rejectedData)=>{
    console.log(rejectedData.name);         //Error class contain 3 methods (name,message,stack)
    console.log(rejectedData.message);
    console.log(rejectedData.stack);
});

// const myAxios = require('axios');
import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com/users";
axios.get(url).then((data) =>{
    console.log(data);
}).catch((error) =>{
    console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
});

export {axios};