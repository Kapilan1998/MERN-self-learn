var express = require('express');
var router = express.Router();

/* GET student page. */
router.get('/', function(req, res, next) {
  // res.send('get all Students');
  res.render('all-students', { name:'Kapilan',city:"Jaffna"})
});

router.get('/:id',function(req,res,next){
res.render('student',{id:req.params.id});
});

router.post('/',function(req,res,next){
  res.render('create-student',{name:'Kapilan',city:"Jaffna"});
  });

router.put('/update',function(req,res,next){
    res.render('update-student',{name:'Kapilan',city:"Jaffna"});
  });

router.delete('/delete',function(req,res,next){
    res.render('delete-student',{name:'Kapilan',city:"Jaffna"});
  });


module.exports = router;
