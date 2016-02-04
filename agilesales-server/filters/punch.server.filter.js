/**
 * Created by zenghong on 16/2/4.
 */
/**
 * Created by zenghong on 16/1/20.
 */
'use strict';
var error = require('./../../errors/all');
var moment = require('moment');
var appDb = require('./../../libraries/mongoose').appDb,
  PunchDetail = appDb.model('PunchDetail'),
  Punch = appDb.model('Punch');


exports.requireTodayPunch = function (req, res, next) {
  var user = req.user;
  var today = moment().format("MM-DD-YYYY");

  Punch.findOne({'user._id': user._id.toString(), date: today}).exec(function (err, punch) {
    if (err) {
      return res.send({err: error.system.db_error});
    }

    if (!punch) {
      punch = new Punch({
        date: today,
        company: user.company,
        user: user,
        onduty: new PunchDetail({}),
        offduty: new PunchDetail({}),
        photos: []
      });

      punch.save(function (err, savePunch) {
        if (err || !savePunch) {
          return res.send({err: error.system.db_error});
        }
        req.todayPunch = savePunch;
        return next();
      });
    }
    else {
      req.todayPunch = punch;
      return next();
    }
  });
};