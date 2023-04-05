let database = require("../database");
const passport = require("../middleware/passport");
const userController = require("./userController").userModel;

let authController = {
  login: (req, res) => {
    
    // console.log(req.body);
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
    //
    return;
  },
  
  logout: (req, res) => {
    req.logout(() => res.redirect("/login"))
  }
};

module.exports = authController;
