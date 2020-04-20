const express=require('express')
const router= express.Router()
const Todo= require('../model')

router.get('/',function (req,res){
    res.send('fdgfcvfghhj')
})

router.route('/insert').post((req,res)=>{
    const todo= new Todo();
    todo.text=req.body.text;

    todo.save(function(err) {
        if (err)
          res.send(err);
        res.send('Todo successfully added!');
    });

})

router.route('/update').post(function(req, res) {
    const doc = {
        text: req.body.text
    };
    Todo.update({_id: req.body._id}, doc, function(err, result) {
        if (err)
            res.send(err);
        res.send('Todo successfully updated!');
    })
})

// localhost:8000?id=5269562625
router.get('/delete', function(req, res){
    var id = req.query.id;
    Todo.find({_id: id}).remove().exec(function(err, expense) {
    if(err)
        res.send(err)
    res.send('Todo successfully deleted!');
    })
})

router.get('/getAll',function(req, res) {
        Todo.find({}, function(err, todos) {
        if (err)
            res.send(err);
        res.json(todos);
        })
})

module.exports=router