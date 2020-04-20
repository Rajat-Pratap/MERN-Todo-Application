const express= require('express')
const router = require('./routes/routes')
const cors = require('cors')
const path = require('path')
const mongoose=require('mongoose')

const app=express()

app.use(express.static(path.join(__dirname,'../public')))
app.use(express.json())
app.use(cors())

app.use(router)
mongoose.connect('mongodb://127.0.0.1:27017/Todo',{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true
})

var port = 8000
app.listen(port, function() {
 console.log('running at localhost: ' + port)
})

module.exports=app