var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/homepage', function(req, res, next) {
  res.render('homepage', { title: '首页' });
});

router.get('/resources', function(req, res, next) {
  res.render('resources', { title: '音声' });
});

router.get('/more', function(req, res, next) {
  res.render('more', { title: '更多' });
});

router.get('/picture', function(req, res, next) {
  res.render('picture/main', { title: '图片' });
});

router.get('/picture/R15', function(req, res, next) {
  res.render('picture/R15', { title: 'R15' });
});

router.get('/picture/R18', function(req, res, next) {
  res.render('picture/R18', { title: 'R18' });
});

router.get('/test', function(req, res, next) {
	let a = {status:"0",msg:null,data:{userName:"zcf"}};
  res.send(a);
});

module.exports = router;
