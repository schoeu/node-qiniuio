var qiniu = require("qiniu");
var qiniu_conf = require('./qiniu_config.json');
var path = require('path');

//Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = qiniu_conf.ACCESS_KEY;
qiniu.conf.SECRET_KEY = qiniu_conf.SECRET_KEY;

//构建私有空间的链接

var policy = new qiniu.rs.GetPolicy();
/**
 * @param {String} url 保存在空间的文件名
 * @return {String} download URL
 */
module.exports = function (url) {
    var filePath = policy.makeRequest(url) || '';
    return path.join(qiniu_conf.DOMAIN, filePath);
};

