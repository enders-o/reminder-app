let database = require("../database");
const userController = require("./userController").userModel;

let authController = {
  login: (req, res) => {
    console.log(req.body);
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    // implement 

    console.log(req);
    res.redirect("/reminders")
  },

  registerSubmit: (req, res) => {
    //
  },
};

module.exports = authController;
