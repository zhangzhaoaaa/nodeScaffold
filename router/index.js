/**
 * Created by zhangmike on 16/8/8.
 */
//var logger = require('../lib/log').logger;
import speedInfo from '../module/SpeedInfo';

module.exports = function(Router) {
	Router.all('/', function(req, res) {
		res.redirect('/index');
	});
	Router.get('/index', function (req, res) {
		/*var meixin = new SpeedInfo({ name: 'MeiXin' });
		meixin.save(function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log('meow');
			}
		});*/
		res.render('index', {
			title: '配置页面'
		});
	});

	Router.get('/start', function (req, res) {
		/*var meixin = new SpeedInfo({ name: 'MeiXin' });
		 meixin.save(function (err) {
		 if (err) {
		 console.log(err);
		 } else {
		 console.log('meow');
		 }
		 });*/
		res.send({
			msg: '启动成功'
		});
	});

	Router.get('/close', function (req, res) {
		/*var meixin = new SpeedInfo({ name: 'MeiXin' });
		 meixin.save(function (err) {
		 if (err) {
		 console.log(err);
		 } else {
		 console.log('meow');
		 }
		 });*/
		res.send({
			msg: '关闭成功'
		});
	});

	return Router;
}