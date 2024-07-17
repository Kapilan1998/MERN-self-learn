import expressTest1 from 'express';
const route = expressTest1.Router();


//subject route
route.get('/',(request,response)=>{
    response.send("Get All subjects");
});
route.post('/create',(request,response)=>{
    response.send("Create new subjects");
});
route.put('/update',(request,response)=>{
    response.send("Update subjects");
});
route.delete('/delete',(request,response)=>{
    response.send("Delete subjects");
});



export {route};
