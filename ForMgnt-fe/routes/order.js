var express = require('express');
var router = express.Router();
var Mock = require('mockjs')
var order = require('../public/data/order.json')

//统一返回格式用 router.use
var responseData
router.use( function(req, res, next){
	responseData = {
		code: 0,
		message: ""
	}
	next()
})

/* 订单列表 */
router.get('/', function(req, res, next) {
  responseData.message = "保存成功！"
  var data = Mock.mock(order)
  res.json(data)
});

module.exports = router;
