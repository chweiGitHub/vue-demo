let user = require ('./User');

console.log(`${user.userName}-${user.say()}`);

let http = require('http');
let url  = require('url');
let util = require('util');

http.createServer((req, res)=> {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain', 'charset=utf-8');
  res.end('hello node.js. ' + util.inspect(url.parse(req.url))); // 输出请求的url .  util.inspect 将url类转换成一个字符串。
}).listen(3000, '127.0.0.1', ()=> {
  console.log(`服务器已在运行。。。`);
})
