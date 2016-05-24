/**
 * node-qiniuio入口文件
 * **/

var qiniu = require("qiniu");
var getFileInfo = require('./lib/qiniu_getfileinfo');
var uploadCb = require('./lib/qiniu_upload_cb');
var download = require('./lib/qiniu_download');
var upload = require('./lib/quniu_upload');
var qiniu_conf = {
    "ACCESS_KEY" : "",
    "SECRET_KEY" : "",
    "BUCKET_NAME": "",
    "CALLBACK_URL": "",
    "DOMAIN": ""
};

/**
 * 合并对象
 * */
function extend() {
    var idx = 0;
    var deep = false;
    var temp = {};
    var tar = arguments[idx] || {};
    if (typeof arguments[idx] === 'boolean') {
        tar = arguments[++idx];
        deep = arguments[idx];
    }

    while(temp = arguments[++idx]) {
        if ($.isPlainObject(temp)) {
            for (var i in temp) {
                var item = temp[i];
                if (deep) {
                    tar[i] = item;
                }
                else if (tar[i] === undefined){
                    tar[i] = item;
                }
            }
        }
    }
    return tar;
}

/**
 * 暴露config接口给用户
 * @param {Object} obj 配置的对象
 * */
function setConfig(obj){
    if ('object' === typeof obj) {
        throw new Error('please input valid config object.');
    }

    extend(qiniu_conf, obj);
}

module.exports = {
    getFileInfo: getFileInfo(qiniu, qiniu_conf),
    upload: upload(qiniu, qiniu_conf),
    uploadCb: uploadCb(qiniu, qiniu_conf),
    download: download(qiniu, qiniu_conf)
};


