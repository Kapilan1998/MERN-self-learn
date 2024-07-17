import expressTest1 from 'express';
const route = expressTest1.Router();


//students route
route.get('/:id/:name',(request,response)=>{
    let id = request.params.id;
    let name = request.params.name;
    response.send("Get All students id:- "+id+" and name is :- "+name);
    console.log("received details students");
});
route.post('/create',(request,response)=>{
    response.send("Create new students");
    console.log("created students details ");
});
route.put('/:studentId/update',(request,response)=>{
    response.send("Update students "+request.params.studentId);
    console.log("updated students details ");
});
route.delete('/delete',(request,response)=>{
    response.send("Delete students");
    console.log("deleted students details ");
});

route.delete('/:stuId',(request,response)=>{
    let stuId = request.params.stuId;
    response.send("Delete student with id = "+stuId);
});
export {route};