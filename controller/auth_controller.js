let database = require("../database");
const passport = require("../middleware/passport");
const userController = require("./userController").userModel;

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },


  loginSubmit: passport.authenticate("local", {
      successRedirect: "/reminders",
      failureRedirect: "/login",
  }),

  registerSubmit: (req, res) => {
    let user = {
      id: database.length + 1,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      reminders: [],
      friends: []
    };
    database.push(user)
    res.redirect("/login");
  },
  
  logout: (req, res) => {
    req.logout(() => res.redirect("/login"))
  }
};

module.exports = authController;
