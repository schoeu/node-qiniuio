/**
 * @param qiniu {Object} qiniu模块实例
 * @return {Function} 执行方法
 */
module.exports = function (qiniu) {
    /**
     * @param {String} key 需要删除的文件名
     * @return {Function} callback 成功回调
     * @return {Function} fail 失败回调
     */
    return function (key, callback, fail) {
        var qiniu_conf = qiniu.qiniu_conf || {};

        // Access Key 和 Secret Key
        qiniu.conf.ACCESS_KEY = qiniu_conf.ACCESS_KEY;
        qiniu.conf.SECRET_KEY = qiniu_conf.SECRET_KEY;

        // 空间名
        var bucket = qiniu_conf.BUCKET_NAME;

        // 构建client对象
        var client = new qiniu.rs.Client();

        // 删除资源
        client.remove(bucket, key, function(err, ret) {
            if (!err) {
                // 删除成功， 处理返回值
                if ('function' === typeof callback) {
                    callback(ret);
                }
            } else {
                // 删除失败， 处理返回代码
                if ('function' === typeof fail) {
                    fail(err);
                }
            }
        });

    }
};

