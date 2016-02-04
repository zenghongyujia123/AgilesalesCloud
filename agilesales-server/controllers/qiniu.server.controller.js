/**
 * Created by zenghong on 16/2/4.
 */
var _ = require('lodash'),
  qiniu = require('qiniu');

qiniu.conf.ACCESS_KEY ='l4QmpjDXDiUySvlORpaxcU8MjJz1X3qRx1I_sTRu' ;
qiniu.conf.SECRET_KEY = 'wPfmnZ9usqp0D3rxBF0MNKlj3NBd0iLH7Hxk8kkS';

exports.uploadToken = function (req, res, next) {
  var token = new qiniu.rs.PutPolicy('zhuzhuqs').token();
  res.send({token: token});
};