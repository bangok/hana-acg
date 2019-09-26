var express = require('express');
var router = express.Router();

  
/* GET home page. */
router.get('/', function(req, res, next) {
		let str = " ≥Ö‿Ö≤ ";
    res.send(str);
});
module.exports = router;