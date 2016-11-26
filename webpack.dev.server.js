/**
 * Created by liuqingling on 16/6/13.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
//var config = require('./webpack/example');
var config = require('./webpack/diary');
//config.entry.app.unshift("webpack-dev-server/client?http://localhost:3000/", "webpack/hot/dev-server");
var server = new WebpackDevServer(webpack(config), {
  quiet: false,
  contentBase: __dirname,
  hot: true,
  //    "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"},
  stats: {colors: true},
  publicPath: "/",
  noInfo: false,
  compress: true,
  //proxy: {
  //    "/api": {
  //        target: 'http://www.weather.com.cn/data/sk/101010100.html',
  //        secure: false,
  //    },
  //
  //    //'/api/*':'http://localhost:3000/'
  //},
  //headers: { "Host": "h5.api.esn.ren:6061"},
});
server.app.get('/api', function (req, res) {
  res.json({
    "weatherinfo": {
      "city": "北京",
      "cityid": "1",
      "temp": "200度",
      "WD": "12",
      "WS": "22",
      "SD": "22",
      "WSE": "33",
      "time": "12:43",
      "isRadar": "1",
      "Radar": "JC_RADAR_AZ9010_JB",
      "njd": "暂无实况",
      "qy": "1011",
      "rain": "0"
    }
  });

});
server.listen(8888);
