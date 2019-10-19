import express from "express";
import passport from "passport";


// import User from "./../models/User";
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

// router.post("/createUser", (req, res) => {
//   let newUser = {
//     username: "trung",
//     password: "123",
//     type: 1
//   }
//   User.create(newUser);
// })

router.get('/', auth.checkLogin, product.home);  
router.get("/products", auth.checkLogin,  product.getAllProduct);  
router.get("/product",  product.getCreate);  


module.exports = router;