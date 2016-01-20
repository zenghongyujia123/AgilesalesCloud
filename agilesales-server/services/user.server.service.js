/**
 * Created by zenghong on 16/1/20.
 */
'use strict';

var appDb = require('./../../libraries/mongoose').appDb,
  err = require('./../../errors/all'),
  User = appDb.model('User');

exports.signin = function (username, password, callback) {
  User.findOne({username: username}, function (err, user) {
    if (err) {
      return callback({err: err.system.db_error});
    }
    if (!user) {
      return callback({err: err.business.user_account_not_exist});
    }

    if (user.password !== password) {
      return callback({err: err.business.user_account_password_error});
    }

    return callback(null, user);
  });
};

