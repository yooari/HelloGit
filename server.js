var http = require('http'), // httpモジュール
    fs = require('fs'),
    ejs = require('ejs');
var settings = require('./settings.js') // 設定ファイルの読み込み
console.log(settings)
var server = http.createServer(); // サーバー　作成
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8') // ブロッキングな命令
var n = 0
server.on('request', function(req, res) { // サーバーに対して命令を紐づける
  n++;
  console.log(n)
  var data = ejs.render(template, {
      title: "hello",
      content: "<strong>world!</strong>",
      n: n
  });

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(data); // 読み込まれたデータがfunction(err,data)~によりdataに渡っているのでdataを表示する
  res.end();

});
server.listen(settings.port, settings.host); // サーバの待ち受けを定義
console.log("server listening..");
