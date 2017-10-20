const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const read = require('node-readability');
const stream = require('stream');
const ArticleParser = require('article-parser');
const uuid = require('node-uuid');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID
//const nodeMercuryParser = require('node-mercury-parser');
//const fetch = require('node-fetch');
//mercury: bR3cCdczWIUO5iQy6C1T5SV6qlhUbBcRcf4zkJ8H

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var jwt = require('jsonwebtoken');

const mongourl = 'mongodb://localhost:27017/tagit';
const app = express();

const mercury = require('mercury-parser')('bR3cCdczWIUO5iQy6C1T5SV6qlhUbBcRcf4zkJ8H');

app.use(function(req,res,next){
  next();
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000,
}));

app.use(function(req, res, next) {
  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    if (req.method === 'OPTIONS') {
      return res.send(200);
    }
  }
  next();
});


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

app.get('/articles', function (req, res) {
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

  mercury.parse(url).then(article => {
    article.tags = tags;     
    
    saveArticle(article);
  }).catch(err => {
    console.log('Error: ', err);
 });

//  app.post('/authenticate', function(req, res) {

//   var token = jwt.sign(user, 'moveon', {
//     expiresIn: "2d"
//   });

//   var expirationDate = moment().add(1,'d').toDate();
//   // return the information including token as JSON
//   res.json({
//     ok: true,
//     access_token: token,
//     userName: 'b',    
//     expires: expirationDate
//   });

//  });


/*
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
  });*/
});

/*
app.post('/tagArticleOld', function (req, res) {
  ArticleParser.extract(req.body.articleUrl).then((article) => {
    return res.jsonp(article);
  }).catch((err) => {
    console.log(err);
  });
});*/

http.createServer(app).listen(3030, function () {
  console.log('Server listening on port 3030');
});
