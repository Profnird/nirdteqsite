var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/home', function(req, res, next) {
  res.render('index');
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET hall page */
router.get('/hall', function(req, res, next) {
  res.render('hall');
});

/* GET services page */
router.get('/services', function(req, res, next) {
  res.render('services');
});


/* GET products page */
router.get('/products', function(req, res, next) {
  res.render('products');
});

/* GET team page */
router.get('/team', function(req, res, next) {
  res.render('team');
});

module.exports = router;
