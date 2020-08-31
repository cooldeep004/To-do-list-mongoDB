const mongoose= require('mongoose')
const todoschema= new mongoose.Schema({
description:{
    type: String,
    required:true
},
date:{
    type: Date,
    required:true
},
category:{
    type: String,
    required:true
}
});

const todo=mongoose.model('todo',todoschema)
module.exports=todo;