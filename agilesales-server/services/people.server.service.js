/**
 * Created by zenghong on 16/1/27.
 */
'use strict';

var appDb = require('./../../libraries/mongoose').appDb,
  err = require('./../../errors/all'),
  async = require('async'),
  User = appDb.model('User');

exports.uploadMultiPeoples = function (company, peoples, callback) {
  async.each(peoples, function (people, eachCallback) {
    User.findOne({company: company, username: people.telephone}, function (err, user) {
      if (!user) {
        user = new User({
          username: people.telephone,
          company: company
        });
      }

      user.password = '111111';
      user.telephone = people.telephone;
      user.roles = [];
      user.number = people.number;
      user.job_number = people.job_number;
      user.nickname = people.nickname;
      user.job = people.job;
      user.duty = people.duty;
      user.email = people.email;
      user.sex = people.sex;
      user.parent_number = people.parent_number;
      user.parent_name = people.parent_name;
      user.city = people.city;
      user.area = people.area;
      user.job_status = '在职';

      if (people.role === '导购') {
        user.roles.push('shopping_guide');
      }
      else {
        user.roles.push('sales_man');
      }
      user.save(function (err, saveUser) {
        return eachCallback();
      });
    });

  }, function (err) {
    if (err) {
      return callback(err);
    }
    return callback({});
  });
};

exports.getPeoples = function (company,callback) {
  User.find({company: company}, function (err, users) {
    if (err || !users) {
      return callback({err: err.system.db_error});
    }
    return callback(null, users);
  });
};
