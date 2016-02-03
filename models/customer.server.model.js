/**
 * Created by zenghong on 16/1/22.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  timestamps = require('mongoose-timestamp');

module.exports = function (appDb) {
  var CustomerSchema = new Schema({
    object: {
      type: String,
      default: 'customer'
    },
    name: {
      type: String
    },
    short_name: {
      type: String
    },
    number: {
      type: String
    },
    //客户等级
    customer_level: {
      type: String
    },
    customer_type: {
      type: String
    },
    channel_type: {
      type: String
    },
    //客户地址
    address: {
      type: String
    },
    //客户送货地址
    delivery_address: {
      type: String
    },
    contact_phone: {
      type: String
    },
    contact_telephone: {
      type: String
    },
    contact_name: {
      type: String
    },
    principal_number: {
      type: String
    },
    principal_name: {
      type: String
    },
    area_level1: {
      type: String
    },
    area_level2: {
      type: String
    },
    area_level3: {
      type: String
    },
    area_level4: {
      type: String
    },
    area_level5: {
      type: String
    },
    area_level6: {
      type: String
    },
    area_level7: {
      type: String
    },
    area_level8: {
      type: String
    },
    area_level9: {
      type: String
    },
    area_level10: {
      type: String
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    },
    promotion_card: {
      type: Schema.Types.Mixed
    },
    salesman_card: {
      type: Schema.Types.Mixed
    }
  });

  CustomerSchema.plugin(timestamps, {
    createdAt: 'created',
    updatedAt: 'updated'
  });

  appDb.model('Customer', CustomerSchema);
};
