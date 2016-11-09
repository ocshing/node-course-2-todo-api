// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


// Destructure
var user = {name: 'andrew', age: 25};
var {name} = user;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connect to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Wish mum Happy Birthday',
  //   completed: false
  //
  // },(err,result) => {
  //   if(err){
  //     return console.log('Unable to insert todo in Collection',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Danish Ooi',
  //   age: 27,
  //   location: 'Penang'
  // },(err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user',err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});
