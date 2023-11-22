const User = require("../models/model");
const user = new User();

exports.homepage = (req, res) => {
  res.render("index", { messages: user.getMsg() });
};

  
exports.addMsg = (req, res) => {
  user.addMsg(req.body.message);
  res.redirect("/");
};
