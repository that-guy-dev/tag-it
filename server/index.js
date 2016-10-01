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

app.post('/tagArticle', function (req, res) {
  read(req.body.articleUrl, function(err, article, meta) {

    const taggedArticle = {
      title: article.title,
      content: article.content,
    };
    article.close();
    return res.jsonp(taggedArticle);
  });
});

app.post('/tagArticleOld', function (req, res) {
  ArticleParser.extract(req.body.articleUrl).then((article) => {
    return res.jsonp(article);
  }).catch((err) => {
    console.log(err);
  });
});

http.createServer(app).listen(3030, function () {
  console.log('Server listening on port 3030');
});
