var path = require('path');

/**
 * @param qiniu {Object} qiniu模块实例
 * @param conf {Object} 用户配置
 * @return {Function} 执行方法
 */
module.exports = function (qiniu) {
    /**
     * @param {String} url 保存在空间的文件名
     * @return {String} download URL
     */
    return function (url) {
        var qiniu_conf = qiniu.qiniu_conf || {};

        //Access Key 和 Secret Key
        qiniu.conf.ACCESS_KEY = qiniu_conf.ACCESS_KEY;
        qiniu.conf.SECRET_KEY = qiniu_conf.SECRET_KEY;

        //构建私有空间的链接

        var policy = new qiniu.rs.GetPolicy();
        var filePath = policy.makeRequest(url) || '';
        return path.join(qiniu_conf.DOMAIN, filePath);
    }
};

