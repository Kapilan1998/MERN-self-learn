import fs from 'fs';
import http from 'http';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer((request,response)=>{
    let url = request.url;
    let method = request.method;
    if(url ==='/'){
        let path = '/pages/home.html';
        console.log(__dirname);     // F:\web trial\MERN Complete class\node Deep level\src
        console.log(__dirname+path);    //F:\web trial\MERN Complete class\node Deep level\src/pages/home.html
        fs.readFile(__dirname+path,(error,data)=>{
            if(error){
                response.writeHead(404,{'Content-Type':'text/html'});
response.end(`Sorry, ${url} not found.`);
            }else{
response.writeHead(200,{'Content-Type':'text/html'});
response.write(data);
response.end('fill details');
            }
        })
}else if(url ==='/about'){
    let path = '/pages/about.html';
    console.log(__dirname);     
    console.log(__dirname+path);    
    fs.readFile(__dirname+path,(error,data)=>{
        if(error){
            response.writeHead(404,{'Content-Type':'text/html'});
response.end(`Sorry, ${url} not found.`);
        }else{
response.writeHead(200,{'Content-Type':'text/html'});
response.write(data);
response.end();
        }
    })
}
else if(url ==='/contact'){

let path = '/pages/contact.html';
        console.log(__dirname);     
        console.log(__dirname+path);    
        fs.readFile(__dirname+path,(error,data)=>{
            if(error){
                response.writeHead(404,{'Content-Type':'text/html'});
response.end(`Sorry, ${url} not found.`);
            }else{
response.writeHead(200,{'Content-Type':'text/html'});
response.write(data);
response.end();
            }
        })


}else if((url ==='/save') && (method ==='POST')){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end(`data saved sucessfully`);
}else{
response.writeHead(404,{'Content-Type':'text/html'});
response.end(`Sorry, ${url} not found.`);
}
});

server.listen(3001,()=>{
    console.log(`server is running`);
})






export {http};