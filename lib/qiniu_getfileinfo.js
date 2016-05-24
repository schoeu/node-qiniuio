
/**
 * @param {Object} qiniu qiniu对象实例
 * @param {Object} conf qiniu配置
 * @return {Function} 获取文件信息的函数
 */
module.exports = function(qiniu, conf){
  var qiniu_conf = conf || {};

  var bucket = qiniu_conf.BUCKET_NAME;

  //Access Key 和 Secret Key
  qiniu.conf.ACCESS_KEY = qiniu_conf.ACCESS_KEY;
  qiniu.conf.SECRET_KEY = qiniu_conf.SECRET_KEY;

  //构建bucketmanager对象
  var client = new qiniu.rs.Client();

  function getFileInfo(key, getInfoCallback) {
    client.stat(bucket, key, getInfoCallback);
  }

  return getFileInfo;
};

