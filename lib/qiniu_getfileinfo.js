/**
 * @param {Object} qiniu qiniu对象实例
 * @return {Function} 获取文件信息的函数
 */
module.exports = function(qiniu){

  /**
   * @param {String} key 文件名
   * @param {Function} callback 获取文件信息后回调
   */
  function getFileInfo(key, callback) {
    var qiniu_conf = qiniu.qiniu_conf || {};

    var bucket = qiniu_conf.BUCKET_NAME;

    // Access Key 和 Secret Key
    qiniu.conf.ACCESS_KEY = qiniu_conf.ACCESS_KEY;
    qiniu.conf.SECRET_KEY = qiniu_conf.SECRET_KEY;

    // 构建client对象
    var client = new qiniu.rs.Client();
    client.stat(bucket, key, callback);
  }

  return getFileInfo;
};

