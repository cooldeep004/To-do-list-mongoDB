const express=require('express');
const app=express();
const port=8000;
const expressLayout=require('express-ejs-layouts');
const db=require('./config/mongoose');
app.use(express.urlencoded());

app.use(express.static('./assets'));
//app.use(expressLayout);
//extract style and script from sub pages into the layout
//app.set('layout extractStyle', true);
//app.set('layout extractScripts', true);
//use express router
app.use('/',require('./routes'));

//set up a view engine 
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`error: ${err}`);
    }
    console.log(`server is running ${port}`);
});