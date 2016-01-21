/**
 * Created by zenghong on 16/1/20.
 */
'use strict';
var errs = require('./../../errors/all');

exports.multiCreate = function (info, callback) {

};

exports.updateAreaTitle = function (company, areaTitle, callback) {
  company.areas_title.forEach(function (a) {
    if (a._id.toString() === areaTitle._id) {
      a.name = areaTitle.name;
    }
  });
  company.markModified('areas_title');
  company.save(function (err, company) {
    if (err) {
      return callback({err: errs.system.db_error});
    }
    return callback(null, company);
  });
};
