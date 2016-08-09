/**
 * Created by zhangmike on 16/8/8.
 */
var log4js = require('log4js');

log4js.configure({
	"appenders": [
		{
			"type": "file",
			"filename": "../logs/logs.log",
			"maxLogSize": 1024 * 1024 * 5,
			"backups": 10,
			"category": "logs"
		},
		{
			"type": "file",
			"filename": "../logs/logerror.log",
			"maxLogSize": 1024 * 1024 * 5,
			"backups": 10,
			"category": "logserror"
		}
	]
});
var logger = log4js.getLogger('logs');
logger.setLevel("INFO");

var loggerError = log4js.getLogger('logserror');
loggerError.setLevel("ERROR");

exports.logger =module.exports.logger = logger;
exports.loggerError =module.exports.loggerError = loggerError;
