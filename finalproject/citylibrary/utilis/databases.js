const MongoClient = require('mongodb').MongoClient;;
let _db; //indicate private variable
//mongodb+srv://mesay:<password>@cluster0.6g9dt.mongodb.net/test

// const mongoConnect = (callback) => { MongoClient.connect('mongodb+srv://mesay:Hossana@2018@cluster0.6g9dt.mongodb.net/test',{
//      useUnifiedTopology: true
//      })

// mongodb+srv://<username>:<password>@cluster0.6g9dt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


// const mongoConnect = (callback) => { MongoClient.connect('mongodb://localhost:27017',{
//      useUnifiedTopology: true
//      })
const mongoConnect = (callback) => { MongoClient.connect('mongodb+srv://citylibrary-db-user:test1234@cluster0.6g9dt.mongodb.net/liberary-dbBookk?retryWrites=true&w=majority',{
     useUnifiedTopology: true
     })
.then(client => {
    
console.log('Connected......');
_db = client.db('liberary-dbBookk');
callback();
})
.catch(err => console.log(err));
}
const getDb = () => {
if (_db) {
return _db;
}
throw new Error('No Database Found!');
}
exports.mongoConnect = mongoConnect;
exports.getDb=getDb;