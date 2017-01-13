/**
 * Created by liuqingling on 16/6/13.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack/example');
//var config = require('./webpack/diary');
config.entry.example.unshift("webpack-dev-server/client?http://0.0.0.0:8888/");
var server = new WebpackDevServer(webpack(config), {
  quiet: true,
  contentBase: __dirname,
  stats: {colors: true},
  publicPath: "/",
  compress: true,
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
server.listen(8888,'0.0.0.0',function (err) {
  if(err)
     console.log(err)

});
