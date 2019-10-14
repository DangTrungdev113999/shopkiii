let Product = require('./../models/product');


let home = (req, res) => {
  res.render("admin/content/home/home");
};

let getAllProduct = async (req, res) => {
  try {
    let products = await Product.find().exec();
    // res.render("admin/content/product/productsList", { products });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }

}

let getProduct = async (req, res) => {
  let productId = req.params.pid;
  let result = await Product.findById(productId).exec();
  res.json(result);
}

let getCreate = (req, res) => {
  res.render("admin/content/product/createProduct");
}


let postCreate = async (req, res) => {
  let newProduct = {
    name: req.body.productName,
    price: req.body.price,
    salePrice: req.body.salePrice,
    category: "category",
    description: req.body.description,
  }

  let result = await Product.create(newProduct);
  res.json(result);
}

let updateProduct = async (req, res) => {
  let productId = req.params.pid;
  let update = {
    name: req.body.productName,
    price: req.body.price,
    salePrice: req.body.salePrice,
    category: "category",
    description: req.body.description,
  }
  let result = await Product.findByIdAndUpdate(productId, update).exec();
  res.json(result);
}

let deleteProduct = async (req, res) => {
  let productId = req.params.pid;
  let result = await Product.findOneAndDelete(productId).exec();
  res.json(result);
}

module.exports = {
  home,
  getAllProduct,
  getProduct,
  getCreate,
  postCreate,
  updateProduct,
  deleteProduct
};