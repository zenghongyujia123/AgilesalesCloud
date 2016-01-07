/**
 * Created by zenghong on 16/1/7.
 */
'use strict';
exports.index = function (req, res, next) {
  return res.send({version: '1000'});
};