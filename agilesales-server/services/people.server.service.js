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
      if (user.job_number === '000873') {
        console.log(people);
      }

      user.password = '111111';
      user.telephone = people.telephone;
      user.roles = [];
      user.number = people.number;
      user.job_number = people.job_number;
      user.nickname = people.nickname;
      user.name = people.name;
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
        user.roles.push('promotion');
      }
      else {
        user.roles.push('salesman');
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

exports.getPeoples = function (company, callback) {
  User.find({company: company}, function (err, users) {
    if (err || !users) {
      return callback({err: err.system.db_error});
    }
    return callback(null, users);
  });
};
var count = 0;

function updateChildPath(company, parent, callback) {
  User.find({company: company, parent_number: parent.job_number}, function (err, users) {
    if (users.length === 0) {
      return callback();
    }

    async.eachSeries(users, function (user, eachCallback) {
      user.path = (parent.path || '') + parent.job_number + ',';

      user.save(function (err, saveUser) {
        console.log(saveUser.path);
        return updateChildPath(company, saveUser, eachCallback);
      });
    }, function (err) {
      return callback();
    });
  });
}

exports.updatePeoplesPath = function (company, callback) {
  User.find({company: company, parent_number: {$exists: false}, job_number: {$exists: true}}, function (err, users) {
    if (err || !users) {
      return callback({err: err.system.db_error});
    }
    async.eachSeries(users, function (user, eachCallback) {
      user.path = null;
      user.save(function (err, saveUser) {
        return updateChildPath(company, saveUser, eachCallback);
      });
    }, function (err) {
      return callback(null, {success: true});
    });
  });
};

function getPeopleUnderlings(parent, callback) {
  User.aggregate([
    {
      $match: {
        parent_number: parent.job_number
      }
    },
    {
      $project: {
        _id: '$_id',
        job_number: '$job_number',
        name: '$name',
        duty: '$duty'
      }
    }
  ]).exec(function (err, result) {
    if (err || !result || result.length === 0) {
      return callback();
    }
    parent.childs = result;

  });
}

exports.getPeopleUnderlings = function (user, company, callback) {
  if (user.toObject)
    user = user.toObject();
  User.aggregate([
    {
      $match: {
        parent_number: user.job_number,
        company: company._id
      }
    },
    {
      $project: {
        _id: '$_id',
        job_number: '$job_number',
        name: '$name',
        duty: '$duty'
      }
    }
  ]).exec(function (err, result) {
    if (err || !result) {
      return callback(null, []);
    }
    user.childs = result;
    async.each(result, function (parent, eachCallback) {
      return exports.getPeopleUnderlings(parent, company, eachCallback);
    }, function (err) {
      console.log(user);
      return callback(err, user);
    });
  });
};


