//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    console.log('unable to connect to mongodb server');
  }
  console.log("connected to mongodb server");

  // db.collection('Todos').find({_id: new ObjectID("5847a6896524123a3d11970b")}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err)=>{
  //   console.log('unable to connect',err);
  // });

 //  db.collection('Todos').find().count().then((count)=>{
 //
 //     console.log(`number of todos are ${count} `);
 //   },(err)=>{
 //     console.log('unable to connect',err);
 // });

 db.collection('Users').find().toArray().then((docs)=>{
   console.log(JSON.stringify(docs,undefined,2));
 });



  //db.close();
});
