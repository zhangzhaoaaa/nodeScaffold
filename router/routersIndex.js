/**
 * Created by zhangmike on 16/8/8.
 */
var express = require('express');
var router = express.Router();

module.exports = [];

function addRouter(path) {
	module.exports.push(require(path)(router));
}

addRouter('./index');

