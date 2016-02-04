/**
 * Created by zenghong on 16/2/4.
 */
/**
 * Created by zenghong on 16/1/20.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  timestamps = require('mongoose-timestamp');

module.exports = function (appDb) {
  var PunchDetailSchema = new Schema({
    object: {
      type: String,
      default: 'punchDetail'
    },
    photo: {
      type: String
    },
    done_time: {
      type: Date
    },
    location: [{
      type: Number
    }],
    is_done: {
      type: Boolean,
      default: false
    },
    is_late: {
      type: Boolean
    }
  });
  var PunchSchema = new Schema({
    object: {
      type: String,
      default: 'punch'
    },
    date: {
      type: String
    },
    user: {
      type: Schema.Types.Mixed
    },
    onduty: {
      type: Schema.Types.Mixed
    },
    offduty: {
      type: Schema.Types.Mixed
    },
    duty_time: {
      type: Number
    },
    photos: [],
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    }
  });

  PunchSchema.pre('save', function (next) {

  });

  PunchDetailSchema.plugin(timestamps, {
    createdAt: 'created',
    updatedAt: 'updated'
  });

  PunchSchema.plugin(timestamps, {
    createdAt: 'created',
    updatedAt: 'updated'
  });
  appDb.model('PunchDetail', PunchDetailSchema);
  appDb.model('Punch', PunchSchema);
};
