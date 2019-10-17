import express from "express";

import { product, user } from "./../services/index";
import auth  from "./../middleware/auth";

const router = express.Router();

router.get("/login", user.getLogin);
router.post("/login", user.postLogin);

router.get('/', auth.checkLogin, product.home);  

router.get("/products", auth.checkLogin,  product.getAllProduct);  
router.get("/product/:pid", auth.checkToken, product.getProduct);

router.get("/product",  product.getCreate);  
router.post("/product",auth.checkToken, product.postCreate);
router.put("/product/:pid",auth.checkToken, product.updateProduct);
router.delete("/product/:pid",auth.checkToken, product.deleteProduct);


module.exports = router;