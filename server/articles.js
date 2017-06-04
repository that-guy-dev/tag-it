const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const express = require('express');

const router = express.Router();
const mongourl = 'mongodb://localhost:27017/tagit';

router.get('/:id', function (req, res) {

  MongoClient.connect(mongourl, function(err, db) {
    const collection = db.collection('articles');
    collection.findOne({
        _id: ObjectID(req.params.id),
      }, function(err, article) {
        res.json(article);
    });
  });
});

router.get('/articles', function (req, res) {
  res.json(200, {'test': 'it works!'});
  /*MongoClient.connect(mongourl, function(err, db) {
    const collection = db.collection('articles');
    const findParams = {};
    collection.find(findParams).toArray(function(err, docs) {
      res.jsonp(docs);
    });
  });*/
});

module.exports = router;
