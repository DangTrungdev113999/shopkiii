import express from "express";
import passport from "passport";

import auth  from "./../middleware/auth";
import { product, user } from "./../services/index";
import initPassportLocal from "./../controllers/passport/local";

initPassportLocal();

const router = express.Router();

router.get("/login", user.getLogin)
      .post("/login", passport.authenticate("local", {
        successRedirect: "/admin",
        failureRedirect: "/admin/login"
      }));
router.get("/logout", user.logout);

router.get('/', auth.checkLogin, product.home);  
router.get("/products", auth.checkLogin,  product.getAllProduct);  
router.get("/product", auth.checkLogin,  product.getCreate);  


module.exports = router;