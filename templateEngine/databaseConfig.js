const mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'express_db'
});

//check whether connected or not
connection.connect(function(error){
    if(error){
        console.log(`error in connecting mysql ${error}`);
    }else{
        console.log('connected sucessfully');
    }
});


module.exports = connection;