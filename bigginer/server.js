var http = require("http"); // httpモジュールを要求している。これによりhttp変数でhttpモジュールにアクセスできるようになった。

http.createServer(function(request, response) {//httpモジュールが提供する関数createServerを呼び出し。この関数はオブジェクトを返して、そのオブジェクトはlistenというメソッドを持つ
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);　//listenメソッドはポート番号を数値の引数として受けて、httpサーバがそのポート番号で待ち受けする
