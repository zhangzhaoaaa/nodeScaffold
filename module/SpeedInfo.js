/**
 * Created by zhangmike on 16/8/8.
 */

var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var SpeedInfo = new Schema({
	name    : String
});


var SpeedInfo = mongoose.model('SpeedInfo', SpeedInfo);

module.exports = SpeedInfo;
