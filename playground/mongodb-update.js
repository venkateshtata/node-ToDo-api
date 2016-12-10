const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    console.log('unable to connect to mongodb server');
  }
  console.log("connected to mongodb server");


  db.collection('Users').findOneAndUpdate({_id: new ObjectID('58470b6fe0cae00d143f1476')
},{
  $set:{
    name:'jaffa'
  },$inc:{
    age:100
  }
},{
    returnOriginal: false
}).then((result)=>{
  console.log(result);
});



  //db.close();
});
