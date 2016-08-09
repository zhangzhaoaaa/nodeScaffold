/**
 * Created by zhangmike on 16/8/8.
 */
var express = require('express');
require('babel-core/register');

var middlewareCommon = require('./middleCommon/common');
var app = express();
var PORT = process.env.port || 8088;

middlewareCommon(app);

app.listen(PORT);
console.log(`the server is listen on ${PORT}`);