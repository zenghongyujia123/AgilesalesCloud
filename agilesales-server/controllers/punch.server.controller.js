/**
 * Created by zenghong on 16/1/20.
 */
'use strict';
var punchService = require('./../services/all').punch;

exports.getTodayPunch = function (req, res, next) {
  return res.send(req.todayPunch);
};

exports.punch = function (req, res, next) {
  punchService.punch(
    req.body.info,
    req.todayPunch,
    function (err, result) {
      if (err) {
        return res.send(err);
      }
      return res.send(result);
    });
};