var http = require('http'); // httpオブジェクトのロード

function start3() {
  http.createServer(function(req, res) { // serverのコールバックで返す処理を定義
    console.log('server start...')
    res.writeHead(200, {
      "Content-type": "text/plain"
    });
    res.write('hello');
    res.end('\nend');
  }).listen(8989);
  console.log('TEST12010003')
}

exports.start = start3







/*

var http = require('http')// httpオブジェクトのロード
//var server = http.createServer();// Serverオブジェクトの作成

//server.on('request', doRequest); // requestイベントがあったらdoRequestを実行
//server.listen(8080);　// ポート8080でserverは待ち受ける
http.createServer(function(req, res){
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.write('Hello');
  res.end();
}).listen(8888);
console.log('Server Start...')

*/
