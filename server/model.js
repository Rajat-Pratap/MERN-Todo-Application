const mongoose = require( 'mongoose')

var Schema= mongoose.Schema;

var todoSchema = new Schema({
    text:String
})

module.exports=mongoose.model('Todo',todoSchema)