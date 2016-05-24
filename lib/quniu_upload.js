var qiniu = require("qiniu");

var qiniu_conf = require('./qiniu_config.json');

//Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = qiniu_conf.ACCESS_KEY;
qiniu.conf.SECRET_KEY = qiniu_conf.SECRET_KEY;

//你要测试的空间， 并且这个key在你空间中存在
var bucket = qiniu_conf.BUCKET_NAME;

//上传到七牛后保存的文件名
//key = 'my-nodejs-logo.png';

//构建上传策略函数
function uptoken(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
    return putPolicy.token();
}

//要上传文件的本地路径
//filePath = './ruby-logo.png'

//构造上传函数
function uploadFile(uptoken, key, localFile, callback, fail) {
    var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if(!err) {
            // 上传成功， 处理返回值
            callback(ret);
        } else {
            // 上传失败， 处理返回代码
            console.log(err);
            fail(err);
        }
    });
}

/**
 * @param key {String} 上传后的文件名
 * @param filePath {String} 上传文件的本地路径
 * @param callback {Function} 成功后的回调
 * @param fail {Function} 执行失败后的回调
 * @return {Undefined}
 */
module.exports = function (key, filePath, callback, fail) {
    //生成上传 Token
    var token = uptoken(bucket, key);

    //调用uploadFile上传
    uploadFile(token, key, filePath, callback, fail);
};

