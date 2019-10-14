const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: String,
  createdAt: {type: Number, default: Date.now},
  updetedAt: {type: Number, default: null},
  deletedAt: {type: Number, default: null}
})

const Category = mongoose.model("category", CategorySchema);

module.exports = Category;