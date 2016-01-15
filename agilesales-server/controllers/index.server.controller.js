/**
 * Created by zenghong on 16/1/7.
 */
var path = require('path');
'use strict';
exports.index = function (req, res, next) {
  return res.sendfile(path.join(__dirname, '../../agilesales-web/homepage/index.html'));
};

exports.webAppIndex = function (req, res, next) {
  return res.sendfile(path.join(__dirname, '../../agilesales-web/webapp/index.html'));
};

exports.download = function (req, res, next) {
  return res.download(path.join(__dirname, '../../agilesales-client/platforms/android/build/outputs/apk/android-armv7-debug.apk'));
};