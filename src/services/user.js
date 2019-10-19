let getLogin = (req, res) => {
  res.render("admin/login/login");
};


let logout = (req, res) => {
  req.logout();
  res.redirect("/admin/login");
};

module.exports = {
  getLogin,
  logout
}