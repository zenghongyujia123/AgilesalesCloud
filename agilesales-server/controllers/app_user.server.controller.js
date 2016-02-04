/**
 * Created by zenghong on 16/1/20.
 */


'use strict';

var userService = require('./../services/all').app_user;
var cryptoLib = require('./../../libraries/crypto');
var cookieLib = require('./../../libraries/cookie');

exports.signin = function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  userService.signin(username, password, function (err, user) {
    if (err) {
      return res.send(err);
    }
    var token = cryptoLib.encrypToken({_id: user._id, time: new Date()}, 'secret');
    return res.send({access_token: token});
  });
};

exports.getMe = function (req, res, next) {
  return res.send(req.user);
};

exports.create = function (req, res, next) {

};

exports.multiCreate = function (req, res, next) {

};

exports.update = function (req, res, next) {

};

exports.delete = function (req, res, next) {

};

exports.nextUsers = function (req, res, next) {

};




