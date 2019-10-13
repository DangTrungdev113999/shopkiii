const express = require("express");

const { product } = require("./../services/index")

const router = express.Router();

router.get('/', product.home);

router.get("/products", product.getAllProduct)
router.get("/product/:pid", product.getProduct)

router.get("/product", product.getCreate);
router.post("/product", product.postCreate);
router.put("/product/:pid", product.updateProduct);
router.delete("/product/:pid", product.deleteProduct);


module.exports = router;