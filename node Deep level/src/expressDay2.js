import express from 'express';

import {route as studentEntity} from './routes/student.js';  
import { route as subjectEntity } from './routes/subject.js';
import { route as gradeEntity } from './routes/grade.js';

const app = express();
app.use("/students",studentEntity);
app.use("/subjects",subjectEntity);
app.use("/grades",gradeEntity);

app.post('/hello',(request,response)=>{
    response.send("hello 123");
    console.log("helo 123 displyed ");
});
 
app.listen('1000',()=>{
    console.log('server started sucessfully');
});

export {express};