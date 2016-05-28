/**
 * node-qiniuio入口文件
 * */

var qiniu = require("qiniu");
var getFileInfo = require('./lib/qiniu_getfileinfo');
var uploadCb = require('./lib/qiniu_upload_cb');
var download = require('./lib/qiniu_download');
var upload = require('./lib/quniu_upload');
var copy = require('./lib/quniu_copy');
var qnDelete = require('./lib/quniu_delete');
var move = require('./lib/quniu_move');

/**
 * ACCESS_KEY: 访问密钥
 * SECRET_KEY: 密钥
 * BUCKET_NAME: 空间名称
 * CALLBACK_URL: 上传使用的回调URL
 * DOMAIN: qiniu空间域名
 * */
var qiniu_conf = {
    "ACCESS_KEY" : "",
    "SECRET_KEY" : "",
    "BUCKET_NAME": "",
    "CALLBACK_URL": "",
    "DOMAIN": ""
};

/**
 * 暴露config接口给用户
 * @param {Object} obj 配置的对象
 * */
function setConfig(obj){
    if ('object' !== typeof obj) {
        throw new Error('please input valid config object.');
    }

    Object.assign(qiniu_conf, obj);
    qiniu.qiniu_conf = qiniu_conf;
}

module.exports = {
    getFileInfo: getFileInfo(qiniu),
    upload: upload(qiniu),
    uploadCb: uploadCb(qiniu),
    download: download(qiniu),
    copy: copy(qiniu),
    qnDelete: qnDelete(qiniu),
    move: move(qiniu),
    config: setConfig
};


