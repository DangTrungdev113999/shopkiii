import Product from './../../models/Product';

let getProduct = async (req, res) => {
  try {
    let productId = req.params.pid;
    let result = await Product.findProductById(productId);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}


let postCreate = async (req, res) => {
  try {
    let newProduct = {
      name: req.body.name,
      price: req.body.price,
      salePrice: req.body.salePrice,
      category: "5da292bb0d6d3554c71b3d3d", 
      description: req.body.description,
    }
  
    let result = await Product.addNew(newProduct);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

let updateProduct = async (req, res) => {
  try {
    let productId = req.params.pid;
    let update = {
      name: req.body.productName,
      price: req.body.price,
      salePrice: req.body.salePrice,
      category: "category",
      description: req.body.description,
    }
    let result = await Product.findProductByIdAndUpdate(productId, update);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(result);
  }
}

let deleteProduct = async (req, res) => {
  try {
    let productId = req.params.pid;
    let result = await Product.findProductAndDelete(productId);
    res.status(200).json(!!result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

module.exports = {
  getProduct,
  postCreate,
  updateProduct,
  deleteProduct
};