var qiniu = require("qiniu");

qiniu.conf.ACCESS_KEY = 'Access_Key';
qiniu.conf.SECRET_KEY = 'Secret_Key';

//构建bucketmanager对象
var client = new qiniu.rs.Client();

//你要测试的空间， 并且这个key在你空间中存在
bucket = 'Bucket_Name';
key = 'nodejs-logo.png';

//删除资源
client.remove(bucket, key, function(err, ret) {
    if (!err) {
        // ok
    } else {
        console.log(err);
    }
});

