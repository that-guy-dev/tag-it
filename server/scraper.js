const read = require('node-readability');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const express = require('express');

const router = express.Router();
const mongourl = 'mongodb://localhost:27017/tagit';

function saveArticle(article) {
  MongoClient.connect(mongourl, function(err, db) {
    db.collection('articles').insertOne(article);
  });
}

app.get('/article/:id', function (req, res) {

  MongoClient.connect(mongourl, function(err, db) {
    const collection = db.collection('articles');
    collection.findOne({
        _id: ObjectID(req.params.id),
      }, function(err, article) {
        res.json(article);
    });
  });
});

router.app.get('/articles', function (req, res) {
  MongoClient.connect(mongourl, function(err, db) {
    const collection = db.collection('articles');
    const findParams = {};
    collection.find(findParams).toArray(function(err, docs) {
      res.jsonp(docs);
    });
  });
});

app.post('/tagArticle', function (req, res) {

  const url = req.body.articleUrl;
  const tags = req.body.tags;
  read(url, function(err, article, meta) {
    const taggedArticle = {
      title: article.title,
      content: article.content,
      url,
      tags,
    };

    saveArticle(taggedArticle);
    article.close();

    return res.jsonp(taggedArticle);
  });
});

module.exports = router;
