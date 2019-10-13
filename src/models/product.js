const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: {type: Number},
  salePrice: {type: Number, default: 0},
  attribute: {
    size: [{type: String}],
    color: [{type: String}],
  },
  category: { type: String },
  description: {type: String, default: null},
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
  deletedAt: {  type: Number, default: null  }
}) 

const Product  = mongoose.model("product", ProductSchema);

module.exports = Product;