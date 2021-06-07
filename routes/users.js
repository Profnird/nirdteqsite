var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('h');
});

// // http://expressjs.com/en/starter/basic-routing.html
// app.get('/', function(req, res, next) {
//   res.render('product');
// });
module.exports = router;
