/**
 * @param qiniu {Object} qiniu模块实例
 * @param conf {Object} 用户配置
 * @return {Function} 执行方法
 */
module.exports = function (qiniu, conf){
  var qiniu_conf = conf || {};

  //Access Key 和 Secret Key
  qiniu.conf.ACCESS_KEY = qiniu_conf.ACCESS_KEY;
  qiniu.conf.SECRET_KEY = qiniu_conf.SECRET_KEY;

  //你要测试的空间， 并且这个key在你空间中存在
  var bucket = qiniu_conf.BUCKET_NAME;

  //构建上传策略函数，设置回调的url以及需要回调给业务服务器的数据
  function uptoken(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key);
    putPolicy.callbackUrl = qiniu_conf.CALLBACK_URL;
    putPolicy.callbackBody = 'filename=$(fname)&filesize=$(fsize)';
    return putPolicy.token();
  }

  /**
   * @param key {String} 上传后的文件名
   * @param filePath {String} 上传文件的本地路径
   * @param callback {Function} 成功后的回调
   * @param fail {Function} 执行失败后的回调
   * @return {Undefined}
   */
  return function (key, filePath, callback, fail) {
    //生成上传 Token
    var token = uptoken(bucket, key);
    //调用uploadFile上传
    var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(token, key, filePath, extra, function(err, ret) {
      if(!err) {
        // 上传成功， 处理返回值
        callback(ret);
      } else {
        // 上传失败， 处理返回代码
        fail(err);
      }
    });

  }
};