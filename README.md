# node-qiniuio

> qiniu云存储API封装

## 安装

``` 
npm install node-qiniuio

```

## APIS

- config (配置接口所需参数)
- getFileInfo (获取云端文件信息)
- upload (上传文件)
- uploadCb (上传文件&回调)
- download (获取文件下载地址)
- delete (删除文件)
- move (移动文件)

## Examples

### config

> 配置操作qiniuAPI所需变量,其中 ACCESS_KEY，SECRET_KEY，BUCKET_NAME为必选项

``` javascript
// 引入node-qiniuio模块
var qiniuio = require('node-qiniuio');

/**
* 配置变量，调用不同API，需要配置不同变量
* 其中 ACCESS_KEY，SECRET_KEY，BUCKET_NAME为必选项
* ACCESS_KEY: 访问密钥
* SECRET_KEY: 密钥
* BUCKET_NAME: 空间名称
*/
qiniuio.config({
  "ACCESS_KEY" : "your_access_key",
  "SECRET_KEY" : "your_secret_key",
  "BUCKET_NAME": "your_bucket_name"
});


```


### getFileInfo

> 获取文件信息API

``` javascript
// 引入node-qiniuio模块
var qiniuio = require('node-qiniuio');

qiniuio.config({
  "ACCESS_KEY" : "your_access_key",
  "SECRET_KEY" : "your_secret_key",
  "BUCKET_NAME": "your_bucket_name"
});

/**
* @param {String} key qiniu对象实例
* @param {Function} callback 获取文件信息后回调
*/
qiniuio.getFileInfo('filename.png', function (err, rs){
    if(err) {
       //出错处理逻辑
    }
    // rs为文件信息对象
});

```

### upload

> 上传文件API

``` javascript
// 引入node-qiniuio模块
var qiniuio = require('node-qiniuio');
var filepath = '/Users/schoeu/Downloads/svn/test';

qiniuio.config({
  "ACCESS_KEY" : "your_access_key",
  "SECRET_KEY" : "your_secret_key",
  "BUCKET_NAME": "your_bucket_name"
});

/**
 * @param key {String} 上传后的文件名
 * @param filePath {String} 上传文件的本地路径
 * @param callback {Function} 成功后的回调
 * @param fail {Function} 执行失败后的回调
 * @return {Undefined}
 */

qiniuio.upload('filename.png',filepath, function (rs){
    // rs为文件上传成功后信息
}, function (err){
    // 上传失败后回调,可选.err为错误对象
});

```

### uploadCb

> 上传&回调API

``` javascript
// 引入node-qiniuio模块
var qiniuio = require('node-qiniuio');
var filepath = '/Users/schoeu/Downloads/svn/test';

qiniuio.config({
  "ACCESS_KEY" : "your_access_key",
  "SECRET_KEY" : "your_secret_key",
  "BUCKET_NAME": "your_bucket_name",
  "CALLBACK_URL": "http://youdomain/callback",
});

/**
 * @param key {String} 上传后的文件名
 * @param filePath {String} 上传文件的本地路径
 * @param callback {Function} 成功后的回调
 * @param fail {Function} 执行失败后的回调
 * @return {Undefined}
 */

qiniuio.uploadCb('filename.png',filepath, function (rs){
    // rs为文件上传成功后信息
}, function (err){
    // 上传失败后回调,可选.err为错误对象
});

```

### download


``` javascript
// 引入node-qiniuio模块
var qiniuio = require('node-qiniuio');
var filepath = '/Users/schoeu/Downloads/svn/test';

qiniuio.config({
  "ACCESS_KEY" : "your_access_key",
  "SECRET_KEY" : "your_secret_key",
  "BUCKET_NAME": "your_bucket_name",
  "CALLBACK_URL": "http://youdomain/callback",
});

/**
 * @param {String} url 保存在空间的文件名
 * @param {String} flag 是否返回相对路径
 * @return {String} download URL
 */
var downloadUrl = qiniuio.download('filename.png');

```


## License

    (The MIT License)

    Copyright (c) 2010-2013 Will Wen Gunn <willwengunn@gmail.com> and other contributors

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    'Software'), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
    CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



