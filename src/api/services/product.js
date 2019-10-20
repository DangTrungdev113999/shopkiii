import Product from './../../models/Product';

let getProduct = async (req, res) => {
  let productId = req.params.pid;
  let result = await Product.findById(productId).exec();
  res.json(result);
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
  getProduct,
  postCreate,
  updateProduct,
  deleteProduct
};