const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const read = require('node-readability');
const stream = require('stream');
const ArticleParser = require('article-parser');
//const fetch = require('node-fetch');

const app = express();

app.use(function(req,res,next){
  next();
});

app.use(bodyParser.urlencoded({
  extended: true,
  parameterLimit: 5000,
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

app.get('/tagArticle', function (req, res) {

  const url = 'http://yhoo.it/1MJUFov';
  ArticleParser.extract(url).then((article) => {
    
    return res.jsonp(article);
  }).catch((err) => {
    console.log(err);
  });

});

app.get('/tagArticleReadability', function (req, res) {
  read('http://redis.io/commands/append', function(err, article, meta) {
    /*console.log(article.content);
    console.log(article.title);
    console.log(article.html);
    console.log(article.document);
    console.log(meta);
    article.close();*/
    return res.jsonp("sad");
  });
});

http.createServer(app).listen(3030, function () {
  console.log('Server listening on port 3030');
});
