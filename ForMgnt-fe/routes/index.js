var express = require('express');
var router = express.Router();

//统一返回格式用 router.use
var responseData
router.use( function(req, res, next){
	responseData = {
		code: 0,
		message: ""
	}
	next()
})

/* GET home page. */
router.get('/', function(req, res, next) {
  responseData.message = "保存成功！"
  res.json(responseData)
});

module.exports = router;
