const express = require("express");

const { product } = require("./../services/index")

const router = express.Router();

router.get('/', product.index);

module.exports = router;