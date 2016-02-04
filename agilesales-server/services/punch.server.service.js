/**
 * Created by zenghong on 16/1/20.
 */
'use strict';

var appDb = require('./../../libraries/mongoose').appDb,
  error = require('./../../errors/all'),
  Punch = appDb.model('Punch'),
  PunchDetail = appDb.model('PunchDetail');

exports.punch = function (info, todayPunch, callback) {
  if (info.type === 'onduty') {
    if (todayPunch.onduty.is_done === true) {
      return callback(null, todayPunch)
    }
    todayPunch.onduty.photo = info.photo;
    todayPunch.onduty.is_done = true;
    todayPunch.onduty.done_time = new Date();
    todayPunch.markModified('onduty');
  }
  if (info.type === 'offduty') {
    if (todayPunch.offduty.is_done === true) {
      return callback(null, todayPunch)
    }

    todayPunch.offduty.photo = info.photo;
    todayPunch.offduty.is_done = true;
    todayPunch.offduty.done_time = new Date();
    todayPunch.markModified('offduty');
  }

  todayPunch.save(function (err, saveTodayPunch) {
    if (err || !saveTodayPunch) {
      return callback({err: error.system.db_error});
    }
    return callback(null, saveTodayPunch);
  });
};

exports.getPunchsByUser = function () {

};



