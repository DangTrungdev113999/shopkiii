import jwt  from 'jsonwebtoken';
import path  from "path";
import fs  from 'fs';

let getLogin = (req, res) => {
  res.render("admin/login/login");
};

let postLogin = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    if (username === "phieuyet@gmail.com" && password === "Aa@123456") {
      const privateKey = fs.readFileSync(path.join(__dirname, "../../key.pem"));
      const token = jwt.sign({
        username
      }, privateKey, { expiresIn: '2h'});
      req.session.user = {
        username
      }

      res.status(200).send({
        status: true,
        token
      });
    } else {
      res.status(200).send({
        status: false,
        message: "wrrong email or password"
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }

}


let logout = (req, res) => {
  req.logout();
  res.redirect("/admin/login");
}

module.exports = {
  getLogin,
  postLogin,
  logout
}