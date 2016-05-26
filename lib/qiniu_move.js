var qiniu = require("qiniu");

qiniu.conf.ACCESS_KEY = 'Access_Key';
qiniu.conf.SECRET_KEY = 'Secret_Key';

//构建bucketmanager对象
var client = new qiniu.rs.Client();

//你要测试的空间， 并且这个key在你空间中存在
bucket = 'Bucket_Name';
key = 'nodejs-logo.png';

//移动到的目标空间名和重命名的key
dstbucket = 'dst_bucket'
dstkey = 'dst_key'

//移动资源
client.move(bucket, key, dstbucket, deskey, function(err, ret) {
    if (!err) {
        // ok
    } else {
        console.log(err);
    }
});

