// const express = require("express");
import express from "express";

import { product } from "./../services/index";
import auth  from  "./../../middleware/auth";

const router = express.Router();



router.get("/product/:pid", auth.checkToken, product.getProduct);
router.post("/product", product.postCreate);
router.put("/product/:pid",auth.checkToken, product.updateProduct);
router.delete("/product/:pid", product.deleteProduct);




module.exports = router;