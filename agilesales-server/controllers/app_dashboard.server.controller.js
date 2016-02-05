/**
 * Created by zenghong on 16/2/5.
 */

'use strict';

var appDashboardService = require('./../services/all').app_dashboard;


exports.getMultiDutyTimeRange = function (req, res, next) {
  appDashboardService.getMultiDutyTimeRange(
    req.user,
    req.body.info,
    function (err, result) {
      if (err) {
        return res.send(err);
      }
      return res.send(result);
    });
};

exports.getSingleDutyTimeRange = function (req, res, next) {
  appDashboardService.getSingleDutyTimeRange (
    req.user,
    req.body.info,
    function (err, result) {
      if (err) {
        return res.send(err);
      }
      return res.send(result);
    });
};
