import express, { response } from 'express';
const app = express();

import fs from 'fs';
import http, { request } from 'http';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);  // current file location (F:\web trial\MERN Complete class\node Deep level\src)

//respond with 'hello world' when a get request is made to home page
/*
app.get('/',(request,response)=>{
    response.send(`hello world`);
});
app.get('/about',(request,response)=>{
    response.send(`welcome to about page`);
});
app.get('/contact',(request,response)=>{
    response.send(`welcome to contact page`);
});
app.listen('3000',()=>{
    console.log(`server is running`);
});
*/


app.get('/',(request,response)=>{
    let path = '/expressFile/home.html';
        fs.readFile(__dirname+path,(error,data)=>{
            if(error){
                response.status(404).send("sorry page not found");
            }else{
response.set('Content-Type','text/html');
response.send(Buffer.from(data+ "page loaded sucessfully......."));
// response.end('fill details');
            }
        })
});

app.get('/download',(request,response)=>{
    response.download(__dirname+'/my-file/school.txt');
    console.log('file is downloaded sucessfully');
});

app.get('/see-json',(request,response)=>{
response.json({name:"kapilan",address:"jaffna",age:26});
console.log('converted to json sucessfully');
});
app.get('/see-error',(request,response)=>{
    response.status(500).json({error:'message'});
    console.log('500 server error displayed');
});

app.get('/contact',(request,response)=>{
    let path = '/expressFile/contact.html';
        fs.readFile(__dirname+path,(error,data)=>{
            if(error){
                response.status(404).send("sorry page not found");
            }else{
response.set('Content-Type','text/html');
response.send(Buffer.from(data+ "page loaded sucessfully......."));
            }
        })
});

app.listen('3000',()=>{
    console.log(`server is running`);
});


export {express};