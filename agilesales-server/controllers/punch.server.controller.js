/**
 * Created by zenghong on 16/1/20.
 */
'use strict';

exports.getTodayPunch = function (req, res, next) {
  return res.send(req.todayPunch);
};