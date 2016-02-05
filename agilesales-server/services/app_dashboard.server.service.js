/**
 * Created by zenghong on 16/1/20.
 */
'use strict';

var appDb = require('./../../libraries/mongoose').appDb,
  error = require('./../../errors/all'),
  Punch = appDb.model('Punch'),
  User = appDb.model('User');

function getUserAllChildsUserIds(user, callback) {
  User.aggregate([
    {
      $match: {
        path: {$regex: ',' + user.job_number + ',', $options: 'i'}
      }
    },
    {
      $group: {
        _id: '$company',
        user_ids: {$push: '$_id'}
      }
    }
  ]).exec(function (err, result) {
    if (err || !result) {
      return callback({err: error.system.db_error});
    }
    return callback(null, result[0].user_ids);
  });
}

exports.getMultiDutyTimeRange = function (user, info, callback) {
  getUserAllChildsUserIds(user, function (err, user_ids) {
    if (err) {
      return callback(err);
    }

    Punch.aggregate([
      {
        $match: {
          'user._id': {$in: user_ids}
        }
      },
      {
        $group: {
          _id: {user_id: '$user._id', duty: '$user.duty', name: '$user.name'},
          count: {$sum: 1},
          duty_time: {$sum: '$duty_time'}
        }
      },
      {
        $project: {
          user_info: '$_id',
          count: '$count',
          duty_time: '$duty_time',
          sort_value: '$duty_time',
          user_id: '$_id.user_id',
          _id: 0
        }
      },
      {
        $sort: {duty_time: -1}
      }
    ]).exec(function (err, punchs) {
      if (err || !punchs) {
        return callback({err: error.system.db_error});
      }
      return callback(null, punchs);
    });
  });
};

//exports.getMultiDutyTimeRange();


exports.getSingleDutyTimeRange = function (user, info, callback) {
  Punch.aggregate([
    {
      $match: {
        'user._id': user._id
      }
    },
    {
      $sort: {date: -1}
    }
  ]).exec(function (err, result) {
    if (err || !result) {
      return callback({err: error.system.db_error});
    }
    return callback(null, result);
  });
};
