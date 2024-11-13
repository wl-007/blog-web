---
title:  node
order: 1
group:
  title: node

---

# Node.js是什么

Node.js是一个基于V8 JavaScript引擎的JavaScript运行时环境;

我们编写的JavaScript代码会经过V8引擎，再通过Node.js的Bindings，将任务放到Libuv的事件循环中；

libuv（Unicorn Velociraptor—独角伶盗龙）是使用C语言编写的库；

 libuv提供了事件循环、文件系统读写、网络IO、线程池等等内容；

# 内置模块fs

## 文件读取

```js
const fs = require('fs')
const res1 = fs.readFileSync('./aaa.txt', {
  encoding: 'utf8'
})
console.log(res1)
```

## 文件的写入

```js
const fs = require('fs')

// 1.有一段内容(客户端传递过来http/express/koa)
const content = "hello world"

// 2.文件的写入操作
fs.writeFile('./ccc.txt', content, {
  encoding: 'utf8',
  flag: 'a+'
}, (err) => {
  if (err) {
    console.log("文件写入错误:", err)
  } else {
    console.log("文件写入成功")
  }
}
```

## 创建文件夹

```js
const fs = require('fs')

// 创建文件夹 directory
fs.mkdir('./why', (err) => {
  console.log(err)
})
```

## 读取文件夹

```js
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    files.forEach(item => {
      if (item.isDirectory()) {
        readDirectory(`${path}/${item.name}`)
      } else {
        console.log("获取到文件:", item.name)
      }
    })
  })
}
readDirectory('./data')
```

## 对文件重命名

```js
const fs = require('fs')

// 1.对文件夹进行重命名
fs.rename('./data', './kobe', (err) => {
  console.log("重命名结果:", err)
})

// 2.对文件重命名
fs.rename('./ccc.txt', './ddd.txt', (err) => {
  console.log("重命名结果:", err)
})
```



# events

Node中的核心API都是基于异步事件驱动的

## 基本使用

```js
// events模块中的事件总线
const EventEmitter = require('events')

// 创建EventEmitter的实例
const emitter = new EventEmitter()

// 监听事件
emitter.on('who', () => {
  console.log('监听who的事件')
})

// 发射事件
setTimeout(() => {
  emitter.emit('who')
}, 2000);
```

## 取消事件监听

```js
  // 取消事件监听
  emitter.off('who', handleFn)
```

## 传递参数

```js
// 监听事件
function handleFn(name, age, height) {
  console.log('监听who的事件', name, age, height)
}
emitter.emit('who', "coderWho", 18, 1.88)
```

## 其他方法

```js
const EventEmitter = require('events')

const ee = new EventEmitter()

// 1.获取所有监听事件的名称
console.log(ee.eventNames())

// 2.获取监听最大的监听个数
console.log(ee.getMaxListeners())

// 3.获取某一个事件名称对应的监听器个数
console.log(ee.listenerCount('why'))

// 4.获取某一个事件名称对应的监听器函数(数组)
console.log(ee.listeners('why'))

// 1.once: 事件监听只监听一次(第一次发射事件的时候进行监听)
ee.once("why", () => {
  console.log("on监听why")
})

// 2.prependListener: 将事件监听添加到最前面
ee.prependListener('why', () => {
  console.log('on监听why2')
})

ee.emit('why')

// 3.移除所有的事件监听
// 不传递参数的情况下, 移除所有事件名称的所有事件监听
// 在传递参数的情况下, 只会移除传递的事件名称的事件监听
ee.removeAllListeners('why')
```

# Buffer

## 创建Buffer

```js
const fs = require('fs')

// 创建Buffer
const buf2 = Buffer.from('world')
console.log(buf2)

// 创建Buffer(字符串中包含中文)
const buf3 = Buffer.from('你好啊hhhhh')
console.log(buf3)
console.log(buf3.toString())

// 手动指定的Buffer创建过程的编码
// 编码操作
const buf4 = Buffer.from('哈哈哈', 'utf16le')
console.log(buf4)
// 解码操作
console.log(buf4.toString('utf16le'))

// 8个字节大小的buffer内存空间
const buf = Buffer.alloc(8)
//手动对每个字节进行操作
buf[0] = 100
buf[1] = 0x66
console.log(buf)
console.log(buf.toString())

buf[2] = 'm'.charCodeAt()
console.log(buf)
```

## 从文件中读取buffer

```js
fs.readFile('./aaa.txt', { encoding: 'utf-8' }, (err, data) => {
  console.log(data)
})

//读取一个图片的二进制(node中有一个库sharp)
fs.readFile('./kobe02.png', (err, data) => {
  console.log(data)
})
```

# Stream

## 通过流读取文件

```js
const readStream = fs.createReadStream('./aaa.txt', {
 start: 8,
 end: 22,
 highWaterMark: 3
})

readStream.on('data', (data) => {
  console.log(data.toString())

  readStream.pause()

  setTimeout(() => {
    readStream.resume()
  }, 2000)
})
```

## 通过事件监听获取数据

```js
const fs = require('fs')

// 1.通过流读取文件
const readStream = fs.createReadStream('./aaa.txt', {
 start: 8,
 end: 22,
 highWaterMark: 3
})


// 2.监听读取到的数据
readStream.on('data', (data) => {
  console.log(data.toString())
})

// 3.补充其他的事件监听
readStream.on('open', (fd) => {
  console.log('通过流将文件打开~', fd)
})

readStream.on('end', () => {
  console.log('已经读取到end位置')
})

readStream.on('close', () => {
  console.log('文件读取结束, 并且被关闭')
})
```

## 写入流

```js
// 创建一个写入流
const writeStream = fs.createWriteStream('./ccc.txt', {
  flags: 'r+'
})

writeStream.write('ccccc')
writeStream.write('aaaa')
writeStream.on('open', (fd) => {
  console.log('文件被打开', fd)
})

writeStream.on('finish', () => {
  console.log('写入完成了')
})

writeStream.on('close', () => {
  console.log('文件被关闭~')
})

writeStream.close()
```

## 文件拷贝

```js
const fs = require('fs')

// 1.方式一: 一次性读取和写入文件
fs.readFile('./foo.txt', (err, data) => {
  console.log(data)
  fs.writeFile('./foo_copy01.txt', data, (err) => {
    console.log('写入文件完成', err)
  })
})


// 2.方式二: 创建可读流和可写流
const readStream = fs.createReadStream('./foo.txt')
const writeStream = fs.createWriteStream('./foo_copy02.txt')

readStream.on('data', (data) => {
  writeStream.write(data)
})

readStream.on('end', () => [
  writeStream.close()
])

// 3.在可读流和可写流之间建立一个管道
const readStream = fs.createReadStream('./foo.txt')
const writeStream = fs.createWriteStream('./foo_copy03.txt')

readStream.pipe(writeStream)
```

# http

## http服务器的基本使用

```js
const http = require('http')

// 创建一个http对应的服务器
const server = http.createServer((request, response) => {
  response.end("Hello World")
})

// 开启对应的服务器, 并且告知需要监听的端口

server.listen(8000, () => {
  console.log('服务器已经开启成功了~')
})
```

## request对象

```js
const http = require('http')

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // request对象中包含哪些信息?
  // 1.url信息
  console.log(req.url)
  // 2.method信息(请求方式)
  console.log(req.method)
  // 3.headers信息(请求信息)
  console.log(req.headers)

  res.end('hello world aaaa')
})
```

## 解析-query参数

```js
const http = require('http')
const url = require('url')
const qs = require('querystring')

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 1.参数一: query类型参数
  // /home/list?offset=100&size=20
  // 1.1.解析url
  const urlString = req.url
  const urlInfo = url.parse(urlString)

  // 1.2.解析query: offset=100&size=20
  const queryString = urlInfo.query
  const queryInfo = qs.parse(queryString)
  console.log(queryInfo.offset, queryInfo.size)

  res.end('hello world aaaa bbb')
})
```

## 解析-body参数

```js
// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 获取参数: body参数
  req.setEncoding('utf-8')

  // request对象本质是上一个readable可读流
  req.on('data', (data) => {
    const dataString = data
    // 获取参数
    const loginInfo = JSON.parse(dataString)
  })
})
```

## header的信息

```js
const server = http.createServer((req, res) => {
  console.log(req.headers)
  console.log(req.headers['content-type'])

  // cookie/session/token
  const token = req.headers['authorization']
  console.log(token)

  res.end('查看header的信息~')
})
```

## 响应对象

```js
// 1.响应数据方式一: write
  res.write("Hello World")
  res.write("哈哈哈哈")

// 2.响应数据方式二: end
  res.end("本次写出已经结束")

// 响应状态码
 // 1.方式一: statusCode
  res.statusCode = 403

// 2.方式二: setHead 响应头
  res.writeHead(401)

// 设置header信息

// 1.单独设置某一个header
  res.setHeader('Content-Type', 'text/plain;charset=utf8;')

// 2.和http status code一起设置
  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf8;'
  })
```









