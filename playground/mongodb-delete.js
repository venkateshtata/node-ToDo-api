//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    console.log('unable to connect to mongodb server');
  }
  console.log("connected to mongodb server");

//deleteMany
//db.collection('Todos').deleteMany({text:'something to do'}).then((result)=>{
  //console.log(`what happened:\n ${result}`);
//})

//deleteOne

//findOneAndDelete
db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>
{
  console.log(result);
});




  //db.close();
});
