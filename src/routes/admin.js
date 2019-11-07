import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

import auth  from "./../middleware/auth";
import { product, user } from "./../services/index";
import initPassportLocal from "./../controllers/passport/local";

initPassportLocal();

const router = express.Router();

router.get("/login", user.getLogin)
      .post("/login", (req, res, next) => {
        passport.authenticate("local", {session: false}, (err, user, info) => {
          if (err || !user) {
            return res.status(400).json({
              message: "login failse",
              user: user
            });
          };

          req.login(user, { session: false }, err => {
            if (err) {
              return console.log(err);
            }
            const token = jwt.sign({user}, process.env.SECRET_KEY_JWT);
            return res.json({token});
          })  
        })
        (req, res);
      });


router.get("/logout", user.logout);

router.get('/', auth.checkLogin, product.home);  
router.get("/products", auth.checkLogin,  product.getAllProduct);  
router.get("/product", auth.checkLogin,  product.getCreate);  


module.exports = router;