'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema

const ProductSchema = Schema({
  name: String,
  image: String,
  price: { type: Number, default: 0 },
  category: { type: String },
  description: String
})

module.exports = mongoose.model('Product', ProductSchema)
