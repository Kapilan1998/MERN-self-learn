const express = require('express');
var router = express.Router();
var connection = require('../databaseConfig');


/* Get all employee details */
router.get('/',function(request,response,next){
    var sqlGetQuery = 'SELECT * FROM employee ';
    connection.query(sqlGetQuery,function(error,result){
        if(error){
            console.log(`Error in getting result :-  ${error}`);
        }else{
            console.log(result);        // see output in console
            response.send(result);
        }
    })
});

/* get required employee details */
router.get('/:id',function(request,response,next){
    var {id} =request.params;   // object destructure
    var sqlGetQuery = 'SELECT * FROM employee WHERE id =?';
    connection.query(sqlGetQuery,[id],function(error,result){
        if(error){
            console.log(`Error in getting result :-  ${error}`);
        }else{
            console.log(result);        // see output in console
            response.send(result);
        }
    })
});


/* delete employee details */
router.delete('/:id',function(request,response,next){
    var {id} =request.params;   // object destructure
    var sqlGetQuery = 'DELETE FROM employee WHERE id =?';
    connection.query(sqlGetQuery,[id],function(error,result){
        if(error){
            console.log(`Error in getting result :-  ${error}`);
        }else{
            response.send('deleted sucessfully');
        }
    })
});

/* insert employee details */
router.post('/',function(request,response,next){
    var {first_name,last_name,gender} =request.body;   // object destructure
    var sqlGetQuery = 'INSERT INTO `employee`(`first_name`,`last_name`,`gender`) VALUES(?,?,?) ';
    connection.query(sqlGetQuery,[first_name,last_name,gender],function(error,result){
        if(error){
            console.log(`Error in getting result :-  ${error}`);
        }else{
            response.send('inserted sucessfully');
        }
    })
});


/* update employee details */
router.put('/:id',function(request,response,next){
    var {first_name,last_name,gender} =request.body;   // object destructure
    var {id} = request.params    // object destructure
    var sqlGetQuery = 'UPDATE `employee` SET `first_name` = ?,`last_name`=?,`gender`=?  WHERE `id`=?';
    connection.query(sqlGetQuery,[first_name,last_name,gender,id],function(error,result){
        if(error){
            console.log(`Error in getting result :-  ${error}`);
        }else{
            response.send('updated sucessfully');
        }
    })
});


module.exports = router;