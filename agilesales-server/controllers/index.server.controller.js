/**
 * Created by zenghong on 16/1/7.
 */
var path = require('path');
'use strict';
exports.index = function (req, res, next) {
  return res.send({version: '1000'});
};

exports.download = function (req, res, next) {
  return res.download(path.join(__dirname, '../../agilesales-client/platforms/android/build/outputs/apk/android-armv7-debug.apk'));
};