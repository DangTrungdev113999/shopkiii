const connectDB = require("./../config/connectDB");

const Product = require("./product");
const Category = require("./Category");

connectDB();

// let newCategory = {
//   name: "test1"
// }

// Category.create(newCategory).then(data => { console.log(data)});

Product.find({})
  .populate("category.id")
  .exec()
  .then(data => console.log(data[0].category));
