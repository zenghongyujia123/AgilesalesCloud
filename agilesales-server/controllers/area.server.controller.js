/**
 * Created by zenghong on 16/1/20.
 */

'use strict';
var areaService = require('./../services/all').area;


exports.updateAreaTitle = function (req, res, next) {
  var areaTitle = req.body.area_title;
  var company = req.user.company;
  areaService.updateAreaTitle(company, areaTitle, function (err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

exports.create = function (req, res, next) {

};

exports.multiCreate = function (req, res, next) {

};

