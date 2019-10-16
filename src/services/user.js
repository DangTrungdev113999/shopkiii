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
      console.log(__dirname);
      const token = jwt.sign({
        username
      }, privateKey, { algorithm: 'RS256', expiresIn: '2h'});
      
      req.session.user = {
        username
      }

      // console.log(req.session.user);

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



module.exports = {
  getLogin,
  postLogin,
}