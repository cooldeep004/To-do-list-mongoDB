const todo=require("../models/schema");

module.exports.home=function(req,res){
   todo.find({},function(err,fetchtodo){
if(err)
{
   console.log("error in fetching");
   return;
}
  
return res.render('home',{
title:"home",
todoList:fetchtodo
});
});
};


module.exports.create=function(req,res){
todo.create({
   description:req.body.description,
   date:req.body.date,
   category:req.body.category
},function(err,newtodo){
   if(err){
      console.log('errrrrrrrrrr');
      return;
   }
   return res.redirect('back');
});

};

module.exports.delete=function(req,res){
   if(req.body.items.length>0){
      for(let i of req.body.items){
         todo.findByIdAndDelete(i,function(err){
            if(err){
               console.log('error deleting');
               return;
            }
         });
      
      }
   }
return res.redirect('back');
};