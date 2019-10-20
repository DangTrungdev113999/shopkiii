import mongoose from "mongoose";

let Schema = mongoose.Schema;

let orderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: "user"},
  username: {type: String, defalut: null},
  phone: {type: Number, default: null},
  email: {type: String, defalut: null},
  address: {type: String, default: null},
  cart: [
    {
      product: {type: Schema.Types.ObjectId, ref: "product"},
      quantity: {type: Number, defalut: 0}
    }
  ],
  status: {type: String, default: "order" },
  createdAt: {type: Number, default: Date.now},
  updatedAt: {type: Number, default: null},
})

let Order = mongoose.model("order", orderSchema);

module.exports = Order;