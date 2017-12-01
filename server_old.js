var http = require('http'); // httpモジュール
  fs = require('fs');
var settings = require('./settings.js') // 設定ファイルの読み込み
console.log(settings)
var server = http.createServer(); // サーバー　作成
server.on('request', function(req, res) { // サーバーに対して命令を紐づける
  fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function(err, data) {// ここのfunctionがコールバック関数
    if (err){
      res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.write("not found");
      return res.end();
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data); // 読み込まれたデータがfunction(err,data)~によりdataに渡っているのでdataを表示する
    res.end();
  });
});
server.listen(settings.port, settings.host); // サーバの待ち受けを定義
console.log("server listening..");
