/**
 * Created by zenghong on 16/1/27.
 */

'use strict';

var peopleService = require('./../services/all').people;

exports.uploadMultiPeoples = function (req, res, next) {
  peopleService.uploadMultiPeoples(req.user.company, req.body.peoples, function (err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

exports.getPeoples = function (req, res, next) {
  peopleService.getPeoples(req.user.company, function (err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

exports.updatePeoplesPaths = function (req, res, next) {
  peopleService.updatePeoplesPath(req.user.company, function (err, result) {
    if (err) {
    }
    console.log(result);
  });

  return res.send(result);

};

