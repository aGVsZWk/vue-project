const http = require('http')
const urlModule = require('url') // 这个核心模块, 帮我们解析 url 地址, 从而拿到 pathname query

const server = http.createServer()
server.on('request', function (req, res) {
  // const url = req.url
  const {pathname: url, query} = urlModule.parse(req.url, true)

  if (url === '/getscript') {
    // 拼接一个合法的JS脚本, 这里拼接的是一个方法的调用
    // var scriptStr = 'show()'

    var data = {
      name: 'xjj',
      age: 18,
      gender: '女孩子'
    }
    'show(123)'
    var scriptStr = `${query.callback}(${JSON.stringify(data)})`

    // res.end 发送给客户端, 客户端把这个字符串, 当做JS代码去解析执行
    console.log(scriptStr);
    res.end(scriptStr)
  } else {
    res.end('404')
  }
})
server.listen(8888, function () {
  console.log('server listen at http://127.0.0.1:8888')
})
