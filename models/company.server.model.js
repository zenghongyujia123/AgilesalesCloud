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
    nick_photo: '',
    photo: [{
      type: String
    }],
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
    super_admin: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    areas_title: [{
      type: Schema.Types.Mixed
    }],
    card_templates: [{
      type: Schema.Types.Mixed
    }]
  });

  var AreaTitleSchema = new Schema({
      object: {
        type: String,
        default: 'area'
      },
      name: {
        type: String
      },
      number: {
        type: String
      },
      level: {
        type: Number
      }
    }
  );

  CompanySchema.plugin(timestamps, {
    createdAt: 'created',
    updatedAt: 'updated'
  });
  AreaTitleSchema.plugin(timestamps, {
    createdAt: 'created',
    updatedAt: 'updated'
  });

  appDb.model('AreaTitle', AreaTitleSchema);
  appDb.model('Company', CompanySchema);

};
