
let http = require('http')
let url  = require('url')
let fs = require('fs')


// 访问一个静态html页面
http.createServer((req, res)=> {
  let fileName = url.parse(req.url).pathname.substring(1);

  console.log("fileName: "+fileName);

  fs.readFile (fileName, (err, data)=> {
    if(err){
      res.writeHead(404, {'Content-Type': 'text/plain'});
    }else {
      res.writeHead(200, {'Content-Type': 'text/html'});
    }

    res.write(data.toString());

    res.end();
  });

}).listen(3000, '127.0.0.1', ()=> {
  console.log('服务已启动...');
});
