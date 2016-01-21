/**
 * Created by zenghong on 16/1/20.
 */

'use strict';
var areaService = require('./../services/all').area;


exports.updateAreaTitle = function (req, res, next) {
  var area = req.body.area;
  var company = req.user.company;
  areaService.updateAreaTitle(company, area, function (err, result) {
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

