const User = require("../models/model");
const user = new User();

exports.homepage = (req, res) => {
  res.render("index", { users: user.getUser() });
};

  
exports.setName = (req, res) => {
  const name = req.params.name;
  user.setName(name);
  res.redirect('/');
};

