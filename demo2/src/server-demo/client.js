const http = require('http')


http.get('http://www.baidu.com', res=> {
  let data = '';
  res.on('data', chunk=> {
    data += chunk;
  });
  res.on('end', ()=> {
    console.log(data);
    // let result = JSON.parse (data);
    // console.log(result);
    // console.log(result.msg);
  })
});
