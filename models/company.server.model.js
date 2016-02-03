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
    }],
    tables: [{
      type: Schema.Types.Mixed
    }],
    salesman_defaul_card: {
      type: Schema.Types.Mixed
    },
    promotion_defaul_card: {
      type: Schema.Types.Mixed
    }
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

  CompanySchema.pre('save', function (next) {
    var self = this;
    if (self.card_templates.length >= 2) {
      self.card_templates.forEach(function (card) {
        if (card.type === 'default' && card.role === 'promotions') {
          self.promotion_defaul_card = card;
          self.markModified('promotion_defaul_card');
        }
        if (card.type === 'default' && card.role === 'salesman') {
          self.salesman_defaul_card = card;
          self.markModified('salesman_defaul_card');
        }
      });
    }
    return next();
  });

  appDb.model('AreaTitle', AreaTitleSchema);
  appDb.model('Company', CompanySchema);

};
