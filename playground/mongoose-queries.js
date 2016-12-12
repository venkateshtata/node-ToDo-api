const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '584c2004e2bfca3b537a4bcd';

// if(ObjectID.isValid(id)){
//   console.log("id not valid");
// }

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log("todos are",todos);
// });
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log("todo is",todo);
// });

//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log("todo is",todo);
// });

User.findById(id).then((user)=>{
  if(!user){
    console.log("user not found");
  }else{
    console.log("User was found !\n")
  console.log(user);
}
});
