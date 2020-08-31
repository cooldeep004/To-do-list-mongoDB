const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/todo_development');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to mongodb"));
db.once('open',function(){
    console.log('connected to Database:: Mongodb');
});
module.exports=db;