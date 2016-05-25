var path = require('path');

/**
 * @param qiniu {Object} qiniu模块实例
 * @return {Function} 执行方法
 */
module.exports = function (qiniu) {
    /**
     * @param {String} url 保存在空间的文件名
     * @param {String} flag 是否返回相对路径
     * @return {String} download URL
     */
    return function (url, flag) {
        var qiniu_conf = qiniu.qiniu_conf || {};
        var policy = new qiniu.rs.GetPolicy();
        var filePath = policy.makeRequest(url) || '';

        //Access Key 和 Secret Key
        qiniu.conf.ACCESS_KEY = qiniu_conf.ACCESS_KEY;
        qiniu.conf.SECRET_KEY = qiniu_conf.SECRET_KEY;

        if (flag) {
            return filePath;
        }
        return path.join(qiniu_conf.DOMAIN, filePath);
    }
};

