var qiniu = require("qiniu");

var qiniu_conf = require('./qiniu_config.json');

//Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = qiniu_conf.ACCESS_KEY;
qiniu.conf.SECRET_KEY = qiniu_conf.SECRET_KEY;

//构建bucketmanager对象
var client = new qiniu.rs.Client();

//你要测试的空间， 并且这个key在你空间中存在
bucket = qiniu_conf.BUCKET_NAME;
// key = 'css/common/common.css';

//获取文件信息
// client.stat(bucket, key, function(err, ret) {
//   if (!err) {
//     console.log(ret.hash, ret.fsize, ret.putTime, ret.mimeType);
//   } else {
//     console.log(err);
//   }
// });

function getFileInfo(key, getInfoCallback) {
  client.stat(bucket, key, getInfoCallback);
}


/**
 * @param 
 */
module.exports = getFileInfo;

