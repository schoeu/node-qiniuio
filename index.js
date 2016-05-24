var getFileInfo = require('./lib/qiniu_getfileinfo');
var uploadCb = require('./lib/qiniu_upload_cb');
var download = require('./lib/qiniu_download');
var upload = require('./lib/quniu_upload');
var qiniu_conf = require('./lib/qiniu_config.json');

module.exports = {
    // @example
    // qiniu.getFileInfo('css/common/common.css', function (err, info) {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log(info);
    // });
    getFileInfo: getFileInfo,
    upload: upload,
    uploadCb: uploadCb,
    download: download,
    config: qiniu_conf
};


