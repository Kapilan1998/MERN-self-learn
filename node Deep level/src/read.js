import { log } from 'console';
import {readFile} from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let location1 = join(__dirname, 'my-file', 'school.txt');
let location2 = __dirname;
let location3 = "my-file";
let location4 = "school.txt";
let location5 = __filename;


// let path = require ('node:path');

readFile('./src/my-file/school.txt',(err,data) =>{
    if(err){
        throw err;
    }
    console.log(data.toString());       // if not converted to string it will show buffers (like numbers)
}) ;


readFile('./src/my-file/university.txt','utf8',(error,data) =>{
    if(error){
        throw error;
    }
    console.log(data);      // if utf8 is put then no need to convert to String
});

// let location1 = path.join(__dirname,"my-file","school.txt");
// module.exports = {location1};

export {readFile,location1,location2,location3,location4,location5};