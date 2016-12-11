var express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');




var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
  var todo = new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
});

// app.post('/todo',(req,res)=>{
//   var todo2 = new User({
//     email:req.body.task
//   });
//   todo2.save().then((doc)=>{
//     res.send(doc);
//   },(err)=>{
//     res.status(400).send(err);
//   });
// });
//                 
// app.post('/users',(req,res)=>{
//   var user = new User({
//   email:req.body.email
//   });
//   user.save().then((doc)=>{
//     res.send(doc);
//   },(err)=>{
//     res.status(400).send(err);
//   });
// });

app.listen(3000,()=>{

  console.log("listening to port 3000");

});






//({
//   completed:true
// });
//
// var Todo2 = new Todo({
//   text:'say hello',
// completed:true,
// completedAt:20
// });
//
//
// newTodo.save().then((doc)=>{
//   console.log('object saved',doc);
// },(err)=>{
//   console.log("cannot connect to database");
// });
//
// Todo2.save().then((doc)=>{
//   console.log("data saved",doc);
// },(err)=>{
//   console.log(err);
// });
