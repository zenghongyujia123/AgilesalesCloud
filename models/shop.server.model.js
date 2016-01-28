/**
 * Created by zenghong on 16/1/27.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  timestamps = require('mongoose-timestamp');

module.exports = function (appDb) {
  var ShopSchema = new Schema({
    object: {
      type: String,
      default: 'shop'
    },
    number: {
      type: String
    },
    name: {
      type: String
    },
    level: {
      type: String
    },
    //所属区域
    area: {
      type: String
    },
    //所属城市
    city: {
      type: String
    },
    address: {
      type: String
    },
    channel_type: {
      type: String
    },
    ship_type: {
      type: String
    },
    channel: {
      type: String
    },
    customer: {
      type: String
    },
    salesman_name: {
      type: String
    },
    salesman_number: {
      type: String
    },
    promotions_name: {
      type: String
    },
    promotions_number: {
      type: String
    },
    call_count: {
      type: Number
    },
    status: {
      type: String
    },
    location: [{
      type:Number
    }],
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    }
  });

  ShopSchema.plugin(timestamps, {
    createdAt: 'created',
    updatedAt: 'updated'
  });

  appDb.model('Shop', ShopSchema);
};
