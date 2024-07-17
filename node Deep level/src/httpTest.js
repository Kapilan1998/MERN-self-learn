import http from 'http';
import axios from 'axios';
/*
const hostName ='127.0.0.1';        // or i can use my IPV4 address also and share to outside to access our server
const port =5000;
const server = http.createServer((req,res)=>{
res.statusCode=200;
res.setHeader= ('Content-Type','text/plain');
res.end("Welcome to testing in node js using http");
});

server.listen(port,hostName,()=>{
    console.log(`server is running sucessfully in ${hostName}: ${port} `);
});

export {server};
*/

/*
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end("Hello world");
}).listen(8081);
console.log(`server is running sucessfully`);
*/

// used public api to show data in browser
/*
axios.get("https://jsonplaceholder.typicode.com/users/")
.then(response => {
    const userDetails = JSON.stringify(response.data); // convert object to string
    http.createServer(function(request,response){
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.end(userDetails);
    }).listen(8081);
    console.log(`server is running successfully`);
})
.catch(error => {
    console.error(error);
});
*/


// different pages are loaded inside same file (contact, about,save) 
const server = http.createServer((request,response)=>{
    let url = request.url;
    let method = request.method;
    if(url ==='/'){
response.writeHead(200,{'Content-Type':'text/html'});
response.write("<html>");
response.write("<head><title>Testing</title></head>");
response.write('<body> <form action="/save" method ="POST">');
response.write('Enter first name <input type ="text" ><input type ="submit"></form></body>');
response.write("</html>");
response.end('fill details');


}else if(url ==='/about'){
response.writeHead(200,{'Content-Type':'text/html'});
response.end(`<h1>Welcome to ${url} page </h1>`);
}else if(url ==='/contact'){
response.writeHead(200,{'Content-Type':'text/html'});
response.end(`<h1>Welcome to ${url} page </h1>`);
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