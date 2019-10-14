const jwt = require('jsonwebtoken');
const path = require("path");
const fs = require('fs');

let getLogin = (req, res) => {
  res.render();
};

let postLogin = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    if (username === "trung" && password === "123") {
      const privateKey = fs.readFileSync(path.join(__dirname, "../../key.pem"));
      console.log(__dirname);
      const token = jwt.sign({
        username
      }, privateKey, { algorithm: 'RS256', expiresIn: '2h'});
      
      req.session.user = {
        username
      }

      res.status(200).send(token);
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