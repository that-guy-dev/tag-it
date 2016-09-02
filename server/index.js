var http = require('http');
var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var url  = require('url');
var read = require('node-readability');

var app = express();

app.use(function(req,res,next){
    next();
});

app.use(bodyParser.urlencoded({
  extended: true,
  parameterLimit:500
}));

app.use(function(req, res, next) {
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
        if (req.method === 'OPTIONS'){
          return res.send(200);
        }
    }
    next();
});

app.get('/tag', function (req, res) {
  read('http://www.visir.is/drykkfelldi-skipstjorinn-fekk-100-thusund-krona-sekt-og-helt-for-sinni-afram/article/2016160909893', function(err, article, meta) {

    console.log(article.content);
    /*console.log(article.title);
    console.log(article.html);
    console.log(article.document);
    console.log(meta);
    article.close();*/
  });
});

http.createServer(app).listen(3030, function () {
  console.log('Server listening on port 3030');
});
