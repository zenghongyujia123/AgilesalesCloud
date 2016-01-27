/**
 * Created by zenghong on 16/1/27.
 */
'use strict';
var all = require('../controllers/all');
var filter = require('../filters/all').user;

module.exports = function (app) {
  app.route('/webapp/people/multi/upload').post(filter.requireUser, all.people.uploadMultiPeoples);
  app.route('/webapp/peoples').get(filter.requireUser, all.people.getPeoples);
};