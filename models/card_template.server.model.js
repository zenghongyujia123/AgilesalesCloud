/**
 * Created by zenghong on 16/1/27.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  timestamps = require('mongoose-timestamp');

module.exports = function (appDb) {
  var CardTemplateSchema = new Schema({
    object: {
      type: String,
      default: 'cardtemplate'
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    }
  });

  CardTemplateSchema.plugin(timestamps, {
    createdAt: 'created',
    updatedAt: 'updated'
  });

  appDb.model('CardTemplate', CardTemplateSchema);
};
