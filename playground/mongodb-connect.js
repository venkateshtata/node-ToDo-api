const MongoClient = require('mongodb').MongoClient;

var user = {
  name:'venkatesh',
  age:20
};
var {name} = user;
console.log(name);
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
//   if(err){
//     console.log('unable to connect to mongodb server');
//   }
//   console.log("connected to mongodb server");
//
//   db.collection('Todos').insertOne({
//     text:'something to do',
//     _id:123,
//     completed:false
//   },(err, result)=>{
//     if(err){
//       return console.log('unable to insert',err);
//     }
//     else{
//       console.log(JSON.stringify(result.ops, undefined, 2));
//     }
//   });
//   db.collection('Users').insertOne({
//     name:'venkatesh',
//     age: 20,
//     location:'india'
//   },(err, result)=>{
//     if(err){
//       return console.log('unable to insert',err);
//     }else{
//         console.log(result.ops[0]._id.getTimestamp());
//     }
//   });
//
//   db.close();
// });
