import expressTest1 from 'express';
const route = expressTest1.Router();

//grade route
route.get('/',(request,response,next)=>{
    response.send("Get All grades");
    console.log(' this is first check point');
    next();
});
route.post('/create',(request,response)=>{
    response.send("Create new grades");
});
route.put('/update',(request,response)=>{
    response.send("Update grades");
});
route.delete('/delete',(request,response)=>{
    response.send("Delete grades");
});

export {route};