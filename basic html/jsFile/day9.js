// let arr1=[];
// console.log(typeof arr1);
// console.log(Array.isArray(arr1));
// console.log(arr1);
// arr1[0]=-56.17;
// arr1[1]=true;
// arr1[2]="guyguyy";
// arr1[3]=false;
// console.log(arr1);
// console.log(arr1[2]);
// for(let i=0;i<arr1.length;i++){
// console.log(arr1[i]);
// }

let arr2=[85,false,-32.1545,null,"nallur","galle","undefined variable",true,0,48];
// console.log(arr2);

// let array=new Array();
// console.log(array);
// array[0]="8gftyv";
// array[1]=true;
// console.log(array);

// for (let i in arr2){                 // here i as index
//     console.log(arr2[i]);
// }

// for (let i of arr2){                    // here i as value
//     console.log(i);
// }

// arr2.forEach(function(item,index,array){                // callback function (forEach is function inside that i am passing another function to retrive all details inside array)
//     console.log(`index = ${index} : item = ${item} :  full array = ${array}`);
// });

// arr2.forEach((item,index,array)=>{                          // implementing using arrow function
//     console.log(`index = ${index} : item = ${item} :  full array = ${array}`);
// });

console.log(arr2);
arr2.push('hello');     // insert elemnt to last
console.log(arr2);
arr2.unshift('hi');       // insert elemnt to first
console.log(arr2);
arr2.pop();             // delete last element of array 
console.log(arr2);
arr2.shift();           // delete first element of array 
console.log(arr2);
arr2[3]="modifiyng";
console.log(arr2); 
console.log(arr2.indexOf("welcome"));       // if element not exist return -1
console.log(arr2.indexOf(-32.1545));       // if element exist return its index
arr2.unshift(-32.1545);
console.log(arr2.indexOf(-32.1545));       // if same element exist return its index where came first
console.log(arr2.lastIndexOf(-32.1545)); 
console.log(arr2.length);      








