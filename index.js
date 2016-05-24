/**
 * node-qiniuio入口文件
 * **/

var getFileInfo = require('./lib/qiniu_getfileinfo');
var uploadCb = require('./lib/qiniu_upload_cb');
var download = require('./lib/qiniu_download');
var upload = require('./lib/quniu_upload');
var qiniu_conf = require('./lib/qiniu_config.json');

module.exports = {
    getFileInfo: getFileInfo,
    upload: upload,
    uploadCb: uploadCb,
    download: download,
    config: qiniu_conf
};


