const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


const mongoConnect = callback => {
  MongoClient.connect(
    // Mongo URL
    '', {useUnifiedTopology: true}
  )
    .then(client => {
      const db = client.db()
      callback();
    })
    .catch(err => {
      console.log('Error at DB connection');
      throw err;
    });
};
const getDb = () => {
  if (db) {
    return db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;