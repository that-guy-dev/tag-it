var express = require('express');
var router = express.Router();

router.get('/test', function (req, res) {
  res.json(200, {'test': 'it works!'});
});

module.exports = router;
