/**
 * Created by zenghong on 16/1/7.
 */
var path = require('path');
var _ = require('lodash');
var cookieLib = require('./../../libraries/cookie');
'use strict';
exports.index = function (req, res, next) {
  return res.sendfile(path.join(__dirname, '../../agilesales-web/homepage/index.html'));
};

exports.webAppIndex = function (req, res, next) {
  var cookie = cookieLib.getCookie(req);
  console.log(cookie);

  return res.render(path.join(__dirname, '../../agilesales-web/webapp/index.html'), {test: cookie.access_token});
};

exports.download = function (req, res, next) {
  return res.download(path.join(__dirname, '../../agilesales-client/platforms/android/build/outputs/apk/android-armv7-debug.apk'));
};


exports = _.extend(exports, {
  user: require('./user'),
  area: require('./area'),
  card: require('./card'),
  people: require('./people'),
  customer: require('./customer'),
  daily: require('./daily'),
  dashboard: require('./dashboard'),
  photo: require('./photo'),
  product: require('./product'),
  punch: require('./punch'),
  shop: require('./shop')
});