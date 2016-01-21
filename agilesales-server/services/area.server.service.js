/**
 * Created by zenghong on 16/1/20.
 */
'use strict';
var errs = require('./../../errors/all');

exports.multiCreate = function (info, callback) {

};

exports.updateAreaTitle = function (company, area, callback) {
  company.areas.forEach(function (a) {
    if (a._id.toString() === area._id) {
      a.name = area.name;
    }
  });
  company.markModified('areas');
  company.save(function (err, company) {
    if (err) {
      return callback({err: errs.system.db_error});
    }
    return callback(null, company);
  });
};
