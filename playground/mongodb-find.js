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

// Basic query
  // db.collection('Todos').find({
  //   _id: new ObjectID('5821e5d77ee7be14884ba9db')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find({
    _id: new ObjectID('5821e5d77ee7be14884ba9db')
  }).count().then((count) => {
    console.log(`Todos has ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.close();
});
