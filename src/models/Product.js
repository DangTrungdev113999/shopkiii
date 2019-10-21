import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: {type: Number},
  salePrice: {type: Number, default: 0},
  attribute: {
    size: [{type: String}],
    color: [{type: String}],
  },
  category: { type: Schema.Types.ObjectId, ref: "category"},
  description: {type: String, default: null},
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
  deletedAt: {  type: Number, default: null  }
})   // collecyion: "..." not change name collection

ProductSchema.statics = {
  addNew(product) {
    return this.create(product);
  },
  findProductById(id) {
    return this.findById(id).exec();
  },
  findAllProduct() {
    return this.find().exec();
  },
  findProductByIdAndUpdate(id, update) {
    return this.findByIdAndUpdate(id, update).exec();
  },
  findProductAndDelete(id) {
    return this.findOneAndDelete(id).exec();
  }
}

const Product  = mongoose.model("product", ProductSchema);

module.exports = Product;