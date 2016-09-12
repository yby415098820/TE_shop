'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  sku: String,
  name: String,
  nameLower: String,
  Sid: { type: Schema.Types.ObjectId, ref: 'User'},
  slug: String,
  category: {_id: String, name: String, slug: String, category: String, parentCategory: String, },
  status: String,
  brand: {_id: String, name: String, info: String, slug: String},
  info: String,
  uid: String,
  variants: [{ image : String, price : Number, mrp : Number, weight : String, size : String }],
  features: Array,
  replies: [{ type: Schema.Types.ObjectId, ref: 'Reply'}],
  keyFeatures: Array,
  active: { type: Boolean, default: true },
  updated: {type: Date, default: Date.now},
 }, { versionKey: false });

module.exports = mongoose.model('Product', ProductSchema);
