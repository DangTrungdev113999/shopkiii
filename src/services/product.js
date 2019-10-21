import Product from './../models/Product';


let home = (req, res) => {
  res.render("admin/content/home/home", { user: req.user });
};

let getAllProduct = async (req, res) => {
  try {
    let products = await Product.findAllProduct();
    res.render("admin/content/product/productsList", { products ,  user: req.user});
  } catch (error) {
    console.log(error);
  }
}

let getCreate = (req, res) => {
  res.render("admin/content/product/createProduct", {  user: req.user  });
}


module.exports = {
  home,
  getAllProduct,
  getCreate,
};