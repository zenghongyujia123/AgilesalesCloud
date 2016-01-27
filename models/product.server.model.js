/**
 * Created by zenghong on 16/1/27.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  timestamps = require('mongoose-timestamp');

module.exports = function (appDb) {
  var ProductSchema = new Schema({
    object: {
      type: String,
      default: 'product'
    },
    number:{
      type:String
    },
    barcode:{
      type:String
    },
    name:{
      type:String
    },
    short_name:{
      type:String
    },
    //品牌
    brand:{
      type:String
    },
    //系列
    series:{
      type:String
    },
    large_type:{
      type:String
    },
    small_type:{
      type:String
    },
    package_unit:{
      type:String
    },
    //规格
    specification:{
      type:String
    },
    system_price:{
      type:String
    },
    price:{
      type:String
    },
    product_level:{
      type:String
    },
    //是否新品
    is_new:{
      type:Boolean,
      default:false
    },
    //是否重点产品
    is_key:{
      type:Boolean,
      default:false
    },
    //是否档期促销品
    is_promotion:{
      type:Boolean,
      default:false
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    }
  });

  ProductSchema.plugin(timestamps, {
    createdAt: 'created',
    updatedAt: 'updated'
  });

  appDb.model('Product', ProductSchema);
};
