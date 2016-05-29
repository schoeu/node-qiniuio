/**
 * @param qiniu {Object} qiniu模块实例
 * @return {Function} 执行方法
 */
module.exports = function (qiniu){

    /**
     * @param key {String} 上传后的文件名
     * @param filePath {String} 上传文件的本地路径
     * @param callback {Function} 成功后的回调
     * @param fail {Function} 执行失败后的回调
     * @return {Undefined}
     */
    return function (key, filePath, callback, fail) {
        var qiniu_conf = qiniu.qiniu_conf || {};

        // Access Key 和 Secret Key
        qiniu.conf.ACCESS_KEY = qiniu_conf.ACCESS_KEY;
        qiniu.conf.SECRET_KEY = qiniu_conf.SECRET_KEY;

        // 空间名
        var bucket = qiniu_conf.BUCKET_NAME;

        // 生成上传 Token
        var token = uptoken(bucket, key);

        var extra = new qiniu.io.PutExtra();

        // 构建上传策略函数
        function uptoken(bucket, key) {
            var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
            return putPolicy.token();
        }

        qiniu.io.putFile(token, key, filePath, extra, function(err, ret) {
            if(!err) {
                // 上传成功， 处理返回值
                if ('function' === typeof callback) {
                    callback(ret);
                }
            } else {
                // 上传失败， 处理返回代码
                if ('function' === typeof fail) {
                    fail(err);
                }
            }
        });
    };
};
