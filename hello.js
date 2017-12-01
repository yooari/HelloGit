// console.log("hello world");

// none blocking
/*
setTimeout(function(){
  console.log("hello");
}, 5000);// これがコールバック関数で5000msec後に呼び出す
console.log("world");
*/

// blocking
// node.jsはメインのスレッドがひとつなのでこのようなひとつのスレッドを占有する
// 書き方はNG
var start = new Date().getTime();
while (new Date().getTime() < start + 1000); // 現在時刻から1000msecたつまでループ
console.log("world")

// 時間かかりそうな処理はコールバック関数で実装する
