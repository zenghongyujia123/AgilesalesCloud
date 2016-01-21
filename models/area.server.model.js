/**
 * Created by zenghong on 16/1/21.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  timestamps = require('mongoose-timestamp');

module.exports = function (appDb) {
  var AreaSchema = new Schema({
    object: {
      type: String,
      default: 'area'
    },
    level1: {
      type: String,
      default: ''
    },
    level2: {
      type: String,
      default: ''
    },
    level3: {
      type: String,
      default: ''
    },
    level4: {
      type: String,
      default: ''
    },
    level5: {
      type: String,
      default: ''
    },
    level6: {
      type: String,
      default: ''
    },
    level7: {
      type: String,
      default: ''
    },
    level8: {
      type: String,
      default: ''
    },
    level9: {
      type: String,
      default: ''
    },
    level10: {
      type: String,
      default: ''
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    },
    key:{
      type:String
    }
  });

  AreaSchema.plugin(timestamps, {
    createdAt: 'created',
    updatedAt: 'updated'
  });

  appDb.model('Area', AreaSchema);
};
