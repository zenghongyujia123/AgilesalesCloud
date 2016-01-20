/**
 * Created by zenghong on 16/1/20.
 */
/**
 * Created by elinaguo on 15/3/17.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  timestamps = require('mongoose-timestamp');

module.exports = function (appDb) {
  var CompanySchema = new Schema({
    object: {
      type: String,
      default: 'company'
    },
    name: {
      type: String,
      unique: true,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    photo: {
      type: String,
      default: ''
    },
    contact_name: {
      type: String,
      default: ''
    },
    contact_phone: {
      type: String,
      default: ''
    },
    contact_email: {
      type: String,
      default: ''
    },
    areas: [{
      type: Schema.Types.Mixed
    }],
    card_templates: [{
      type: Schema.Types.Mixed
    }]
  });

  CompanySchema.plugin(timestamps, {
    createdAt: 'created',
    updatedAt: 'updated'
  });
  appDb.model('Company', CompanySchema);

};
