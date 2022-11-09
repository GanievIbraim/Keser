var express = require('express');
var router = express.Router();

/* Страница ценникодержателя */
router.get('/price_tag_holder', function(req, res, next) {
  res.send("<h1>Страница ценникодержателя</h1>")
});

/* Страница менюхолдера */
router.get('/menuholder', function(req, res, next) {
  res.send("<h1>Страница менюхолдера</h1>")
});

/* Страница салфетницы */
router.get('/napkin_holder', function(req, res, next) {
  res.send("<h1>Страница салфетницы</h1>")
});

/* Страница  таблички*/
router.get('/tablet', function(req, res, next) {
  res.send("<h1>Страница таблички</h1>")
});


module.exports = router;
