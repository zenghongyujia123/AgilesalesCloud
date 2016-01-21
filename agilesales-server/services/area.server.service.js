/**
 * Created by zenghong on 16/1/20.
 */
'use strict';
var errs = require('./../../errors/all');
var appDb = require('./../../libraries/mongoose').appDb,
  Area = appDb.model('Area');
var async = require('async');


exports.uploadMultiArea = function (company, areas, callback) {
  async.each(areas, function (area, eachCallback) {
    Area.findOne({key: area.key, company: company}, function (err, findArea) {
      if (err) {
        return eachCallback();
      }

      if (!findArea) {
        findArea = new Area({
          key: area.key,
          level1: area.level1,
          level2: area.level2,
          level3: area.level3,
          level4: area.level4,
          level5: area.level5,
          level6: area.level6,
          level7: area.level7,
          level8: area.level8,
          level9: area.level9,
          level10: area.level10,
          company: company
        });
      }
      findArea.save(function () {
        return eachCallback();
      });
    });
  }, function (err) {
    return callback();
  });
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

exports.getAreas = function (company, callback) {
  Area.find({company: company}).sort('key').exec( function (err, areas) {
    if (err) {
      return callback({err: errs.system.db_error});
    }

    return callback(null, areas);
  });
};