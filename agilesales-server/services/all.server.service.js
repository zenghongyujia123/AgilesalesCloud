/**
 * Created by zenghong on 16/1/20.
 */
'use strict';
var _ = require('lodash');
exports = _.extend(exports, {
  index: require('./index'),
  area: require('./area'),
  company: require('./company'),
  user: require('./user'),
  app_user: require('./app_user'),
  people: require('./people'),
  product: require('./product'),
  shop: require('./shop'),
  punch: require('./punch'),
  customer: require('./customer'),
  card: require('./card')
});