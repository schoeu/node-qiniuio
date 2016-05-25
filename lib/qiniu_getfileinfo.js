/**
 * @param {Object} qiniu qiniu对象实例
 * @return {Function} 获取文件信息的函数
 */
module.exports = function(qiniu){

  function getFileInfo(key, getInfoCallback) {
    var qiniu_conf = qiniu.qiniu_conf || {};

    var bucket = qiniu_conf.BUCKET_NAME;

    //Access Key 和 Secret Key
    qiniu.conf.ACCESS_KEY = qiniu_conf.ACCESS_KEY;
    qiniu.conf.SECRET_KEY = qiniu_conf.SECRET_KEY;

    //构建bucketmanager对象
    var client = new qiniu.rs.Client();
    client.stat(bucket, key, getInfoCallback);
  }

  return getFileInfo;
};

