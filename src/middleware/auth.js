import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";

let checkLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
    return res.redirect("/admin/login");
}

let checkLogout = (req, res, next) => {
  if (req.session.user) {
    res.redirect("/admin");
  }
  return next();
}

let checkToken = async (req, res, next) => {
  try {
    let token = req.headers.token;
    let cert = fs.readFileSync(path.join(__dirname, "../../csr.pem")); // get public key
    jwt.verify(token, "shhh",);
    if (cert) {
      return next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }

}

module.exports = {
  checkLogin,
  checkLogout,
  checkToken
}